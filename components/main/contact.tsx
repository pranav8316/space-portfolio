import { ContactForm } from "@/components/sub/contact-form";
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-16 px-4 relative"
    >
      {/* Background decorative elements */}
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute right-0 top-3/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
      
      {/* Section Title */}
      <div className="text-center mb-12 z-10 relative">
        <h1 className="text-[32px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4">
          Contact Me
        </h1>
        <p className="text-gray-300 text-base max-w-xl mx-auto">
          Have a question or want to work together? I&apos;d love to hear from you. 
          Send me a message and I&apos;ll respond as soon as possible.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-6xl mx-auto z-10 relative pl-5 pr-9 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Left Side - Contact Form */}
          <div className="w-full">
            <div className="bg-gradient-to-br from-[#0C0C0C] to-[#1A1A1A] border border-[#2A0E61] rounded-xl p-5 backdrop-blur-sm h-full">
              <ContactForm />
            </div>
          </div>

          {/* Right Side - Action Cards */}
          <div className="w-full pt-5">
            <div className="grid grid-cols-2 gap-7 h-full ">
              
              {/* Card 1: Schedule a Call */}
              <div className="bg-gradient-to-br from-[#0C0C0C] to-[#1A1A1A] border border-[#2A0E61] rounded-xl p-4 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between min-h-[160px]">
                <a 
                  href="https://calendly.com/pranavguptaa11" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full flex flex-col justify-between"
                >
                  {/* Calendar Icon */}
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:bg-purple-500/20 transition-colors">
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path 
                        d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" 
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-base font-bold text-white mb-1">
                      Schedule a Call
                    </h3>
                    
                    <p className="text-gray-400 text-xs mb-2">
                      Book a 30-minute virtual coffee chat
                    </p>
                    
                    <span className="text-white font-semibold text-xs">Calendly</span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="flex justify-center mt-2">
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white group-hover:translate-x-1 transition-transform"
                    >
                      <path 
                        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" 
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Card 2: Download Resume */}
              <div className="bg-gradient-to-br from-[#0C0C0C] to-[#1A1A1A] border border-[#2A0E61] rounded-xl p-4 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between min-h-[160px]">
                <a 
                  href="/Pranav_Gupta_Resume.pdf" 
                  download
                  className="block h-full flex flex-col justify-between"
                >
                  {/* Download Icon */}
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:bg-purple-500/20 transition-colors">
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path 
                        d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" 
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-base font-bold text-white mb-1">
                      Download Resume
                    </h3>
                    
                    <p className="text-gray-400 text-xs mb-2">
                      Get my full CV/resume to learn more
                    </p>
                    
                    <span className="text-white font-semibold text-xs">PDF Format</span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="flex justify-center mt-2">
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white group-hover:translate-x-1 transition-transform"
                    >
                      <path 
                        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" 
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Card 3: Find Me Online */}
              <div className="bg-gradient-to-br from-[#0C0C0C] to-[#1A1A1A] border border-[#2A0E61] rounded-xl p-4 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group h-full flex flex-col justify-between min-h-[160px]">
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center mt-3">
                    <h3 className="text-base font-bold text-white mb-7">
                      Find me online
                    </h3>
                    
                    {/* Social Icons */}
                    <div className="flex justify-center gap-2 mb-3">
                      <a 
                        href="https://github.com/pranav8316" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                      >
                        <RxGithubLogo className="text-white text-sm" />
                      </a>
                      <a 
                        href="https://twitter.com/pranav_g8316" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                      >
                        <RxTwitterLogo className="text-white text-sm" />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/pranav8316/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                      >
                        <RxLinkedinLogo className="text-white text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Email Me */}
              <div className="bg-gradient-to-br from-[#0C0C0C] to-[#1A1A1A] border border-[#2A0E61] rounded-xl p-4 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between min-h-[160px]">
                <a 
                  href="mailto:pranavguptaa11@gmail.com"
                  className="block h-full flex flex-col justify-between"
                >
                  {/* Email Icon */}
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:bg-purple-500/20 transition-colors">
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path 
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" 
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-base font-bold text-white mb-1">
                      Email Me
                    </h3>
                    
                    <p className="text-gray-400 text-xs mb-2">
                      Get in touch directly via email
                    </p>
                    
                    <span className="text-white font-semibold text-[10px]">pranavguptaa11@gmail.com</span>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Additional Contact Info */}
      <div className="mt-8 text-center z-10 relative">
        <p className="text-gray-400 text-xs">
          You can also reach me directly at{" "}
          <a 
            href="mailto:pranavguptaa11@gmail.com" 
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            8726310043
          </a>
        </p>
      </div>
    </section>
  );
};
