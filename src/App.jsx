import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Project from "./components/Project";



function App() {

	const locomotiveScroll = new LocomotiveScroll();

  const cursorRef = useRef(null)
  const containerRef = useRef(null);
  const aboutRef = useRef(null);
	const contactRef = useRef(null);
  const projectsRef = useRef(null);
	
	const scrollToSection = (ref) => {
		ref.current.scrollIntoView({ behavior: "smooth" });
  }

  


  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const container = containerRef.current;
    if (!container) return;

    // create tweened setters once
    const setX = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "back.out" });
    const setY = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "back.out" });
   
       const onMove = (e) => {
         setX(e.clientX);
         setY(e.clientY);
       };
   
    container.addEventListener("mousemove", onMove);

 

    return () => container.removeEventListener("mousemove", onMove);
  },[])

  


	return (
    <>
      <div ref={containerRef} >
        <div ref={cursorRef}  className="cursor pointer-events-none fixed w-10 h-10 bg-black/80 z-50 rounded-full"></div>
        <Hero
          onScrollToAbout={() => scrollToSection(aboutRef)}
          onScrollToProjects={() => scrollToSection(projectsRef)}
          onScrollToContact={() => scrollToSection(contactRef)}
        />
        <About scrollRef={aboutRef} />
        <Project scrollRef={projectsRef} />
        <Contact scrollRef={contactRef} />
      </div>
    </>
  );
}



export default App;
