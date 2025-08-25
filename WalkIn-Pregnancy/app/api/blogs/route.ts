export async function GET() {
  try {
    const response = await fetch('https://binzo.fun/api/blogs', {
      headers: {
        'Origin': 'https://walkinpregnancy.com'
      }
    })
    if (!response.ok) {
      return Response.json([])
    }
    const data = await response.json()
    // Filter blogs for this specific project
    console.log('All blogs:', data.map(b => ({ title: b.title, projects: b.projects })))
    const filteredBlogs = data.filter(blog => {
      if (!blog.projects || !Array.isArray(blog.projects)) return false
      const matches = blog.projects.includes('WalkIn-Pregnancy')
      console.log(`Blog "${blog.title}" projects:`, blog.projects, 'matches WalkIn-Pregnancy:', matches)
      return matches
    })
    console.log('Filtered blogs for WalkIn-Pregnancy:', filteredBlogs.length)
    return Response.json(filteredBlogs)
  } catch (error) {
    return Response.json([])
  }
}