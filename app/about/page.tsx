import Image from 'next/image';
import HeroBanner from "../components/HeroBanner";

export default function About() {
  const founders = [
    {
      name: "Vasanth Parthasarathy",
      role: "Founder & Chief Executive Officer",
      bio: "With over 20 years of experience in tech innovation, Vasanth leads Neolumina's vision and strategic direction.",
      image: "/vasanth.jpg"
    },
    {
      name: "Sudharshan Aravamudan",
      role: "Founder & Chief Business Officer",
      bio: "With his strategic financial planning, Sudarshan helps maintain our strong market position and growth.",
      image: "/sudarshan.jpg"
    },
    {
      name: "Ravishankar Jayaraman",
      role: "Founder & Chief Operations Officer",
      bio: "A pioneer in AI and machine learning, Ravi drives our technological advancement and innovation initiatives.",
      image: "/ravishankar.jpg"
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroBanner className="bg-gradient-to-r from-[#7e2cfd] via-[#6555fb] to-[#26bdf2] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
              AI-powered. Human-led.
              <br />
              Building intelligent, human-centered platforms for the real world.
            </p>
          </div>
        </div>
      </HeroBanner>

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Neolumina Tech Solutions (NTS) is a deep-tech startup founded by seasoned industry leaders, backed by hands-on leadership across technology strategy, operational scale-up, and product innovation. We specialize in building cloud-native platforms that amplify capabilities with AI, while preserving human oversight; ensuring synthetic intelligence serves humans, does not replace them. Our leadership has built and scaled products across diverse domains such as education, media, logistics, manufacturing, supply chain, insurance, State and Federal enterprise tech, and digital commerce with deep exposure to global markets and operational realities.
            </p>
            <p className="text-gray-700 mb-6">
              Our leadership has delivered scalable, high-impact solutions across education, media, logistics, manufacturing, supply chain, public-sector enterprise tech, and digital commerce—grounded in real-world execution and global market experience.
            </p>
            <p className="text-gray-700">
              At NTS, we create technology with purpose—enhancing human performance, maintaining control, and delivering measurable impact across the industries we serve. Whether empowering educators, optimizing supply chains, or enabling digital-first manufacturing, our platforms combine intelligent automation with human oversight to solve complex, real-world challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#7e2cfd] px-8 py-4 rounded-lg">
            <h2 className="text-3xl font-bold text-white">Meet Our Executive Leadership</h2>
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-64 bg-[#26bdf2]/20">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{founder.name}</h3>
                  <p className="text-[#7e2cfd] font-medium mb-4">{founder.role}</p>
                  <p className="text-gray-600">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 