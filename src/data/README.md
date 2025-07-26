# Data Structure Documentation

## Overview

This directory contains all the data structures for the GoLu Foundation website. The data is organized in a way that makes it easy to integrate with a backend API later.

## File Structure

```
src/data/
├── organizationData.js      # Main organization data
├── schoolData.js           # School-specific data
├── treePlantData.js        # Tree planting event data
├── apiStructure.js         # API structure and helpers
├── dataService.js          # Data service layer
└── README.md              # This documentation
```

## Data Files

### 1. organizationData.js
Contains comprehensive data about the entire organization including:
- Basic organization information
- Contact details
- Leadership team
- Programs and services
- Statistics and achievements
- Financial information
- Partners and collaborators
- Events and activities
- Donation information
- Volunteer information
- News and updates
- Gallery
- Settings and configuration

### 2. schoolData.js
Contains detailed information about the school including:
- Hero section with stats
- About section with features
- Educational programs (Primary school only)
- Facilities
- Achievements
- Admission process
- Contact information

### 3. treePlantData.js
Contains information about tree planting events including:
- Event details
- Objectives
- Activities schedule
- Tree species information
- Impact assessment
- Participant information
- Gallery
- Future plans

## API Integration Structure

### 4. apiStructure.js
Defines the API structure for backend integration:
- API endpoints configuration
- Data models
- Response formats
- Query parameters
- Authentication structure
- File upload configuration
- Cache configuration
- Helper functions

### 5. dataService.js
Provides a unified service layer that:
- Can switch between local JSON data and API calls
- Implements caching for performance
- Provides fallback mechanisms
- Handles form submissions
- Manages search functionality

## Key Features

### Non-Profit Organization Focus
- All data reflects the non-profit nature of the organization
- School is specifically a primary school
- Emphasis on social service and community development
- Transparent financial information
- Volunteer and donation opportunities

### Backend-Ready Structure
- RESTful API endpoint structure
- Consistent data models
- Standardized response formats
- Query parameter support
- Authentication and authorization ready

### Easy Migration Path
- Data service layer abstracts data source
- Environment variable controls API usage
- Graceful fallback to local data
- Caching for performance
- No breaking changes when switching to API

## Usage Examples

### Using the Data Service

```javascript
import dataService from '@/services/dataService';

// Get organization info
const orgInfo = await dataService.getOrganizationInfo();

// Get school data
const schoolData = await dataService.getSchoolInfo();

// Get tree planting events
const treePlantData = await dataService.getTreePlantInfo();

// Submit a donation
const donationResult = await dataService.submitDonation({
  donorName: "John Doe",
  amount: 1000,
  method: "bKash"
});

// Search content
const searchResults = await dataService.searchContent("বৃক্ষরোপণ");
```

### Switching to API Mode

Set the environment variable:
```bash
NEXT_PUBLIC_USE_API=true
```

Or programmatically:
```javascript
dataService.setUseAPI(true);
```

## Data Models

### Organization Model
```javascript
{
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
}
```

### School Model
```javascript
{
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
}
```

### Event Model
```javascript
{
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
}
```

## API Endpoints

### Organization Endpoints
- `GET /api/organization` - Get organization info
- `GET /api/organization/contact` - Get contact info
- `GET /api/organization/leadership` - Get leadership team
- `GET /api/organization/statistics` - Get statistics
- `GET /api/organization/financial` - Get financial info

### School Endpoints
- `GET /api/school` - Get school info
- `GET /api/school/programs` - Get school programs
- `GET /api/school/facilities` - Get school facilities
- `GET /api/school/admission` - Get admission info

### Events Endpoints
- `GET /api/events` - Get all events
- `GET /api/events/upcoming` - Get upcoming events
- `GET /api/events/past` - Get past events
- `POST /api/events/:id/register` - Register for event

### Tree Planting Endpoints
- `GET /api/tree-plant/events` - Get tree planting events
- `GET /api/tree-plant/species` - Get tree species
- `GET /api/tree-plant/statistics` - Get statistics
- `GET /api/tree-plant/gallery` - Get gallery

## Configuration

### Environment Variables
```bash
NEXT_PUBLIC_USE_API=true              # Enable API mode
NEXT_PUBLIC_API_URL=http://localhost:3000/api  # API base URL
```

### Cache Configuration
- Default cache timeout: 5 minutes
- Cache keys are automatically generated
- Cache is cleared when switching between local/API mode

## Migration Guide

### From Local Data to API

1. **Prepare Backend API**
   - Implement the endpoints defined in `apiStructure.js`
   - Ensure response formats match the defined models
   - Set up authentication if required

2. **Update Environment Variables**
   ```bash
   NEXT_PUBLIC_USE_API=true
   NEXT_PUBLIC_API_URL=your-api-url
   ```

3. **Test Integration**
   - Verify all endpoints work correctly
   - Check fallback mechanisms
   - Test form submissions

4. **Deploy**
   - Deploy backend API
   - Update frontend environment variables
   - Monitor for any issues

### Benefits of This Structure

1. **Seamless Migration**: No code changes needed when switching to API
2. **Performance**: Built-in caching reduces API calls
3. **Reliability**: Fallback to local data if API fails
4. **Maintainability**: Centralized data management
5. **Scalability**: Easy to add new data sources
6. **Development**: Can work offline with local data

## Contributing

When adding new data:
1. Update the appropriate data file
2. Add corresponding API endpoint in `apiStructure.js`
3. Add service method in `dataService.js`
4. Update this documentation
5. Test both local and API modes

## Support

For questions about the data structure or API integration, refer to:
- `apiStructure.js` for endpoint definitions
- `dataService.js` for usage examples
- This README for general guidance 