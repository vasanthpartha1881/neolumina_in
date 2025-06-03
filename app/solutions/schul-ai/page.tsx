import Image from 'next/image';
import HeroBanner from "../../components/HeroBanner";

export default function SchulAI() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <a href="https://schul.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-95 transition-opacity duration-200">
        <HeroBanner className="bg-gradient-to-r from-[#7e2cfd] via-[#6555fb] to-[#26bdf2] text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Image src="/SCHUL_LOGO.svg" alt="Schul.ai Logo" width={48} height={48} className="h-12 w-auto" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                Schul.ai
              </h1>
              <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto">
                Revolutionizing Education Through AI-Powered Educator Support
              </p>
            </div>
          </div>
        </HeroBanner>
      </a>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Smarter Support for Modern Educators</h2>
              <a href="https://beta.schul.ai/register" target="_blank" rel="noopener noreferrer" className="block hover:opacity-95 transition-opacity duration-200">
                <div className="bg-[#7e2cfd]/50 p-6 rounded-lg border border-[#7e2cfd]/30 mb-8 text-center">
                  <div className="text-2xl font-semibold text-white hover:text-white/90 transition-colors duration-200 mb-2">
                    Don't just watch it happen, help shape it!
                  </div>
                  <div className="text-2xl font-semibold text-white hover:text-white/90 transition-colors duration-200">
                    Click here to join our beta!!
                  </div>
                </div>
              </a>
              <p className="text-lg text-gray-700 mb-6">
                Schul.ai is a purpose-built AI platform designed to strengthen how schools operate, support their educators, and evolve with their needs. Currently in beta testing, the platform reflects months of collaboration with real-world institutions, extensive research, and an uncompromising focus on practical value.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What we're building is grounded—not theoretical. Schul.ai helps educators manage, reflect, and grow with tools that are intelligent, context-aware, and aligned with how schools function today. From teacher enablement and administrative workflows to data-informed insights, the system is modular and built for scale.
              </p>
              <div className="bg-[#26bdf2]/50 p-6 rounded-lg border border-[#26bdf2]/30 mb-6">
                <p className="text-lg text-gray-700 italic">
                  We're deliberate about what we share publicly. Not because there's nothing to show—but because there's something worth protecting. Our approach is iterative, feedback-driven, and rooted in the lived experience of educators and school leaders.
                </p>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Schul.ai is not a concept—it's a working platform in active use by early adopters. What's visible today is just the foundation. New capabilities, including expanded learning tools, are already in development for future releases.
              </p>
              <div className="bg-[#6555fb]/50 p-6 rounded-lg border border-[#6555fb]/30 mb-6">
                <p className="text-lg text-gray-700">
                  If you represent a forward-thinking institution or simply care about meaningful change in education, we'd love to connect. Schul.ai is quietly redefining what educational support can look like—and we're just getting started.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 bg-[#26bdf2]/50 py-4 px-6 rounded-lg mb-6 text-center flex items-center justify-center">
                <Image 
                  src="/key_features.png" 
                  alt="Key Features Icon" 
                  width={24} 
                  height={24} 
                  className="mr-2"
                />
                Key Features
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">✅</span> Educator-Centric Tools
                  </h4>
                  <p className="text-gray-700">
                    Schul.ai provides lesson support that recommends materials based on curriculum input. Teachers can log reflections, track progress, and receive automated suggestions. A self-evaluation dashboard aligns with teaching frameworks to help monitor development over time.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">⚙️</span> No Additional Operational Load
                  </h4>
                  <p className="text-gray-700">
                    The platform is designed to work alongside existing systems without adding new workflows for administrators. It reduces manual follow-ups, surfaces insights automatically, and simplifies coordination without increasing tool sprawl or complexity.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">📊</span> Data-Driven School Insights
                  </h4>
                  <p className="text-gray-700">
                    The platform offers analytics for school operations, covering teaching activity, engagement, and development metrics. Role-based access gives different users relevant data views.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">🛠️</span> Built for Scale and Flexibility
                  </h4>
                  <p className="text-gray-700">
                    Schul.ai runs on cloud infrastructure and supports modular deployment. It integrates with LMS, SIS, and productivity tools through APIs. AI agents handle feedback, task tracking, and scheduling, with components designed for extension and customization.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">🚀</span> Beta Program Highlights
                  </h4>
                  <p className="text-gray-700">
                    The product is in beta with live school users. Testing is done in a sandboxed environment. Feedback from users is used to guide development. The beta supports structured onboarding and transition to full rollout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 