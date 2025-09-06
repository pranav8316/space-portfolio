import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 px-4 relative"
    >
      {/* Background decorative elements */}
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute right-0 top-3/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
      
      {/* Section Title */}
      <div className="text-center mb-6 z-10 relative">
        <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-0">
          About Me
        </h1>
      </div>

      {/* About Content */}
      <div className="w-full max-w-6xl mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Photo Circle */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Gradient border */}
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1">
                <div className="w-full h-full rounded-full bg-[#0C0C0C] p-4">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-700">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Pranav Gupta"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-purple-500/20 animate-pulse"></div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="border border-[#2A0E61]/30 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Hello! I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Pranav Gupta
                </span>
              </h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  A passionate Full Stack Software Engineer with a strong foundation in 
                  modern web technologies. I specialize in building scalable web applications 
                  using React, Next.js, Node.js, and various databases.
                </p>
                
                <p>
                  My journey in technology started with a curiosity for problem-solving, 
                  which led me to pursue computer science and develop expertise in both 
                  frontend and backend development. I enjoy creating user-friendly interfaces 
                  and robust server-side architectures.
                </p>
                
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community. I believe in continuous learning and staying 
                  updated with the latest industry trends.
                </p>
              </div>

              {/* Key Skills/Interests */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">What I Love:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Problem Solving', 'Web Development', 'Open Source', 'AI/ML', 'Cloud Computing'].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
