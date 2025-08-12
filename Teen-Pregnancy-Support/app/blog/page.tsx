import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, User, Heart, Shield, Users, BookOpen, Phone, MapPin } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "Understanding Younger Patients Rights",
    excerpt: "Learn about legal rights, privacy protections, and confidential resources available for younger patients in Arizona healthcare system.",
    image: "/IMAGE 1.jpeg",
    date: "March 15, 2024",
    author: "Dr. Sarah Johnson",
    category: "Patient Rights",
    gradient: "from-sky-500 to-blue-500",
    icon: Shield
  },
  {
    id: 2,
    title: "How Parents Can Support Younger Patients",
    excerpt: "A comprehensive guide for parents on how to offer compassionate, non-judgmental support for younger patients during medical challenges.",
    image: "/IMAGE2.png",
    date: "March 12, 2024",
    author: "Maria Rodriguez",
    category: "Parent Support",
    gradient: "from-emerald-500 to-teal-500",
    icon: Heart
  },
  {
    id: 3,
    title: "School Resources for Younger Patients",
    excerpt: "How educational institutions can create supportive environments and provide resources for younger patients and their families.",
    image: "/IMAGE 3.png",
    date: "March 10, 2024",
    author: "Jennifer Lee",
    category: "School Support",
    gradient: "from-green-500 to-emerald-500",
    icon: BookOpen
  },
  {
    id: 4,
    title: "Healthcare Services for Younger Patients",
    excerpt: "A comprehensive guide to specialized healthcare resources, clinics, and support services designed for younger patients in Arizona.",
    image: "/IMAGE 4.jpg",
    date: "March 8, 2024",
    author: "Dr. Michael Chen",
    category: "Healthcare",
    gradient: "from-orange-500 to-amber-500",
    icon: MapPin
  },
  {
    id: 5,
    title: "Mental Health Support for Younger Patients",
    excerpt: "Understanding the emotional challenges younger patients face and finding professional counseling resources tailored for their needs.",
    image: "/IMAGE 5.jpg",
    date: "March 5, 2024",
    author: "Lisa Thompson",
    category: "Mental Health",
    gradient: "from-cyan-500 to-blue-500",
    icon: Users
  },
  {
    id: 6,
    title: "Confidential Support for Younger Patients",
    excerpt: "24/7 support services, crisis hotlines, and confidential counseling options specifically available for younger patients and families.",
    image: "/IMAGE 6.jpg",
    date: "March 3, 2024",
    author: "Amanda Davis",
    category: "Crisis Support",
    gradient: "from-yellow-500 to-orange-500",
    icon: Phone
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Simple Header */}
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-neutral-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 mb-8 group glass-effect px-4 py-2 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-blue-900 dark:text-blue-200 drop-shadow-sm">
                Resources & Support
              </span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-gray-300 max-w-2xl mx-auto">
              Expert guides and resources for younger patients, schools, and parents
            </p>
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => {
            const Icon = post.icon
            return (
              <article 
                key={post.id}
                className="group backdrop-blur-sm rounded-3xl overflow-hidden shadow-elegant hover:shadow-modern transition-all duration-500 border border-card hover:border-neutral-200 dark:hover:border-gray-700 hover:-translate-y-2 bg-gradient-to-br from-blue-50/80 via-sky-50/60 to-cyan-50/80 dark:from-gray-800/50 dark:via-gray-700/40 dark:to-gray-800/50"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 dark:brightness-75"
                  />
                  <div className={`absolute top-4 left-4 w-10 h-10 bg-gradient-to-r ${post.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black-200/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-neutral-700 dark:text-white border border-white/20 dark:border-white/20">
                    {post.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 relative">
                  <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-gray-300 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-normal text-card dark:text-gray-300 mb-3 group-hover:text-[#1560BD] dark:group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-[#1560BD] dark:group-hover:text-gray-400 transition-colors duration-300 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
