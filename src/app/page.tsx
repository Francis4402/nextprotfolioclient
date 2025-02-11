import { getServerSession } from "next-auth";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Works from "./components/Works";
import { authOptions } from "./utls/authOptions";


export default async function Home() {

  const session = await getServerSession(authOptions);

  return (
    <div className="bg-black/95 text-white">
      <Navbar session={session} />
      <div className="container mx-auto md:px-0 px-5">
        <Hero/>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}
