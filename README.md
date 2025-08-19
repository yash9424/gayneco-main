# Gayneco - Gynecologist Services Platform

A comprehensive platform managing 10 gynecologist service websites with a centralized admin panel featuring real-time analytics, persistent chat system, and advanced management tools.

## Projects Overview

### Main Websites (Ports 3001-3010)
1. **AHCCCSHelp** - Port 3001 - AHCCCS pregnancy confirmation & Medicaid support
2. **First-Trimester** - Port 3002 - Early pregnancy care & guidance
3. **FreePregnencyTest** - Port 3003 - Free pregnancy testing services
4. **Low-cost-pregnancy** - Port 3004 - Affordable pregnancy care options
5. **NeedUltraSound** - Port 3005 - Ultrasound appointment services
6. **Pregnancy-Test** - Port 3006 - Pregnancy testing & confirmation
7. **SameDayUltraSound** - Port 3007 - Same-day ultrasound services
8. **Teen-Pregnancy-Support** - Port 3008 - Teen pregnancy support & resources
9. **WalkIn-Pregnancy** - Port 3009 - Walk-in pregnancy services
10. **Wic-Pregnancy-help** - Port 3010 - WIC program assistance

### Admin Panel - Port 3011
Advanced centralized management system with:
- **Real-time Analytics Dashboard** with live charts and statistics
- **Persistent Chat System** with user identity matching
- **Blog Management** with multi-site publishing
- **Chat Management** with filtering and real-time monitoring
- **Settings Management** with password updates
- **Dark/Light Theme** support
- **Responsive Design** for all devices
- **Performance Optimizations** with caching and connection pooling

## Tech Stack
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Package Manager**: pnpm
- **Icons**: Lucide React
- **UI Components**: Radix UI

## Setup Instructions

### Prerequisites
- Node.js 18+
- pnpm
- MongoDB running on localhost:27017

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TechnovaTech/gayneco-main.git
cd gayneco-main
```

2. Install dependencies for all projects:
```bash
# Install admin panel
cd admin-panel
pnpm install

# Install each website
cd ../AHCCCSHelp && pnpm install
cd ../First-Trimester && pnpm install
cd ../FreePregnencyTest && pnpm install
cd ../Low-cost-pregnancy && pnpm install
cd ../NeedUltraSound && pnpm install
cd ../Pregnancy-Test && pnpm install
cd ../SameDayUltraSound && pnpm install
cd ../Teen-Pregnancy-Support && pnpm install
cd ../WalkIn-Pregnancy && pnpm install
cd ../Wic-Pregnancy-help && pnpm install
```

3. Start MongoDB:
```bash
mongod
```

4. Run projects:
```bash
# Start admin panel
cd admin-panel && pnpm dev

# Start individual websites
cd AHCCCSHelp && pnpm dev
cd First-Trimester && pnpm dev
# ... and so on for each project
```

## Database Configuration
- **Database Name**: gynecologist
- **Connection URL**: mongodb://localhost:27017
- **Collections**: blogs, chats

## Features

### Admin Panel Features
- **Real-time Analytics**: Live dashboard with user activity charts, site performance metrics, and geographical data visualization
- **Advanced Chat System**: Persistent conversations with user identity matching, auto-scroll, and real-time monitoring
- **Blog Management**: Create, edit, and publish blogs to multiple sites with image support and filtering
- **Site Management**: Quick access to all 10 websites with performance metrics
- **Settings Panel**: Secure password management with eye toggle visibility
- **Toast Notifications**: Centered, auto-dismissing notifications
- **Theme Support**: Dark/Light mode toggle with system preference detection
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Database connection pooling, caching headers, and React optimizations

### Individual Website Features
- **Modern Responsive Design** with Framer Motion animations
- **Persistent Chat System** - conversations continue across sessions
- **Header Chat Access** - easy chat access from navigation
- **Auto-scroll Chat** - messages automatically scroll to latest
- **Dark/Light Theme** support with smooth transitions
- **Blog Integration** with real-time content
- **SEO Optimized** with proper meta tags and structure
- **Performance Optimized** with lazy loading and efficient rendering

## API Endpoints

### Admin Panel APIs
- `GET/POST /api/blogs` - Blog management
- `GET/POST/DELETE /api/chat` - Chat system with persistent conversations
- `GET /api/analytics` - Real-time analytics data
- `GET/PUT /api/admin` - Admin settings management

### Chat System Features
- **Persistent Conversations**: Users identified by name + age + contact + site
- **Real-time Updates**: Messages sync every 2 seconds
- **Auto-scroll**: Chat automatically scrolls to latest messages
- **Admin Integration**: Centralized chat management across all sites

## Development

### Adding New Features
1. **Admin Panel**: Edit files in `/admin-panel/`
2. **Individual Sites**: Edit files in respective project folders
3. **Database Operations**: Use optimized MongoDB collections in `/admin-panel/lib/mongodb.ts`
4. **Chat System**: Universal chat component in `/components/universal-chat.tsx`

### Performance Optimizations
- **Database**: Connection pooling with 10 max connections
- **API Caching**: 30-60 second cache headers for static content
- **React**: useCallback, useMemo, and conditional rendering
- **MongoDB**: Parallel queries and optimized aggregations

### Port Configuration
Each project runs on a specific port (3001-3011). Modify `package.json` scripts to change ports.

## Deployment
Each project can be deployed independently or as a monorepo. 

### Environment Variables
- `MONGODB_URI`: Production MongoDB connection string
- `NODE_ENV`: Set to 'production' for optimizations

### Production Considerations
- Configure MongoDB connection pooling for production load
- Set up proper caching headers for static assets
- Enable compression for API responses
- Configure CORS for cross-origin requests

## Recent Updates

### v2.0.0 - Latest Release
- ✅ **Real-time Analytics Dashboard** with live charts
- ✅ **Persistent Chat System** with user identity matching
- ✅ **Performance Optimizations** - 30% faster API responses
- ✅ **Enhanced UI/UX** with auto-scroll and better notifications
- ✅ **Header Chat Integration** for easy access
- ✅ **Advanced Filtering** for blogs and chats
- ✅ **Settings Management** with secure password updates
- ✅ **Database Optimizations** with connection pooling

### v1.0.0 - Initial Release
- Basic admin panel with blog and chat management
- 10 individual gynecologist websites
- MongoDB integration
- Dark/Light theme support

## Contributing
1. Fork the repository
2. Create feature branch
3. Make changes
4. Submit pull request

## License
MIT License