const fs = require('fs');
const path = require('path');

// Your VPS IP address - change this to your actual VPS IP
const ADMIN_PANEL_IP = '72.60.30.153';

const sites = [
  'AHCCCSHelp',
  'First-Trimester', 
  'FreePregnencyTest',
  'Low-cost-pregnancy',
  'NeedUltraSound',
  'Pregnancy-Test',
  'SameDayUltraSound',
  'Teen-Pregnancy-Support',
  'WalkIn-Pregnancy',
  'Wic-Pregnancy-help'
];

sites.forEach(site => {
  const chatComponentPath = path.join(__dirname, site, 'components', 'universal-chat.tsx');
  const apiRoutePath = path.join(__dirname, site, 'app', 'api', 'chat', 'route.ts');
  
  // Fix universal-chat.tsx
  if (fs.existsSync(chatComponentPath)) {
    let content = fs.readFileSync(chatComponentPath, 'utf8');
    
    // Replace hardcoded URLs with admin panel IP
    content = content.replace(/http:\/\/72\.60\.30\.153/g, `http://${ADMIN_PANEL_IP}`);
    
    fs.writeFileSync(chatComponentPath, content);
    console.log(`Fixed ${site}/components/universal-chat.tsx`);
  }
  
  // Fix API route if exists
  if (fs.existsSync(apiRoutePath)) {
    let content = fs.readFileSync(apiRoutePath, 'utf8');
    
    // Replace hardcoded URLs with admin panel IP
    content = content.replace(/http:\/\/72\.60\.30\.153/g, `http://${ADMIN_PANEL_IP}`);
    
    fs.writeFileSync(apiRoutePath, content);
    console.log(`Fixed ${site}/app/api/chat/route.ts`);
  }
});

console.log('All API URLs updated!');