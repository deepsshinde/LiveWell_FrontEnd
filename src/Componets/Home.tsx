import React from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import Footer from "./Footer";
import Main from "./Main";
function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Main />
      <Footer />
    </>
  );
}
export default Home;
