export default function ACMEPlatform() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#7e2cfd] via-[#6555fb] to-[#26bdf2] text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              ACME
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
              Streamlining Manufacturing with Intelligent Automation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h2>
              <p className="text-lg text-gray-700 mb-6">
                ACME revolutionizes manufacturing operations with its comprehensive suite of digital tools. 
                From process automation to quality control, our platform helps manufacturers achieve unprecedented efficiency and precision.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#7e2cfd] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">End-to-end process automation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#7e2cfd] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time production monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#7e2cfd] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Advanced quality control systems</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Process Optimization</h4>
                  <p className="text-gray-700">AI-powered analysis and optimization of manufacturing processes</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                  <p className="text-gray-700">Automated quality control and compliance monitoring</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Resource Management</h4>
                  <p className="text-gray-700">Efficient allocation and tracking of manufacturing resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 