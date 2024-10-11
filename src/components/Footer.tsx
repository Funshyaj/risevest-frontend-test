const Footer = () => {
  const siteMap = [
    { path: "", label: "About Us" },
    { path: "", label: "Careers" },
    { path: "", label: "FAQs" },
    { path: "", label: "Contact Info" },
    { path: "", label: "Press" },
    { path: "", label: "Rise Impact" },
  ];
  return (
    <footer className="mt-20 mb-10 pl-5 lg:px-16 flex flex-wrap gap-10 justify-between items-center">
      <div className="space-y-4 ">
        <h2>rise</h2>
        {siteMap.map(({ label, path }) => (
          <nav className="text-sm">
            <a key={label} className="" href={path}>
              {label}
            </a>
          </nav>
        ))}
      </div>
      <div className="space-y-4 min-w-28">
        <h4>Explore</h4>
        {siteMap.map(({ label, path }) => (
          <nav className="text-sm">
            <a key={label} className="" href={path}>
              {label}
            </a>
          </nav>
        ))}
      </div>
      <div className="space-y-4 min-w-28">
        <h4>Explore</h4>
        {siteMap.map(({ label, path }) => (
          <nav className="text-sm">
            <a key={label} className="" href={path}>
              {label}
            </a>
          </nav>
        ))}
      </div>
      <div className="space-y-4 min-w-28">
        <h4>Explore</h4>
        {siteMap.map(({ label, path }) => (
          <nav className="text-sm">
            <a key={label} className="" href={path}>
              {label}
            </a>
          </nav>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
