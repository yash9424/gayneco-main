import { NextRequest } from 'next/server'
import { getDb } from '../../../lib/mongodb'

export async function GET(request: NextRequest) {
  try {
    const db = await getDb()
    
    // Get chat statistics by project
    const chatStats = await db.collection('chats')
      .aggregate([
        { $group: {
          _id: '$project',
          totalChats: { $sum: 1 },
          uniqueUsers: { $addToSet: '$userIdentity' }
        }},
        { $project: {
          project: '$_id',
          totalChats: 1,
          uniqueUsers: { $size: '$uniqueUsers' }
        }}
      ]).toArray()

    // Get blog statistics
    const blogStats = await db.collection('blogs')
      .aggregate([
        { $unwind: '$projects' },
        { $group: {
          _id: '$projects',
          totalBlogs: { $sum: 1 }
        }},
        { $project: {
          project: '$_id',
          totalBlogs: 1
        }}
      ]).toArray()

    // Get real geographical data from chat conversations by project
    const geoData = await db.collection('chats')
      .aggregate([
        { $match: { userIdentity: { $ne: null } } },
        { $group: {
          _id: '$project',
          users: { $addToSet: '$userIdentity' },
          totalChats: { $sum: 1 }
        }},
        { $project: {
          project: '$_id',
          users: { $size: '$users' },
          chats: '$totalChats'
        }},
        { $sort: { users: -1 } }
      ]).toArray()

    // Get recent activity (last 7 days)
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    
    const recentActivity = await db.collection('chats')
      .aggregate([
        { $match: { timestamp: { $gte: sevenDaysAgo } } },
        { $group: {
          _id: { 
            date: { $dateToString: { format: '%Y-%m-%d', date: '$timestamp' } },
            project: '$project'
          },
          count: { $sum: 1 }
        }},
        { $sort: { '_id.date': 1 } }
      ]).toArray()

    // Get total unique users across all projects
    const totalUsers = await db.collection('chats')
      .aggregate([
        { $match: { userIdentity: { $ne: null } } },
        { $group: { _id: '$userIdentity' } },
        { $count: 'totalUsers' }
      ]).toArray()

    const uniqueUsersCount = totalUsers[0]?.totalUsers || 0

    const response = Response.json({
      chatStats,
      blogStats,
      geoData,
      recentActivity,
      totalUsers: uniqueUsersCount,
      timestamp: new Date()
    })
    
    response.headers.set('Access-Control-Allow-Origin', '*')
    return response
  } catch (error) {
    console.error('Analytics API error:', error)
    return Response.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
  }
}