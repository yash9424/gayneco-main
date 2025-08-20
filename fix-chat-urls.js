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

projects.forEach(project => {
  const chatPath = path.join(__dirname, project, 'components', 'universal-chat.tsx');
  
  if (fs.existsSync(chatPath)) {
    let content = fs.readFileSync(chatPath, 'utf8');
    
    // Replace hardcoded localhost URLs with environment-based URLs
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
    
    fs.writeFileSync(chatPath, content);
    console.log(`✅ Fixed ${project}/components/universal-chat.tsx`);
  } else {
    console.log(`⚠️  Chat component not found for ${project}`);
  }
});

console.log('🎉 All chat components updated for production!');