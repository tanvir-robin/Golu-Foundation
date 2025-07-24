# Golu Foundation Website

A modern, responsive website for the Golu Foundation - a non-profit organization dedicated to transforming lives through quality education and environmental conservation.

## 🌟 Features

### 🎨 Design & User Experience
- **Modern & Clean Design** - Professional layout with appealing aesthetics
- **Fully Responsive** - Optimized for all device sizes (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Interactive Elements** - Hover effects, scroll animations, and micro-interactions
- **Accessibility** - Built with accessibility best practices

### 📱 Sections

1. **Hero Section** - Compelling introduction with animated statistics
2. **About Section** - Foundation's mission, values, and impact
3. **School Section** - Dedicated section for Golu Biddaniketon school
4. **Environment Section** - Tree plantation and conservation initiatives
5. **Contact Section** - Contact form and information
6. **Footer** - Links, social media, and newsletter signup

### 🛠 Technical Features
- **Next.js 15** - Latest React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Professional icon library
- **SEO Optimized** - Meta tags and Open Graph support
- **Performance Optimized** - Image optimization and code splitting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd golufoundation

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.js           # Root layout with metadata
│   └── page.js             # Main homepage
├── components/
│   ├── layout/
│   │   ├── Navbar.js       # Navigation bar
│   │   └── Footer.js       # Footer component
│   └── sections/
│       ├── Hero.js         # Hero section
│       ├── About.js        # About section
│       ├── School.js       # School section
│       ├── Environment.js  # Environment section
│       └── Contact.js      # Contact section
```

## 🎯 Key Highlights

### Golu Biddaniketon School
- Showcases the foundation's educational programs
- Student achievements and statistics
- Program highlights with modern curriculum
- Call-to-action for admissions

### Environmental Conservation
- Tree plantation initiatives
- Environmental impact statistics
- Community involvement programs
- Conservation education efforts

### Professional Design Elements
- Gradient backgrounds and text effects
- Card-based layouts with hover animations
- Professional typography and spacing
- Custom scrollbar and focus states

## 🌐 Technologies Used

- **Framework**: Next.js 15.4.3
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Webpack (via Next.js)

## 📝 Customization

### Colors
The website uses a green and blue color scheme representing nature and trust:
- Primary Green: `#22c55e`
- Primary Blue: `#2563eb`
- Gray scales for text and backgrounds

### Adding Content
1. **Images**: Replace placeholder URLs with actual foundation images
2. **Content**: Update text content in each component
3. **Contact Info**: Update contact details in Contact and Footer components
4. **Social Links**: Add actual social media URLs in Footer component

### Adding New Sections
1. Create new component in `src/components/sections/`
2. Import and add to `src/app/page.js`
3. Update navigation links in Navbar if needed

## 🔧 Build & Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🤝 Contributing

When adding content or making changes:

1. Maintain the existing design system
2. Ensure all components are responsive
3. Test animations and interactions
4. Update this README if adding new features

## 📞 Support

For questions about the website or foundation:
- Email: info@golufoundation.org
- Phone: +1 (555) 123-4567

---

**Built with ❤️ for a better world** - Golu Foundation
