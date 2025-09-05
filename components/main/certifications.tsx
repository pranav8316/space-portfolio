import { CertificateCard } from "@/components/sub/certificate-card";
import { CERTIFICATIONS } from "@/constants";

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center py-20 px-4"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4">
          Certifications
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Professional certifications and achievements that showcase my commitment to continuous learning and expertise in various technologies.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.name}
              className="flex justify-center"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CertificateCard
                name={cert.name}
                provider={cert.provider}
                year={cert.year}
                logo={cert.logo}
                // link={cert.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute right-0 top-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
    </section>
  );
};
