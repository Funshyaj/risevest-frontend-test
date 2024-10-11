import arrow from "../assets/up-right-arrow.svg";

const Footer = () => {
  const siteMap = [
    { path: "", label: "About Us" },
    { path: "", label: "Careers" },
    { path: "", label: "FAQs" },
    { path: "", label: "Contact Info" },
    { path: "", label: "Press" },
    { path: "", label: "Rise Impact" },
  ];

  const explore = [
    { path: "", label: "Investmet Club" },
    { path: "", label: "Blog" },
  ];
  const products = [
    { path: "", label: "Rise App" },
    { path: "", label: "Wallets" },
    { path: "", label: "Asset Classes" },
  ];
  const contact = [
    { path: "", label: "0818 714 7405" },
    { path: "", label: "hello@rise.capital" },
    { path: "", label: "Newsletter" },
    { path: "", label: "Instagram" },
    { path: "", label: "Twitter" },
  ];

  return (
    <footer className="mt-20 mb-10 pl-5 lg:px-16 flex flex-wrap gap-10 justify-between">
      <div className="space-y-6 ">
        <h2>rise</h2>
        {siteMap.map(({ label, path }) => (
          <nav className="text-sm">
            <a key={label} className="" href={path}>
              {label}
            </a>
          </nav>
        ))}
      </div>

      <div className="space-y-6 min-w-24">
        <h4>Explore</h4>
        <ul className="text-sm space-y-6">
          {explore.map(({ label, path }) => (
            <li className="flex gap-2 items-center">
              <a key={label} className="" href={path}>
                {label}
              </a>
              <img src={arrow} alt="" />
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6 min-w-24">
        <h4>Products</h4>
        <ul className="text-sm space-y-6">
          {products.map(({ label, path }) => (
            <li className="flex gap-2 item-center">
              <a key={label} className="" href={path}>
                {label}
              </a>
              <img src={arrow} alt="" />
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6 min-w-24">
        <h4>Contact Us</h4>
        <ul className="text-sm space-y-6">
          {contact.map(({ label, path }) => (
            <li className="flex gap-2 items-center">
              <a key={label} className="" href={path}>
                {label}
              </a>
              <img src={arrow} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
