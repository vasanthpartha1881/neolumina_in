import Image from "next/image";
import HeroBanner from "./components/HeroBanner";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroBanner className="bg-gradient-to-r from-[#7e2cfd] via-[#6555fb] to-[#26bdf2] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Neolumina Tech Solutions
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
                Illuminating Tomorrow - Empowered by AI
              </p>
            </div>
          </div>
        </div>
      </HeroBanner>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-white bg-[#1f1a97]/75 inline-block px-6 py-3 rounded-lg mb-6">Where Ideas Take Shape; Light Finds Form</h2>
              <h3 className="text-xl font-semibold text-[#1f1a97] mb-6">Human-centered AI that turns intention into impact.</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto md:mx-0 text-center md:text-left mb-6">
                At Neolumina, we see technology not just as code and systems, but as light—cast forward to reveal new possibilities. We are seekers, builders, and thinkers, driven by a belief that synthetic intelligence, when designed with care, can elevate human potential. In a world racing toward automation, we pause to ask: What should we build? Who is it for? How does it serve?
              </p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
                Our expertise spans artificial intelligence, cloud architecture, and digital transformation—not as ends in themselves, but as instruments of meaningful change. We design with purpose, led not by hype but by human insight and technical depth. This is our craft: to bring clarity to complexity, and to use technology not to overshadow people—but to empower them.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/Home_Banner.png"
                alt="AI-powered solutions illustration"
                width={500}
                height={350}
                className="rounded-xl shadow-lg object-contain max-h-[350px] w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <a href="/solutions/schul-ai" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <Image src="/SCHUL_LOGO.svg" alt="Schul.ai Logo" width={48} height={48} className="h-12 w-auto mr-3" />
                  <span className="text-2xl font-bold text-[#7e2cfd]">Schul.ai</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Education Innovation</h3>
              <p className="text-gray-700">
                Transforming learning through AI-powered educational platforms and personalized learning experiences.
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
