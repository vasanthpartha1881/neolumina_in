export default function About() {
  const founders = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Former AI researcher at MIT with 15+ years of experience in machine learning and business transformation. Led multiple successful tech startups before founding Neolumina.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Cloud architecture expert with a background in distributed systems. Previously led engineering teams at major tech companies, specializing in scalable infrastructure solutions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Priya Patel",
      role: "Chief Innovation Officer",
      bio: "PhD in Computer Science with expertise in quantum computing and AI. Published author and speaker on emerging technologies and their business applications.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      name: "James Wilson",
      role: "Chief Operations Officer",
      bio: "Operations specialist with 20+ years of experience in tech industry logistics and process optimization. Expert in implementing efficient business systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Marcus Johnson",
      role: "Chief Research Officer",
      bio: "Leading researcher in artificial intelligence and machine learning. Holds multiple patents in AI applications and has published numerous papers in top-tier journals.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Lisa Zhang",
      role: "Chief Strategy Officer",
      bio: "Strategic planning expert with a background in both technology and business consulting. Specializes in digital transformation and market strategy.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#7e2cfd] via-[#6555fb] to-[#26bdf2] text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
              Meet the visionaries behind Neolumina Tech Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-64 object-cover"
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
              At Neolumina Tech Solutions, we're committed to pushing the boundaries of what's possible in technology. 
              Our diverse team of experts brings together decades of experience in AI, cloud computing, and digital transformation 
              to create solutions that drive real business value. We believe in the power of innovation to transform industries 
              and improve lives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 