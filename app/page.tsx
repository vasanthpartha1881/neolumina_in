import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#7e2cfd] via-[#6555fb] to-[#26bdf2] text-white py-12 md:py-20">
        <div className="absolute inset-0 bg-[url('/neolumina_in/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Neolumina Tech Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Illuminating the future through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto text-center">
            We are a team of passionate technologists dedicated to transforming businesses through innovative solutions. Our expertise spans across artificial intelligence, cloud computing, and digital transformation, helping organizations navigate the complex landscape of modern technology.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <a href="/solutions/schul-ai" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7e2cfd] to-[#26bdf2] flex items-center justify-center mr-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold text-[#7e2cfd]">Schul.ai</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Learning</h3>
              <p className="text-gray-700">
                Revolutionizing education through personalized AI-driven learning experiences.
              </p>
            </a>

            {/* Feature 2 */}
            <a href="/solutions/acme-platform" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#596cf9] to-[#448bf7] flex items-center justify-center mr-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold text-[#7e2cfd]">ACME</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manufacturing Platform</h3>
              <p className="text-gray-700">
                Streamlining manufacturing processes with our comprehensive digital platform and automation solutions.
              </p>
            </a>

            {/* Feature 3 */}
            <a href="/solutions/it-infrastructure" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#6555fb] to-[#5176f8] flex items-center justify-center mr-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold text-[#7e2cfd]">IT Services</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Infrastructure Solutions</h3>
              <p className="text-gray-700">
                Building robust and scalable IT infrastructure solutions to support your business growth.
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
