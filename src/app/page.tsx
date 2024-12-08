// 

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero, { Blog, Hero1, Contact, Hero2, Hero3 } from "../components/Hero";
import Footer from "@/components/Footer";

// import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
