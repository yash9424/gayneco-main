export async function GET() {
  try {
    const response = await fetch('https://binzo.fun/api/blogs', {
      headers: {
        'Origin': 'https://lowcostpregnancy.com'
      }
    })
    if (!response.ok) {
      return Response.json([])
    }
    const data = await response.json()
    // Filter blogs for this specific project
    const filteredBlogs = data.filter(blog => 
      blog.projects && blog.projects.includes('Low-cost-pregnancy')
    )
    return Response.json(filteredBlogs)
  } catch (error) {
    return Response.json([])
  }
}