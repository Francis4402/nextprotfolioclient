import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Works from "./components/Works";


export default function Home() {
  return (
    <div className="container mx-auto md:px-0 px-5">
      <Hero/>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Contact/>
    </div>
  );
}
