import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-20">
      <div className="text-center px-8">
        <div className="mb-6" data-aos="fade-down">
          <div className="relative inline-flex before:absolute before:inset-0">
            <Link
              href="https://www.google.com"
              className="px-3 py-1 text-sm font-medium inline-flex items-center 
              justify-center border rounded-full text-zinc300 hover:text-white transition 
              duration-15- ease-in-out w-full group border-slate-100/40"
              target="_blank"
            >
              <span className="relative inline-flex items-center">
                socials{" "}
                <span
                  className="tracking-normal text-primary-500 group-hover:translate-x-0.5 
                  transition-transform duration-150 ease-in-out ml-1"
                >
                  -&gt;
                </span>
              </span>
            </Link>
          </div>
        </div>
        <h1
          className="pd-4 font-extrabold tracking-tight text-transparent text-7xl
          lg:text-8xl bg-clip-text bg-gradient-to-r from-cyan-100 via-blue-700 to-cyan-100"
          data-aos="fade-down"
          // data-aos-delay="200"
        >
          Hi am babai
        </h1>
        <p
          className="mb-8 text-lg text-zinc-300/40 font-medium"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          I am a full-stack developer, I build web applications using React,
          Next.js, Node.js, and MongoDB.
        </p>
        <div className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:justify-center sm:flex-row sm:inline-flex">
          <Link
            href="#calendy"
            className="w-full items-center justify-center flex whitespace-nowrap transition 
            duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-900 bg-gradient-to-r 
            from-white/80 via-white to-white/80 hover:bg-white group"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Book a free call{" "}
            <ArrowRight
              className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 
              transition-transform duration-150 ease-in-out ml-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
