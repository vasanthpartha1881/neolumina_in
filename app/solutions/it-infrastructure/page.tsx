export default function ITInfrastructure() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#7e2cfd] via-[#6555fb] to-[#26bdf2] text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              IT Services
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive IT infrastructure solutions for modern businesses
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Enterprise-Grade Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our IT Infrastructure Services provide comprehensive solutions for modern businesses. 
                From cloud migration to network security, we ensure your technology foundation is robust, 
                secure, and ready for future growth.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#7e2cfd] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Cloud infrastructure management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#7e2cfd] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Advanced security solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#7e2cfd] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Data management and backup</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Cloud Solutions</h4>
                  <p className="text-gray-700">Comprehensive cloud infrastructure and migration services</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Network Security</h4>
                  <p className="text-gray-700">Advanced security protocols and threat protection</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Management</h4>
                  <p className="text-gray-700">Secure and efficient data storage and backup solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 