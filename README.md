# Gayneco - Gynecologist Services Platform

A comprehensive platform managing 10 gynecologist service websites with a centralized admin panel.

## Projects Overview

### Main Websites (Ports 3001-3010)
1. **AHCCCSHelp** - Port 3001
2. **First-Trimester** - Port 3002  
3. **FreePregnencyTest** - Port 3003
4. **Low-cost-pregnancy** - Port 3004
5. **NeedUltraSound** - Port 3005
6. **Pregnancy-Test** - Port 3006
7. **SameDayUltraSound** - Port 3007
8. **Teen-Pregnancy-Support** - Port 3008
9. **WalkIn-Pregnancy** - Port 3009
10. **Wic-Pregnancy-help** - Port 3010

### Admin Panel - Port 3011
Centralized management system for all websites with:
- Overview dashboard
- All sites management
- Blog management (MongoDB)
- Chat management (MongoDB)
- Dark/Light theme support
- Responsive design

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
- **Dashboard**: Overview of all sites, blogs, and chat statistics
- **Site Management**: Quick access to all 10 websites
- **Blog Management**: Create and publish blogs to multiple sites
- **Chat Monitoring**: View chat messages across all platforms
- **Theme Support**: Dark/Light mode toggle
- **Responsive Design**: Mobile, tablet, and desktop support

### Individual Website Features
- Modern responsive design
- Dark/Light theme support
- Blog integration
- Chat functionality
- SEO optimized

## Development

### Adding New Features
1. For admin panel: Edit files in `/admin-panel/`
2. For individual sites: Edit files in respective project folders
3. Database operations: Use MongoDB collections in `/admin-panel/lib/mongodb.ts`

### Port Configuration
Each project runs on a specific port (3001-3011). Modify `package.json` scripts to change ports.

## Deployment
Each project can be deployed independently or as a monorepo. Configure environment variables for production MongoDB connection.

## Contributing
1. Fork the repository
2. Create feature branch
3. Make changes
4. Submit pull request

## License
MIT License