import { MapPin, Phone, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-white py-8 border-t border-[#26619C]/30" style={{ backgroundColor: '#26619C' }}>
      <div className="container mx-auto px-4 lg:mx-12 xl:mx-16">
        {/* Single Row Layout */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Address */}
          <div className="flex items-center gap-3 mt-4">
            <MapPin className="w-5 h-5 text-blue-200 flex-shrink-0" />
            <div>
              <div className="font-semibold text-white">Teen Pregnancy Support</div>
              <div className="text-sm text-blue-100">4700 North 51st Avenue</div>
              <div className="text-sm text-blue-100">Phoenix, Arizona 85031</div>
              <a 
                href="https://maps.google.com/?q=4700+North+51st+Avenue+Phoenix+Arizona+85031" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-blue-200 hover:text-white transition-colors flex items-center gap-1 mt-1"
              >
                View on Google Maps
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          
          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-200 flex-shrink-0" />
            <div>
              <div className="text-xl font-bold text-white">623-846-7597</div>
              <div className="text-sm text-blue-100">Mon-Fri, 8am-5pm</div>
            </div>
          </div>

          {/* Small Map */}
          <div className="w-full h-24 rounded-lg overflow-hidden shadow-lg border border-blue-300/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.2!2d-112.2167!3d33.5156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6d5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sMaryvale%20Parkway%20Medical%20Center%2C%20Phoenix%2C%20AZ%2085031!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg filter brightness-75"
            />
          </div>
        </div>
        
        {/* Copyright - Very Small */}
        <div className="border-t border-blue-300/30 mt-6 pt-4 text-center">
          <p className="text-blue-200 text-xs">
            © {new Date().getFullYear()} Teen Pregnancy Support Arizona. Confidential care for all.
          </p>
        </div>
      </div>
    </footer>
  )
}
