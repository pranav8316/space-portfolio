import { ContactForm } from "@/components/sub/contact-form";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-4 relative"
    >
      {/* Background decorative elements */}
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute right-0 top-3/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
      
      {/* Section Title */}
      <div className="text-center mb-16 z-10 relative">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4">
          Contact Me
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Have a question or want to work together? I&apos;d love to hear from you. 
          Send me a message and I&apos;ll respond as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-2xl mx-auto z-10 relative">
        <div className="bg-gradient-to-br from-[#0C0C0C] to-[#1A1A1A] border border-[#2A0E61] rounded-2xl p-8 backdrop-blur-sm">
          <ContactForm />
        </div>
      </div>

      {/* Additional Contact Info */}
      <div className="mt-12 text-center z-10 relative">
        <p className="text-gray-400 text-sm">
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
