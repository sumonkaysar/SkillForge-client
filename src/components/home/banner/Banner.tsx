import { Button } from "@/components/ui/button";
import Link from "next/link";
import BannerAnimation from "./BannerAnimation";
import BannerTypewriter from "./BannerTypewriter";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#0e0b24] via-[#201d46] to-[#24243e] w-full"
    >
      <div className="container max-w-7xl min-h-[calc(100vh_-_68px)] mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-0 px-14">
        <div className="text-center lg:text-left max-w-xl xl:max-w-2xl">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Sumon Kaysar
            </span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-4">
            <BannerTypewriter />
          </h3>
          <p className="text-gray-400 mb-8">
            I build modern, scalable, and beautiful web apps with the latest
            technologies.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start mb-10 md:mb-0">
            <a
              href="https://github.com/sumonkaysar/obeo-interview"
              target="_blank"
            >
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
                My Resume
              </Button>
            </a>
            <Link href="#projects">
              <Button
                variant="outline"
                className="border text-blue-400 backdrop-blur-lg bg-white/10 hover:bg-blue-400 hover:text-white transition-all"
              >
                View Projects
              </Button>
            </Link>
          </div>
        </div>
        <BannerAnimation />
      </div>
    </section>
  );
};

export default Banner;
