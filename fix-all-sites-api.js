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

function updateUniversalChat(sitePath) {
  const chatPath = path.join(sitePath, 'components', 'universal-chat.tsx');
  
  if (!fs.existsSync(chatPath)) return;
  
  let content = fs.readFileSync(chatPath, 'utf8');
  
  // Add API_BASE constant at the top of functions
  content = content.replace(
    /const startChat = async \(\) => \{/g,
    `const startChat = async () => {
    const API_BASE = process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://${ADMIN_PANEL_IP}';`
  );
  
  content = content.replace(
    /const sendMessage = async \(\) => \{/g,
    `const sendMessage = async () => {
    const API_BASE = process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://${ADMIN_PANEL_IP}';`
  );
  
  // Replace hardcoded URLs
  content = content.replace(/http:\/\/72\.60\.30\.153/g, '${API_BASE}');
  content = content.replace(/\`\$\{API_BASE\}/g, '`${API_BASE}');
  
  // Fix polling function
  content = content.replace(
    /const interval = setInterval\(async \(\) => \{[\s\S]*?try \{/g,
    `const interval = setInterval(async () => {
        try {
          const API_BASE = process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://${ADMIN_PANEL_IP}';`
  );
  
  fs.writeFileSync(chatPath, content);
  console.log(`Updated ${sitePath}/components/universal-chat.tsx`);
}

function updateApiRoute(sitePath) {
  const apiPath = path.join(sitePath, 'app', 'api', 'chat', 'route.ts');
  
  if (!fs.existsSync(apiPath)) return;
  
  let content = fs.readFileSync(apiPath, 'utf8');
  
  // Replace hardcoded URLs
  content = content.replace(/http:\/\/72\.60\.30\.153/g, `http://${ADMIN_PANEL_IP}`);
  
  fs.writeFileSync(apiPath, content);
  console.log(`Updated ${sitePath}/app/api/chat/route.ts`);
}

function createEnvFile(sitePath) {
  const envPath = path.join(sitePath, '.env.production');
  const envContent = `NEXT_PUBLIC_ADMIN_API_URL=http://${ADMIN_PANEL_IP}
NODE_ENV=production
`;
  
  fs.writeFileSync(envPath, envContent);
  console.log(`Created ${sitePath}/.env.production`);
}

// Process all sites
sites.forEach(site => {
  const sitePath = path.join(__dirname, site);
  
  if (fs.existsSync(sitePath)) {
    updateUniversalChat(sitePath);
    updateApiRoute(sitePath);
    createEnvFile(sitePath);
  }
});

console.log('\n✅ All sites updated successfully!');
console.log('\n📋 Next steps:');
console.log('1. Run this script on your VPS');
console.log('2. Rebuild all sites: pnpm build');
console.log('3. Restart PM2: pm2 restart all');
console.log('4. Reload Nginx: sudo nginx -s reload');