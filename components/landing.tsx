"use client";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Calendy from "../components/calendy";
import Channels from "../components/channels";
import EditVideo from "../components/edited-video";
import Footer from "../components/footer";
import Hero from "../components/hero";

export const Landing = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile", // phone
      duration: 800,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div>
      <div className="pt-32 pb-16 md:pt-52 mb:pd-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">
        <Hero />
        <EditVideo />
        <Channels />
        <Calendy />
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Landing;
