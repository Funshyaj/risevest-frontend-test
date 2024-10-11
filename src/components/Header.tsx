import Logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [sticky, setSticky] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setSticky(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      path: "",
      label: "Home",
    },
    {
      path: "",
      label: "Products",
    },
    {
      path: "",
      label: "Investments",
    },
    {
      path: "",
      label: "Blog",
    },
    {
      path: "",
      label: "About Us",
    },
    {
      path: "",
      label: "FAQs",
    },
  ];

  return (
    <header
      className={`w-full bg-white fixed z-[9999] left-0 right-0 bg-white flex justify-between items-center py-2 px-4 md:px-8 py-5 duration-300 ${
        sticky ? " top-0 " : "-top-28"
      }`}
    >
      <img src={Logo} className="h-5" alt="rise vest logo" />
      <button>
        <img src={hamburger} alt="hamburger menu" className="md:hidden" />
      </button>
      <nav className="hidden md:flex md:gap-8 xl:gap-10 ">
        {navLinks.map(({ label, path }) => (
          <a
            key={label}
            href={path}
            className="text-teal text-lg hover:font-medium duration-300"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
