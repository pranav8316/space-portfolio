import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";

type ProjectCardProps = {
  src: string;
  title: string;
  link: string;
  github?: string;
  description?: string;
};

export const ProjectCard = ({
  src,
  title,
  link,
  github,
  description,
}: ProjectCardProps) => {
  return (
    <div className="w-full relative overflow-hidden rounded-lg shadow-lg hover:scale-[1.06] transition ring-blue-500 border border-[#2A0E61]">
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="block"
      >
        <div className="flex justify-center pt-4">
          <Image
            src={src}
            alt={title}
            width={800}
            height={450}
            className="w-[90%] h-52 object-cover rounded-lg object-left-top"
          />
        </div>
      </Link>

      <div className="relative p-4">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-white mb-10">{title}</h1>
        
        {/* Description */}
        {description && (
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>
        )}
        
        {/* GitHub Button */}
        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-3 py-2 bg-transparent border border-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-800 hover:border-purple-500 transition-all duration-300"
            title="View on GitHub"
          >
            <RxGithubLogo className="w-4 h-4" />
            Code
          </Link>
        )}
      </div>
    </div>
  );
};
