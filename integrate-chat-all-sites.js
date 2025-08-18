const fs = require('fs');
const path = require('path');

const allSites = [
  'AHCCCSHelp',
  'First-Trimester', 
  'FreePregnencyTest',
  'Low-cost-pregnancy',
  'NeedUltraSound',
  'SameDayUltraSound',
  'Teen-Pregnancy-Support',
  'WalkIn-Pregnancy',
  'Wic-Pregnancy-help'
];

allSites.forEach(site => {
  const pagePath = path.join(__dirname, site, 'app', 'page.tsx');
  
  try {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Add import if not exists
    if (!content.includes('UniversalChat')) {
      content = content.replace(
        /import.*from 'lucide-react'/,
        `$&\nimport UniversalChat from '@/components/universal-chat'`
      );
      
      // Add component before closing div
      content = content.replace(
        /<\/div>\s*\)\s*}?\s*$/,
        `      <UniversalChat siteName="${site}" />\n    </div>\n  )\n}`
      );
      
      fs.writeFileSync(pagePath, content, 'utf8');
      console.log(`Updated ${site} with universal chat`);
    } else {
      console.log(`${site} already has universal chat`);
    }
  } catch (error) {
    console.error(`Failed to update ${site}:`, error.message);
  }
});

console.log('Chat integration completed!');