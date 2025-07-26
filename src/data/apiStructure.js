// API-like structure for easy backend integration
// This structure mimics REST API endpoints for seamless backend integration

export const apiStructure = {
  // Base API configuration
  config: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    version: "v1",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  },

  // API Endpoints structure
  endpoints: {
    // Organization endpoints
    organization: {
      info: "/organization",
      contact: "/organization/contact",
      leadership: "/organization/leadership",
      statistics: "/organization/statistics",
      financial: "/organization/financial",
      partners: "/organization/partners",
      settings: "/organization/settings"
    },

    // Programs endpoints
    programs: {
      list: "/programs",
      education: "/programs/education",
      environment: "/programs/environment",
      socialServices: "/programs/social-services",
      details: "/programs/:id"
    },

    // School endpoints
    school: {
      info: "/school",
      programs: "/school/programs",
      facilities: "/school/facilities",
      achievements: "/school/achievements",
      admission: "/school/admission",
      teachers: "/school/teachers",
      students: "/school/students",
      gallery: "/school/gallery"
    },

    // Events endpoints
    events: {
      list: "/events",
      upcoming: "/events/upcoming",
      past: "/events/past",
      details: "/events/:id",
      register: "/events/:id/register"
    },

    // Tree planting endpoints
    treePlant: {
      events: "/tree-plant/events",
      species: "/tree-plant/species",
      statistics: "/tree-plant/statistics",
      gallery: "/tree-plant/gallery",
      impact: "/tree-plant/impact"
    },

    // News endpoints
    news: {
      list: "/news",
      latest: "/news/latest",
      category: "/news/category/:category",
      details: "/news/:id"
    },

    // Gallery endpoints
    gallery: {
      list: "/gallery",
      categories: "/gallery/categories",
      category: "/gallery/category/:category",
      images: "/gallery/images"
    },

    // Donation endpoints
    donation: {
      info: "/donation",
      methods: "/donation/methods",
      history: "/donation/history",
      create: "/donation/create",
      verify: "/donation/verify"
    },

    // Volunteer endpoints
    volunteer: {
      info: "/volunteer",
      register: "/volunteer/register",
      opportunities: "/volunteer/opportunities",
      application: "/volunteer/application"
    },

    // Contact endpoints
    contact: {
      send: "/contact/send",
      subscribe: "/contact/subscribe"
    }
  },

  // Data models for API responses
  models: {
    // Organization model
    organization: {
      id: "string",
      name: "string",
      englishName: "string",
      tagline: "string",
      type: "string",
      registrationNumber: "string",
      established: "string",
      mission: "string",
      vision: "string",
      logo: "string",
      favicon: "string",
      createdAt: "date",
      updatedAt: "date"
    },

    // Contact model
    contact: {
      id: "string",
      address: "string",
      phone: "string",
      email: "string",
      website: "string",
      officeHours: "string",
      socialMedia: {
        facebook: "string",
        twitter: "string",
        instagram: "string",
        youtube: "string"
      }
    },

    // Program model
    program: {
      id: "string",
      name: "string",
      description: "string",
      type: "string",
      category: "string",
      status: "active|inactive",
      startDate: "date",
      endDate: "date",
      location: "string",
      beneficiaries: "number",
      budget: "number",
      images: ["string"],
      createdAt: "date",
      updatedAt: "date"
    },

    // School model
    school: {
      id: "string",
      name: "string",
      type: "string",
      description: "string",
      established: "string",
      location: "string",
      capacity: "number",
      currentStudents: "number",
      teachers: "number",
      facilities: ["string"],
      achievements: ["object"],
      admissionInfo: "object",
      gallery: ["string"],
      status: "active|inactive",
      createdAt: "date",
      updatedAt: "date"
    },

    // Event model
    event: {
      id: "string",
      title: "string",
      description: "string",
      date: "date",
      time: "string",
      location: "string",
      organizer: "string",
      partner: "string",
      participants: "number",
      maxParticipants: "number",
      status: "upcoming|ongoing|completed|cancelled",
      category: "string",
      images: ["string"],
      registrationRequired: "boolean",
      registrationDeadline: "date",
      createdAt: "date",
      updatedAt: "date"
    },

    // News model
    news: {
      id: "string",
      title: "string",
      summary: "string",
      content: "string",
      author: "string",
      category: "string",
      image: "string",
      tags: ["string"],
      publishedAt: "date",
      status: "published|draft",
      views: "number",
      createdAt: "date",
      updatedAt: "date"
    },

    // Donation model
    donation: {
      id: "string",
      donorName: "string",
      donorEmail: "string",
      donorPhone: "string",
      amount: "number",
      currency: "string",
      method: "string",
      type: "string",
      message: "string",
      status: "pending|completed|failed",
      transactionId: "string",
      createdAt: "date",
      updatedAt: "date"
    },

    // Volunteer model
    volunteer: {
      id: "string",
      name: "string",
      email: "string",
      phone: "string",
      age: "number",
      occupation: "string",
      interests: ["string"],
      availability: "string",
      experience: "string",
      status: "pending|approved|rejected",
      joinedAt: "date",
      createdAt: "date",
      updatedAt: "date"
    }
  },

  // API Response formats
  responses: {
    // Success response format
    success: {
      status: "success",
      message: "string",
      data: "object|array",
      meta: {
        page: "number",
        limit: "number",
        total: "number",
        totalPages: "number"
      }
    },

    // Error response format
    error: {
      status: "error",
      message: "string",
      code: "string",
      details: "object"
    },

    // Pagination format
    pagination: {
      page: "number",
      limit: "number",
      total: "number",
      totalPages: "number",
      hasNext: "boolean",
      hasPrev: "boolean"
    }
  },

  // Query parameters for filtering and sorting
  queryParams: {
    // Common query parameters
    common: {
      page: "number",
      limit: "number",
      sort: "string",
      order: "asc|desc",
      search: "string",
      status: "string"
    },

    // Event specific parameters
    events: {
      category: "string",
      date: "date",
      location: "string",
      organizer: "string"
    },

    // News specific parameters
    news: {
      category: "string",
      author: "string",
      tags: "string",
      publishedAfter: "date",
      publishedBefore: "date"
    },

    // School specific parameters
    school: {
      type: "string",
      location: "string",
      capacity: "number"
    }
  },

  // Authentication and authorization
  auth: {
    // JWT token structure
    token: {
      access: "string",
      refresh: "string",
      expiresIn: "number"
    },

    // User roles
    roles: {
      admin: "full access",
      manager: "manage content",
      editor: "edit content",
      viewer: "view only"
    },

    // Permissions
    permissions: {
      organization: ["read", "write", "delete"],
      programs: ["read", "write", "delete"],
      events: ["read", "write", "delete"],
      news: ["read", "write", "delete"],
      donations: ["read", "write"],
      volunteers: ["read", "write"]
    }
  },

  // File upload configuration
  upload: {
    // Image upload
    images: {
      maxSize: "5MB",
      allowedTypes: ["jpg", "jpeg", "png", "webp"],
      dimensions: {
        maxWidth: 1920,
        maxHeight: 1080
      },
      quality: 85
    },

    // Document upload
    documents: {
      maxSize: "10MB",
      allowedTypes: ["pdf", "doc", "docx"]
    }
  },

  // Cache configuration
  cache: {
    // Cache keys
    keys: {
      organization: "org:info",
      programs: "programs:list",
      events: "events:list",
      news: "news:list",
      gallery: "gallery:list"
    },

    // Cache duration (in seconds)
    duration: {
      short: 300,    // 5 minutes
      medium: 3600,  // 1 hour
      long: 86400,   // 24 hours
      veryLong: 604800 // 1 week
    }
  }
};

