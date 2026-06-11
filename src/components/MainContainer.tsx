import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStackNew from "./TechStackNew";
import CallToAction from "./CallToAction";
import setSplitText from "./utils/splitText";

const getViewportFlags = () => ({
  isDesktopView: window.innerWidth > 1024,
  isMobile: window.innerWidth <= 768,
});

const MainContainer = ({ children }: PropsWithChildren) => {
  const [{ isDesktopView, isMobile }, setViewport] = useState(getViewportFlags);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setViewport(getViewportFlags());
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      {!isMobile && <Cursor />}
      <Navbar />
      <SocialIcons />
      {isDesktopView && !isMobile && children}
      <Landing />
      <About />
      <WhatIDo />
      <Career />
      <Work />
      <TechStackNew />
      <CallToAction />
      <Contact />
    </div>
  );
};

export default MainContainer;
