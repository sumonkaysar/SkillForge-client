import About from "@/components/home/About";
import Banner from "@/components/home/banner/Banner";
import BlogSection from "@/components/home/BlogsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import Skills from "@/components/home/Skills";

const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <ProjectsSection />
      <BlogSection />
    </>
  );
};

export default HomePage;
