const fs = require('fs');
const path = require('path');

// Your VPS IP address - change this to your actual VPS IP
const ADMIN_PANEL_IP = '72.60.30.153';

const sites = [
  { folder: 'AHCCCSHelp', name: 'AHCCCSHelp' },
  { folder: 'First-Trimester', name: 'First-Trimester' },
  { folder: 'FreePregnencyTest', name: 'FreePregnencyTest' },
  { folder: 'Low-cost-pregnancy', name: 'Low-cost-pregnancy' },
  { folder: 'NeedUltraSound', name: 'NeedUltraSound' },
  { folder: 'Pregnancy-Test', name: 'Pregnancy-Test' },
  { folder: 'SameDayUltraSound', name: 'SameDayUltraSound' },
  { folder: 'Teen-Pregnancy-Support', name: 'Teen-Pregnancy-Support' },
  { folder: 'WalkIn-Pregnancy', name: 'WalkIn-Pregnancy' },
  { folder: 'Wic-Pregnancy-help', name: 'Wic-Pregnancy-help' }
];

function fixBlogPage(sitePath, siteName) {
  const blogPagePath = path.join(sitePath, 'app', 'blog', 'page.tsx');
  
  if (!fs.existsSync(blogPagePath)) {
    console.log(`Blog page not found for ${siteName}`);
    return;
  }
  
  let content = fs.readFileSync(blogPagePath, 'utf8');
  
  // Replace hardcoded API URL with environment variable
  content = content.replace(
    /fetch\('http:\/\/72\.60\.30\.153\/api\/blogs\/site\/[^']+'\)/g,
    `fetch(\`\${process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://${ADMIN_PANEL_IP}'}/api/blogs/site/${siteName}\`)`
  );
  
  fs.writeFileSync(blogPagePath, content);
  console.log(`Fixed blog page for ${siteName}`);
}

function fixBlogDetailPage(sitePath, siteName) {
  const blogDetailPath = path.join(sitePath, 'app', 'blog', '[id]', 'page.tsx');
  
  if (!fs.existsSync(blogDetailPath)) {
    console.log(`Blog detail page not found for ${siteName}`);
    return;
  }
  
  let content = fs.readFileSync(blogDetailPath, 'utf8');
  
  // Replace hardcoded API URL with environment variable
  content = content.replace(
    /fetch\(`http:\/\/72\.60\.30\.153\/api\/blogs\/\$\{[^}]+\}`\)/g,
    `fetch(\`\${process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://${ADMIN_PANEL_IP}'}/api/blogs/\${params.id}\`)`
  );
  
  fs.writeFileSync(blogDetailPath, content);
  console.log(`Fixed blog detail page for ${siteName}`);
}

function fixBlogApiRoute(sitePath) {
  const blogApiPath = path.join(sitePath, 'app', 'api', 'blogs', 'route.ts');
  
  if (!fs.existsSync(blogApiPath)) return;
  
  let content = fs.readFileSync(blogApiPath, 'utf8');
  
  // Replace hardcoded URLs
  content = content.replace(/http:\/\/72\.60\.30\.153/g, `http://${ADMIN_PANEL_IP}`);
  
  fs.writeFileSync(blogApiPath, content);
  console.log(`Fixed blog API route for ${path.basename(sitePath)}`);
}

function createEnvFile(sitePath) {
  const envPath = path.join(sitePath, '.env.production');
  const envContent = `NEXT_PUBLIC_ADMIN_API_URL=http://${ADMIN_PANEL_IP}
NODE_ENV=production
`;
  
  fs.writeFileSync(envPath, envContent);
  console.log(`Created .env.production for ${path.basename(sitePath)}`);
}

// Process all sites
sites.forEach(site => {
  const sitePath = path.join(__dirname, site.folder);
  
  if (fs.existsSync(sitePath)) {
    fixBlogPage(sitePath, site.name);
    fixBlogDetailPage(sitePath, site.name);
    fixBlogApiRoute(sitePath);
    createEnvFile(sitePath);
  }
});

console.log('\n✅ All blog APIs updated successfully!');
console.log('\n📋 Next steps:');
console.log('1. Run this script on your VPS');
console.log('2. Rebuild all sites: for dir in */; do cd "$dir" && pnpm build && cd ..; done');
console.log('3. Restart PM2: pm2 restart all');
console.log('4. Check admin panel has blogs with correct project names');