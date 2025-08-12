import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from 'lucide-react'
import Image from "next/image"
import { AnimatedBackground } from "@/components/animated-background"
import ChatWidget from "@/components/chat-widget"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Early Signs of Pregnancy You Shouldn't Ignore",
      excerpt: "Understanding the first signs of pregnancy can help you seek care early and ensure the best outcomes for you and your baby.",
      date: "March 15, 2024",
      author: "Dr. Sarah Johnson",
      category: "Pregnancy Care",
      image: "/pregnant-woman-doctor.png"
    },
    {
      title: "How to Get WIC Support in Arizona",
      excerpt: "A comprehensive guide to applying for WIC benefits in Arizona, including eligibility requirements and application process.",
      date: "March 10, 2024",
      author: "Maria Rodriguez, RN",
      category: "Resources",
      image: "/placeholder-ztd0n.png"
    },
    {
      title: "What to Expect at Your First OB Visit Without Insurance",
      excerpt: "Learn what happens during your first prenatal appointment and how to prepare when you don't have insurance coverage.",
      date: "March 5, 2024",
      author: "Dr. Sarah Johnson",
      category: "First Visit",
      image: "/placeholder-dtfo3.png"
    },
    {
      title: "Affordable Prenatal Care Options in Phoenix",
      excerpt: "Discover various resources and programs available for expectant mothers seeking affordable prenatal care in the Phoenix area.",
      date: "February 28, 2024",
      author: "Community Health Team",
      category: "Resources",
      image: "/placeholder-vqwcl.png"
    },
    {
      title: "Understanding Your Ultrasound Results",
      excerpt: "A patient-friendly guide to understanding what your ultrasound images mean and what information they provide about your pregnancy.",
      date: "February 20, 2024",
      author: "Dr. Sarah Johnson",
      category: "Education",
      image: "/placeholder-kmrj5.png"
    },
    {
      title: "Nutrition During Pregnancy on a Budget",
      excerpt: "Practical tips for maintaining a healthy diet during pregnancy when money is tight, including budget-friendly meal ideas.",
      date: "February 15, 2024",
      author: "Lisa Chen, Nutritionist",
      category: "Nutrition",
      image: "/budget-pregnancy-foods.png"
    }
  ]

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen pt-20 relative z-10">
        {/* Blog Header */}
        <div className="relative py-12 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Health & Wellness{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Expert advice, helpful resources, and supportive guidance for your pregnancy journey
              </p>
              <div className="flex justify-center mt-6">
                <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-12 relative">
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl hover:shadow-pink-500/15 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-pink-300 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-lg">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3 relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <p className="text-gray-600 group-hover:text-gray-700 mb-4 line-clamp-3 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <ChatWidget />
    </>
  )
}
