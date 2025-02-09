import About from "./components/About";
import Experience from "./components/Experience";

import Hero from "./components/Hero";


export default function Home() {
  return (
    <div className="container mx-auto md:px-0 px-5">
      <Hero/>
      <About/>
      <Experience/>
    </div>
  );
}
