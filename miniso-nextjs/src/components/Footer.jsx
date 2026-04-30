import Image from "next/image";

const productLinks = [
  "Bags And Accessories",
  "Daily Life Products",
  "December Offers",
  "Digital And Electronics",
  "Fashion Accessories",
  "Health And Beauty",
  "Household Items",
  "Toy Series",
];

const quickLinks = ["Home", "Career", "Our Blogs", "Store Locator", "Contact Us"];

const aboutLinks = ["About Us", "E-Waste Management", "Exchange Policy", "Privacy Policy", "Sitemap"];

const socialIcons = [
  { src: "/fb.webp", alt: "facebook icon" },
  { src: "/twitter.webp", alt: "twitter icon" },
  { src: "/insta.webp", alt: "instagram icon" },
  { src: "/yt.webp", alt: "youtube icon" },
];

const Footer = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-6 md:gap-4 p-6 md:p-10 bg-[#F9F9F9]">
        {/* Logo & Social */}
        <div className="w-full md:w-[45%] lg:w-1/5 text-center md:text-left">
          <Image src="/logo.webp" alt="Miniso Logo" width={56} height={56} className="w-14 h-auto mx-auto md:mx-0" />
          <div className="mt-4 flex gap-1 justify-center md:justify-start">
            {socialIcons.map((icon) => (
              <Image key={icon.alt} src={icon.src} alt={icon.alt} width={36} height={36} className="w-9 h-auto" />
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="w-full md:w-[45%] lg:w-1/5">
          <h3 className="text-[20px] text-[#333333] mb-4 font-['Montserrat']">MINISO Products</h3>
          {productLinks.map((link) => (
            <p key={link}>
              <a href="#" className="text-black no-underline text-[14px] font-roboto text-gray-500">
                {link}
              </a>
            </p>
          ))}
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-[45%] lg:w-1/5">
          <h3 className="text-[20px] text-[#333333] mb-4 font-['Montserrat']">Quick Links</h3>
          {quickLinks.map((link) => (
            <p key={link}>
              <a href="#" className="text-black no-underline text-[14px] font-roboto text-gray-500">
                {link}
              </a>
            </p>
          ))}
        </div>

        {/* About */}
        <div className="w-full md:w-[45%] lg:w-1/5">
          <h3 className="text-[20px]text-[#333333] mb-4 font-['Montserrat']">About MINISO</h3>
          {aboutLinks.map((link) => (
            <p key={link}>
              <a href="#" className="text-black no-underline text-[14px] font-roboto text-gray-500">
                {link}
              </a>
            </p>
          ))}
        </div>
      </div>
      <p className="text-center text-[14px] font-roboto text-gray-500 my-5">
        © 2018 Miniso India, All Rights Reserved | Designed By Delta Web Services
      </p>
    </section>
  );
};

export default Footer;
