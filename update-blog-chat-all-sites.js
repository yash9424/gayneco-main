const fs = require('fs');
const path = require('path');

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
  const filePath = path.join(__dirname, site, 'app', 'blog', 'page.tsx');
  
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace ChatWidget import with UniversalChat
      content = content.replace(
        /import ChatWidget from '@\/components\/chat-widget'/g,
        "import UniversalChat from '@/components/universal-chat'"
      );
      
      // Replace ChatWidget usage with UniversalChat
      content = content.replace(
        /<ChatWidget \/>/g,
        `<UniversalChat siteName="${site}" />`
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${site}/app/blog/page.tsx to use UniversalChat`);
    } else {
      console.log(`Blog page not found for ${site}`);
    }
  } catch (error) {
    console.error(`Failed to update ${site}:`, error.message);
  }
});

console.log('Blog page chat updates completed for all sites!');