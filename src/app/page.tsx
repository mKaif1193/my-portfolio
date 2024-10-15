import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full space-y-10">
        <Hero />
        <Skills />
        <Education />
        {/* <Work /> */}
        {/* <Testimonials /> */}
        <Projects />
        {/* <Services /> */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
