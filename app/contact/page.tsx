'use client';

import Image from 'next/image'; // Import Next Image

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section START */}
      <section className="relative bg-gradient-to-r from-[#7e2cfd] via-[#6555fb] to-[#26bdf2] text-white py-12">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
              Get in touch with our team
            </p>
          </div>
        </div>
      </section>
      {/* Hero Section END */}

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image */}
          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/contact-us.jpg" 
              alt="Contact Us" 
              width={600} 
              height={700} 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column: Contact Information */}
          <div className="p-0 md:pt-0 space-y-10"> {/* Added space-y for spacing between items */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch Directly</h2>
            </div>

            {/* Email Section */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-teal-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Email Us</h3>
                <a href="mailto:info@neolumina.in" className="text-gray-600 text-base hover:text-[#7e2cfd] transition-colors">
                  info@neolumina.in
                </a>
                 <br />
                <a href="mailto:sales@neolumina.in" className="text-gray-600 text-base hover:text-[#7e2cfd] transition-colors">
                  hello@neolumina.in
                </a>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-teal-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5h-2.25m-3.75 0V5.625m3.75 0V5.625m0 0H9.75m4.5 0H9.75m4.5 0H9.75M10.5 19.875h3.75a.375.375 0 00.375-.375V18.375a.375.375 0 00-.375-.375h-3.75a.375.375 0 00-.375.375v1.125c0 .207.168.375.375.375z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Call Us</h3>
                <a href="tel:+917823920147" className="text-gray-600 text-base hover:text-[#7e2cfd] transition-colors">
                  +91 7823920147
                </a>
                {/* Add other phone numbers if needed */}
              </div>
            </div>

            {/* Address Section */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-teal-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Our Office</h3>
                <p className="text-gray-600 text-base">Neolumina Tech Solutions Pvt Ltd</p>
                <p className="text-gray-600 text-base">Chennai, Tamil Nadu, India</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Info Section - REMOVED */}
    </div>
  );
} 