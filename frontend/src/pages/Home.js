import React, { useRef } from "react";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import BottomBlocRight from "../components/BottomBlocRight";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hobbies from "../components/Hobbies";
import Other from "../components/Other";
import Skill from "../components/Skill";
import WhoAmI from "../components/WhoAmI";

const Home = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef} className="body">
        <div data-scroll-section id="home">
          <Header />
          <main>
            <section className="left-bloc">
              <div className="bg-left-bloc">
                <Contact />
                <Education />
                <Experience />
                <Hobbies />
              </div>
            </section>
            <section className="right-bloc">
              <WhoAmI />
              <Skill />
              <Other />
              <BottomBlocRight />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;