// Helper functions for API integration
export const apiHelpers = {
  // Build API URL
  buildUrl: (endpoint, params = {}) => {
    let url = `${apiStructure.config.baseUrl}${endpoint}`;
    
    // Replace path parameters
    Object.keys(params.path || {}).forEach(key => {
      url = url.replace(`:${key}`, params.path[key]);
    });

    // Add query parameters
    if (params.query) {
      const queryString = new URLSearchParams(params.query).toString();
      url += `?${queryString}`;
    }

    return url;
  },

  // Make API request
  makeRequest: async (endpoint, options = {}) => {
    const url = apiHelpers.buildUrl(endpoint, options);
    
    const config = {
      method: options.method || 'GET',
      headers: {
        ...apiStructure.config.headers,
        ...options.headers
      },
      timeout: apiStructure.config.timeout
    };

    if (options.body) {
      config.body = JSON.stringify(options.body);
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Get organization info
  getOrganizationInfo: () => {
    return apiHelpers.makeRequest(apiStructure.endpoints.organization.info);
  },

  // Get programs
  getPrograms: (params = {}) => {
    return apiHelpers.makeRequest(apiStructure.endpoints.programs.list, {
      query: params
    });
  },

  // Get events
  getEvents: (params = {}) => {
    return apiHelpers.makeRequest(apiStructure.endpoints.events.list, {
      query: params
    });
  },

  // Get news
  getNews: (params = {}) => {
    return apiHelpers.makeRequest(apiStructure.endpoints.news.list, {
      query: params
    });
  },

  // Submit donation
  submitDonation: (donationData) => {
    return apiHelpers.makeRequest(apiStructure.endpoints.donation.create, {
      method: 'POST',
      body: donationData
    });
  },

  // Register volunteer
  registerVolunteer: (volunteerData) => {
    return apiHelpers.makeRequest(apiStructure.endpoints.volunteer.register, {
      method: 'POST',
      body: volunteerData
    });
  },

  // Send contact message
  sendContactMessage: (messageData) => {
    return apiHelpers.makeRequest(apiStructure.endpoints.contact.send, {
      method: 'POST',
      body: messageData
    });
  }
}; 