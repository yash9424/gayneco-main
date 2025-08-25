const fs = require('fs');
const path = require('path');

const projects = [
  'Low-cost-pregnancy',
  'NeedUltraSound', 
  'Pregnancy-Test',
  'SameDayUltraSound',
  'Teen-Pregnancy-Support',
  'WalkIn-Pregnancy',
  'Wic-Pregnancy-help'
];

projects.forEach(project => {
  const filePath = path.join(__dirname, project, 'app', 'blog', 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix API URL
    content = content.replace(/fetch\('https:\/\/binzo\.fun\/api\/blogs'\)/g, "fetch('/api/blogs')");
    
    // Fix image rendering
    content = content.replace(
      /src=\{`data:image\/jpeg;base64,\$\{post\.image\}`\}\s*alt=\{post\.title\}\s*className="w-full h-full object-cover"/g,
      `src={\`data:image/jpeg;base64,\${post.image}\`} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = \`data:image/png;base64,\${post.image}\`
                    }}`
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${project} blog page`);
  }
});

console.log('All blog pages fixed!');