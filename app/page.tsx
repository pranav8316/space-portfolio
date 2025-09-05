import { Certifications } from "@/components/main/certifications";
import { Contact } from "@/components/main/contact";
import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-15">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
