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

const envContent = `NEXT_PUBLIC_ADMIN_API_URL=http://${ADMIN_PANEL_IP}
NODE_ENV=production
`;

sites.forEach(site => {
  const envPath = path.join(__dirname, site, '.env.production');
  
  fs.writeFileSync(envPath, envContent);
  console.log(`Created ${site}/.env.production`);
});

console.log('All .env.production files created!');