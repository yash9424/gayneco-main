const fs = require('fs');
const path = require('path');

const projects = [
  'FreePregnencyTest',
  'Low-cost-pregnancy', 
  'NeedUltraSound',
  'Pregnancy-Test',
  'SameDayUltraSound',
  'Teen-Pregnancy-Support',
  'WalkIn-Pregnancy',
  'Wic-Pregnancy-help'
];

const fixUniversalChat = (filePath) => {
  if (!fs.existsSync(filePath)) return false;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix API URLs
  content = content.replace(
    /const checkResponse = await fetch\(`http:\/\/localhost:3011\/api\/chat\?/g,
    'const apiUrl = process.env.NODE_ENV === \'production\' ? \'/api/chat\' : \'http://localhost:3011/api/chat\'\n      const checkResponse = await fetch(`${apiUrl}?'
  );
  
  content = content.replace(
    /const response = await fetch\('http:\/\/localhost:3011\/api\/chat'/g,
    'const response = await fetch(apiUrl'
  );
  
  content = content.replace(
    /await fetch\('http:\/\/localhost:3011\/api\/chat'/g,
    'const apiUrl = process.env.NODE_ENV === \'production\' ? \'/api/chat\' : \'http://localhost:3011/api/chat\'\n      await fetch(apiUrl'
  );
  
  content = content.replace(
    /const response = await fetch\(`http:\/\/localhost:3011\/api\/chat\?chatId=/g,
    'const apiUrl = process.env.NODE_ENV === \'production\' ? \'/api/chat\' : \'http://localhost:3011/api/chat\'\n          const response = await fetch(`${apiUrl}?chatId='
  );
  
  fs.writeFileSync(filePath, content);
  return true;
};

console.log('🔧 Fixing all projects...\n');

// Fix remaining projects
projects.forEach(project => {
  const chatPath = path.join(__dirname, project, 'components', 'universal-chat.tsx');
  
  if (fixUniversalChat(chatPath)) {
    console.log(`✅ Fixed ${project}/components/universal-chat.tsx`);
  } else {
    console.log(`⚠️  Chat component not found for ${project}`);
  }
});

console.log('\n🎉 All projects updated!');