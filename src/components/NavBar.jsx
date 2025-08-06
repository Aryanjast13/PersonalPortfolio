import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
const NavBar = ({ scrollToAbout, scrollToProjects, scrollToContact }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full px-5 md:px-12 py-4">
      <div className="flex flex-col md:flex-row gap-10 ">
        <div className="flex w-full s md:w-[45%] justify-between py-2 md:px-4">
          <div className="flex flex-col">
            <span>Based</span>
            <span>Haryana, India</span>
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
            <li onClick={scrollToAbout}>About</li>
            <li onClick={scrollToProjects}>Project</li>
            <li>Resume</li>
            <li onClick={scrollToContact}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;


  