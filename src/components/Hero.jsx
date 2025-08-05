import HeroText from "./HeroText";
import NavBar from "./NavBar";

const Hero = ({ onScrollToAbout, onScrollToProjects, onScrollToContact }) => {
  return (
    <div className="hero  relative w-full h-screen border border-transparent">
  
      <NavBar
        scrollToAbout={onScrollToAbout}
        scrollToProjects={onScrollToProjects}
        scrollToContact={onScrollToContact}
      />
      <HeroText />
    </div>
  );
}

export default Hero;