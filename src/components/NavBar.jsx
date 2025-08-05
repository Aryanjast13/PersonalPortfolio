
const NavBar = ({ scrollToAbout, scrollToProjects, scrollToContact }) => {
  return (
    <div className="w-full px-12 py-4">
      <div className="flex gap-10 ">
        <div className="flex w-[45%] justify-between py-2 px-4">
          <div className="flex flex-col">
            <span>Based</span>
            <span>Haryana, India</span>
          </div>
          <div className="flex flex-col mr-20">
            <span>Say Hello</span>
            <span>aryanjastaj05@gmail.com</span>
          </div>
        </div>

        <div className="w-[55%] px-32">
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
