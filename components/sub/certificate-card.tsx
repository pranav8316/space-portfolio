import Image from "next/image";
import Link from "next/link";

type CertificateCardProps = {
  name: string;
  provider: string;
  year: string;
  logo: string;
//   link: string;
};

export const CertificateCard = ({
  name,
  provider,
  year,
  logo,
//   link,
}: CertificateCardProps) => {
  return (
    // <Link
    //   href={link}
    //   target="_blank"
    //   rel="noreferrer noopener"
    //   className="group block"
    // >
      <div className="relative p-6 bg-gradient-to-br from-[#0C0C0C] to-[#1A1A1A] border border-[#2A0E61] rounded-xl hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="relative z-11 flex flex-col items-center text-center space-y-4">
          {/* Logo */}
          <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20">
            <Image
              src={logo}
              alt={provider}
              width={40}
              height={40}
              className="w-full h-full object-contain filter brightness-110"
            />
          </div>
          
          {/* Certificate Name */}
          <h3 className="text-white font-semibold text-sm leading-tight text-center min-h-[2.5rem] overflow-hidden">
            {name}
          </h3>
          
          {/* Provider */}
          <p className="text-gray-400 text-xs font-medium">
            {provider}
          </p>
          
          {/* Year */}
          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full">
            <span className="text-purple-300 text-xs font-semibold">
              {year}
            </span>
          </div>
        </div>
        
        {/* Hover effect indicator */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    // </Link>
  );
};
