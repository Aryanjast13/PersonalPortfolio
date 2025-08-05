import LocomotiveScroll from "locomotive-scroll";
import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Project from "./components/Project";

function App() {

	const locomotiveScroll = new LocomotiveScroll();
	

  const aboutRef = useRef(null);
	const contactRef = useRef(null);
  const projectsRef = useRef(null);
	
	const scrollToSection = (ref) => {
		ref.current.scrollIntoView({ behavior: "smooth" });
	}

	return (
    <>
      <Hero
        onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToProjects={() => scrollToSection(projectsRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
      />
      <About scrollRef={aboutRef} /> 
      <Project scrollRef={projectsRef} />
      <Contact scrollRef={contactRef} /> 
    </>
  );
}

export default App;
