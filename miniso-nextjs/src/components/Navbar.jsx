import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#" },
  { label: "Our Blogs", href: "#" },
  { label: "Store Locator", href: "#" },
  { label: "About MINISO", href: "#" },
  { label: "Documents", href: "#" },
  { label: "Contact Us", href: "#" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 py-5">
      <div>
        <Image src="/logo.webp" alt="MINISO Logo" width={40} height={40} className="w-10 h-auto" />
      </div>
      <div className="pt-2">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-5 no-underline text-[#333333] font-roboto"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
