// Data Service Layer
// This service provides a unified interface for accessing data
// It can easily switch between local JSON data and API calls

import { organizationData } from '@/data/organizationData';
import { schoolData } from '@/data/schoolData';
import { treePlantData } from '@/data/treePlantData';
import { apiHelpers } from '@/data/apiStructure';

class DataService {
  constructor() {
    this.useAPI = process.env.NEXT_PUBLIC_USE_API === 'true';
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutes
  }

  // Cache management
  setCache(key, data) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  getCache(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    this.cache.delete(key);
    return null;
  }

  clearCache() {
    this.cache.clear();
  }

  // Organization data
  async getOrganizationInfo() {
    const cacheKey = 'organization_info';
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const data = await apiHelpers.getOrganizationInfo();
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
        // Fallback to local data
      }
    }

    const data = {
      status: 'success',
      data: organizationData.organization
    };
    this.setCache(cacheKey, data);
    return data;
  }

  async getOrganizationContact() {
    const cacheKey = 'organization_contact';
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const data = await apiHelpers.makeRequest('/organization/contact');
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
      }
    }

    const data = {
      status: 'success',
      data: organizationData.contact
    };
    this.setCache(cacheKey, data);
    return data;
  }

  async getOrganizationLeadership() {
    const cacheKey = 'organization_leadership';
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const data = await apiHelpers.makeRequest('/organization/leadership');
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
      }
    }

    const data = {
      status: 'success',
      data: organizationData.leadership
    };
    this.setCache(cacheKey, data);
    return data;
  }

  async getOrganizationStatistics() {
    const cacheKey = 'organization_statistics';
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const data = await apiHelpers.makeRequest('/organization/statistics');
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
      }
    }

    const data = {
      status: 'success',
      data: organizationData.statistics
    };
    this.setCache(cacheKey, data);
    return data;
  }

  // Programs data
  async getPrograms(category = null) {
    const cacheKey = `programs_${category || 'all'}`;
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const params = category ? { category } : {};
        const data = await apiHelpers.getPrograms(params);
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
      }
    }

    let programsData;
    if (category === 'education') {
      programsData = organizationData.programs.education;
    } else if (category === 'environment') {
      programsData = organizationData.programs.environment;
    } else if (category === 'socialServices') {
      programsData = organizationData.programs.socialServices;
    } else {
      programsData = organizationData.programs;
    }

    const data = {
      status: 'success',
      data: programsData
    };
    this.setCache(cacheKey, data);
    return data;
  }

  // School data
  async getSchoolInfo() {
    const cacheKey = 'school_info';
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const data = await apiHelpers.makeRequest('/school');
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
      }
    }

    const data = {
      status: 'success',
      data: schoolData
    };
    this.setCache(cacheKey, data);
    return data;
  }

  async getSchoolSection(section) {
    const cacheKey = `school_${section}`;
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const data = await apiHelpers.makeRequest(`/school/${section}`);
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
      }
    }

    const data = {
      status: 'success',
      data: schoolData[section]
    };
    this.setCache(cacheKey, data);
    return data;
  }

  // Tree plant data
  async getTreePlantInfo() {
    const cacheKey = 'tree_plant_info';
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const data = await apiHelpers.makeRequest('/tree-plant/events');
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
      }
    }

    const data = {
      status: 'success',
      data: treePlantData
    };
    this.setCache(cacheKey, data);
    return data;
  }

  async getTreePlantSection(section) {
    const cacheKey = `tree_plant_${section}`;
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const data = await apiHelpers.makeRequest(`/tree-plant/${section}`);
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
      }
    }

    const data = {
      status: 'success',
      data: treePlantData[section]
    };
    this.setCache(cacheKey, data);
    return data;
  }

  // Events data
  async getEvents(type = 'all', params = {}) {
    const cacheKey = `events_${type}_${JSON.stringify(params)}`;
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const endpoint = type === 'upcoming' ? '/events/upcoming' : 
                        type === 'past' ? '/events/past' : '/events';
        const data = await apiHelpers.getEvents(params);
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
      }
    }

    let eventsData;
    if (type === 'upcoming') {
      eventsData = organizationData.events.upcoming;
    } else if (type === 'past') {
      eventsData = organizationData.events.past;
    } else {
      eventsData = {
        upcoming: organizationData.events.upcoming,
        past: organizationData.events.past
      };
    }

    const data = {
      status: 'success',
      data: eventsData
    };
    this.setCache(cacheKey, data);
    return data;
  }

  // News data
  async getNews(params = {}) {
    const cacheKey = `news_${JSON.stringify(params)}`;
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const data = await apiHelpers.getNews(params);
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
      }
    }

    let newsData = organizationData.news;

    // Apply filters if provided
    if (params.category) {
      newsData = newsData.filter(news => news.category === params.category);
    }

    if (params.limit) {
      newsData = newsData.slice(0, parseInt(params.limit));
    }

    const data = {
      status: 'success',
      data: newsData
    };
    this.setCache(cacheKey, data);
    return data;
  }

  // Gallery data
  async getGallery(category = null) {
    const cacheKey = `gallery_${category || 'all'}`;
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const endpoint = category ? `/gallery/category/${category}` : '/gallery';
        const data = await apiHelpers.makeRequest(endpoint);
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
      }
    }

    let galleryData;
    if (category) {
      galleryData = organizationData.gallery.categories.find(cat => cat.name === category);
    } else {
      galleryData = organizationData.gallery;
    }

    const data = {
      status: 'success',
      data: galleryData
    };
    this.setCache(cacheKey, data);
    return data;
  }

  // Donation data
  async getDonationInfo() {
    const cacheKey = 'donation_info';
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const data = await apiHelpers.makeRequest('/donation');
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
      }
    }

    const data = {
      status: 'success',
      data: organizationData.donation
    };
    this.setCache(cacheKey, data);
    return data;
  }

  // Volunteer data
  async getVolunteerInfo() {
    const cacheKey = 'volunteer_info';
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const data = await apiHelpers.makeRequest('/volunteer');
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local data:', error);
      }
    }

    const data = {
      status: 'success',
      data: organizationData.volunteer
    };
    this.setCache(cacheKey, data);
    return data;
  }

  // Form submissions
  async submitDonation(donationData) {
    if (this.useAPI) {
      try {
        return await apiHelpers.submitDonation(donationData);
      } catch (error) {
        console.error('Donation submission failed:', error);
        throw error;
      }
    }

    // Mock success response for local development
    return {
      status: 'success',
      message: 'Donation submitted successfully',
      data: {
        id: Date.now().toString(),
        ...donationData,
        status: 'pending',
        createdAt: new Date().toISOString()
      }
    };
  }

  async registerVolunteer(volunteerData) {
    if (this.useAPI) {
      try {
        return await apiHelpers.registerVolunteer(volunteerData);
      } catch (error) {
        console.error('Volunteer registration failed:', error);
        throw error;
      }
    }

    // Mock success response for local development
    return {
      status: 'success',
      message: 'Volunteer registered successfully',
      data: {
        id: Date.now().toString(),
        ...volunteerData,
        status: 'pending',
        createdAt: new Date().toISOString()
      }
    };
  }

  async sendContactMessage(messageData) {
    if (this.useAPI) {
      try {
        return await apiHelpers.sendContactMessage(messageData);
      } catch (error) {
        console.error('Contact message submission failed:', error);
        throw error;
      }
    }

    // Mock success response for local development
    return {
      status: 'success',
      message: 'Message sent successfully',
      data: {
        id: Date.now().toString(),
        ...messageData,
        createdAt: new Date().toISOString()
      }
    };
  }

  // Utility methods
  async searchContent(query, categories = []) {
    const cacheKey = `search_${query}_${categories.join('_')}`;
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    if (this.useAPI) {
      try {
        const data = await apiHelpers.makeRequest('/search', {
          query: { q: query, categories: categories.join(',') }
        });
        this.setCache(cacheKey, data);
        return data;
      } catch (error) {
        console.warn('API failed, falling back to local search:', error);
      }
    }

    // Local search implementation
    const results = [];
    const searchTerm = query.toLowerCase();

    // Search in news
    const news = organizationData.news.filter(item =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.summary.toLowerCase().includes(searchTerm)
    );
    results.push(...news.map(item => ({ ...item, type: 'news' })));

    // Search in events
    const events = [...organizationData.events.upcoming, ...organizationData.events.past];
    const filteredEvents = events.filter(item =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
    results.push(...filteredEvents.map(item => ({ ...item, type: 'event' })));

    const data = {
      status: 'success',
      data: results
    };
    this.setCache(cacheKey, data);
    return data;
  }

  // Configuration
  setUseAPI(useAPI) {
    this.useAPI = useAPI;
    this.clearCache(); // Clear cache when switching modes
  }

  getUseAPI() {
    return this.useAPI;
  }
}

// Create singleton instance
const dataService = new DataService();

export default dataService; 