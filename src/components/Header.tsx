import Logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
const Header = () => {
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
    <header className="flex justify-between items-center py-6">
      <img src={Logo} className="h-5" alt="rise vest logo" />
      <button>
        <img src={hamburger} alt="hamburger menu" className="md:hidden" />
      </button>
      <nav className="hidden md:flex md:gap-5 lg:gap-8 xl:gap-10 ">
        {navLinks.map(({ label, path }) => (
          <a key={label} href={path} className="text-teal text-lg nav-link">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
