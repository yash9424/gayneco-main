'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, User } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to WIC Benefits for Pregnant Women",
    description: "Everything you need to know about applying for WIC benefits during pregnancy, including eligibility requirements and application process.",
    image: "/image 2.webp",
    author: "WIC Support Team",
    date: "December 15, 2024",
    content: "WIC provides essential nutrition support for pregnant women, including healthy foods, nutrition education, and breastfeeding support. Learn how to apply and what benefits you can receive."
  },
  {
    id: 2,
    title: "Healthy Eating During Pregnancy: WIC Approved Foods",
    description: "Discover the nutritious foods covered by WIC benefits and how they support your baby's development during pregnancy.",
    image: "/image 3.jpg",
    author: "Nutrition Specialist",
    date: "December 12, 2024",
    content: "WIC covers essential foods like milk, eggs, whole grains, fruits, and vegetables. These nutrient-rich foods provide the vitamins and minerals you and your baby need for healthy development."
  },
  {
    id: 3,
    title: "Breastfeeding Support and Resources Through WIC",
    description: "Learn about the comprehensive breastfeeding support services available through WIC, including counseling and breast pump access.",
    image: "/image 4.jpeg",
    author: "Lactation Consultant",
    date: "December 10, 2024",
    content: "WIC provides breastfeeding education, peer counseling, and breast pump loans to help you succeed in your breastfeeding journey. Get the support you need from trained professionals."
  },
  {
    id: 4,
    title: "Required Documents for WIC Application",
    description: "A comprehensive checklist of documents you'll need to bring when applying for WIC benefits in Arizona.",
    image: "/IMAGE 5.jpg",
    author: "WIC Administrator",
    date: "December 8, 2024",
    content: "Prepare for your WIC appointment by gathering identity verification, proof of residency, and income documentation. We'll help you understand what's required and find alternatives if needed."
  },
  {
    id: 5,
    title: "Walk-in Services: No Appointment Needed",
    description: "Learn about our convenient walk-in services and the best times to visit our WIC office for faster service.",
    image: "/IMAGE 6.jpg",
    author: "Office Manager",
    date: "December 5, 2024",
    content: "We welcome walk-ins during business hours! Discover the best times to visit, what to expect during your visit, and how our staff can help you through the application process."
  },
  {
    id: 6,
    title: "Nutrition Education and Health Screenings",
    description: "Understand the valuable nutrition education and health screening services included with your WIC benefits.",
    image: "/images.jpeg",
    author: "Health Educator",
    date: "December 3, 2024",
    content: "WIC provides personalized nutrition counseling, health screenings, and referrals to other health services. Learn how these services support your overall health and wellness during pregnancy."
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button 
                  variant="outline" 
                  className="bg-white/80 hover:bg-white border-pink-200 hover:border-pink-300 text-gray-700 rounded-full px-6"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </motion.div>
            </Link>
          </motion.div>
          
          {/* Page Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              WIC Support Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted resource for WIC information, pregnancy support, and nutrition guidance
            </p>
          </motion.div>
          
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2 leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                      {post.content}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full transition-all duration-300"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Need WIC Support?</h2>
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
              Our caring team is here to help you navigate the WIC application process and get the nutrition support you deserve. Walk-ins welcome!
            </p>
            <Link href="/">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
                >
                  Visit Our Office Today
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
