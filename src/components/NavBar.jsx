import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
const NavBar = ({ scrollToAbout, scrollToProjects, scrollToContact }) => {


  useGSAP(() => {
    gsap.fromTo(".li",
      {
        yPercent: -180,
        opacity: 0,
        willChange: "transform,opacity"
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        delay:0.3,
        clearProps: "willChange"
      }
    );
  })
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full px-5 md:px-12 py-4">
      <div className="flex flex-col md:flex-row gap-10 ">
        <div className="flex w-full s md:w-[45%] justify-between py-2 md:px-4">
          <div className="flex flex-col">
            <span className="li">Based</span>
            <span className="li">Haryana, India</span>
          </div>
          <button className="md:hidden" onClick={()=> setShowMenu(!showMenu)} >
            {showMenu ? (
              <HiOutlineMenu className="w-8 h-9" />
            ) : (
              <MdClose className="w-8 h-9" />
            )}
          </button>
        </div>

        {/* <div className="w-full absolute inset-0 bg-red-400 h-52"></div> */}

        <div className="hidden md:block w-[55%] px-32">
          <ul className="flex ml-10 gap-10 justify-between h-full items-center">
            <li className="li opacity-0" onClick={scrollToAbout}>About</li>
            <li className="li opacity-0" onClick={scrollToProjects}>Project</li>
            <li className="li opacity-0">Resume</li>
            <li className="li opacity-0" onClick={scrollToContact}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;


  