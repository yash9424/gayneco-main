const fs = require('fs');
const path = require('path');

console.log('🔍 Chat System Diagnostic\n');

// Check if environment files exist
console.log('1️⃣ Environment Files:');
const sites = ['AHCCCSHelp', 'First-Trimester', 'FreePregnencyTest', 'Low-cost-pregnancy', 'NeedUltraSound', 'Pregnancy-Test', 'SameDayUltraSound', 'Teen-Pregnancy-Support', 'WalkIn-Pregnancy', 'Wic-Pregnancy-help'];

sites.forEach(site => {
  const envPath = path.join(__dirname, site, '.env.production');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    console.log(`   ✅ ${site}: ${content.includes('NEXT_PUBLIC_ADMIN_API_URL') ? 'Has API URL' : 'Missing API URL'}`);
  } else {
    console.log(`   ❌ ${site}: No .env.production file`);
  }
});

// Check universal chat components
console.log('\n2️⃣ Chat Components:');
sites.forEach(site => {
  const chatPath = path.join(__dirname, site, 'components', 'universal-chat.tsx');
  if (fs.existsSync(chatPath)) {
    const content = fs.readFileSync(chatPath, 'utf8');
    const hasEnvVar = content.includes('process.env.NEXT_PUBLIC_ADMIN_API_URL');
    const hasHardcoded = content.includes('http://72.60.30.153');
    console.log(`   ${hasEnvVar ? '✅' : '❌'} ${site}: ${hasEnvVar ? 'Uses env vars' : 'Hardcoded URLs'}`);
  } else {
    console.log(`   ❌ ${site}: No universal-chat.tsx`);
  }
});

// Check if admin panel APIs exist
console.log('\n3️⃣ Admin Panel APIs:');
const adminApis = [
  'admin-panel/app/api/chat/route.ts',
  'admin-panel/app/api/blogs/route.ts',
  'admin-panel/lib/mongodb.ts'
];

adminApis.forEach(api => {
  const apiPath = path.join(__dirname, api);
  if (fs.existsSync(apiPath)) {
    console.log(`   ✅ ${api}`);
  } else {
    console.log(`   ❌ ${api} - Missing!`);
  }
});

console.log('\n📋 Common Issues & Fixes:');
console.log('❌ Chat not working? Try:');
console.log('   1. Run: node fix-all-sites-api.js');
console.log('   2. Rebuild: pnpm build (in each site folder)');
console.log('   3. Restart: pm2 restart all');
console.log('   4. Check: Browser console for errors');
console.log('   5. Test: Open chat widget and check Network tab');

console.log('\n❌ CORS errors? Check:');
console.log('   1. Nginx CORS headers in nginx.conf');
console.log('   2. Admin panel CORS in chat/route.ts');
console.log('   3. Environment variables are loaded');

console.log('\n❌ Database errors? Check:');
console.log('   1. MongoDB running: sudo systemctl status mongod');
console.log('   2. Connection string in admin-panel/lib/mongodb.ts');
console.log('   3. Database permissions');

console.log('\n✅ Quick Test:');
console.log('   1. Open any site (e.g., ahcccshelp.com)');
console.log('   2. Click chat button (bottom right)');
console.log('   3. Fill form and click "Start Chat"');
console.log('   4. Check admin panel for new conversation');