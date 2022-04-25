import AboutBanner from "../components/AboutBanner/AboutBanner";
import AboutWelcom from "../components/AboutWelcom/AboutWelcom";
import AboutStaff from "../components/AboutStaff/AboutStaff";
import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutBanner />
      <AboutWelcom />
      <AboutStaff />
    </div>
  );
}

export default About;
