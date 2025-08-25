const fs = require('fs');
const path = require('path');

const projects = [
  { folder: 'Low-cost-pregnancy', name: 'Low-cost-pregnancy' },
  { folder: 'NeedUltraSound', name: 'NeedUltraSound' },
  { folder: 'Pregnancy-Test', name: 'Pregnancy-Test' },
  { folder: 'SameDayUltraSound', name: 'SameDayUltraSound' },
  { folder: 'Teen-Pregnancy-Support', name: 'Teen-Pregnancy-Support' },
  { folder: 'WalkIn-Pregnancy', name: 'WalkIn-Pregnancy' },
  { folder: 'Wic-Pregnancy-help', name: 'Wic-Pregnancy-help' }
];

projects.forEach(project => {
  const filePath = path.join(__dirname, project.folder, 'app', 'api', 'blogs', 'route.ts');
  
  if (fs.existsSync(filePath)) {
    const newContent = `export async function GET() {
  try {
    const response = await fetch('https://binzo.fun/api/blogs?project=${project.name}', {
      headers: {
        'Origin': 'https://${project.folder.toLowerCase().replace(/-/g, '')}.com'
      }
    })
    if (!response.ok) {
      return Response.json([])
    }
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json([])
  }
}`;
    
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed ${project.folder} API`);
  }
});

console.log('All APIs fixed!');