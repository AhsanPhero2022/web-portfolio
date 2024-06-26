import { Link as ScrollLink } from "react-scroll";
import resume from "../../assets/resume.pdf";
import { Link } from "react-router-dom";

const NavItems = ({ activeSection, setOpen }) => {
  return (
    <>
      <li>
        <ScrollLink
          className={`${activeSection === "home" ? "active" : "default"}`}
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
        >
          <span onClick={() => setOpen((open) => !open)}>Home</span>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          className={`${activeSection === "about" ? "active" : "default"}`}
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
        >
          <span onClick={() => setOpen((open) => !open)}>About</span>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          className={`${activeSection === "skills" ? "active" : "default"}`}
          to="skills"
          smooth={true}
          duration={500}
          offset={-80}
        >
          <span onClick={() => setOpen((open) => !open)}>Skills</span>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          className={`${activeSection === "projects" ? "active" : "default"}`}
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
        >
          <span onClick={() => setOpen((open) => !open)}>Projects</span>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          className={`${activeSection === "contact" ? "active" : "default"}`}
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
        >
          <span onClick={() => setOpen((open) => !open)}>Contact</span>
        </ScrollLink>
      </li>

      <li>
        <Link to="/dashboard" className=" text-white">
          Dashboard
        </Link>
      </li>
      <li>
        <a
          download
          href={resume}
          className="ml-0 mt-5 md:mt-0 md:ml-5 relative inline-flex items-center justify-center px-5 py-2 font-medium text-white bg-gray-800 rounded-lg group bg-gradient-to-br from-[#3669ac] to-[#35aac7]"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#3669ac] to-[#35aac7]"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#3669ac] to-[#35aac7]"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#3669ac] from-[#35aac7]"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Download Resume</span>
        </a>
      </li>
    </>
  );
};

export default NavItems;
