import Image from "next/image";

const categories = [
  { image: "/cat1.webp", alt: "Bags and Accessories", label: "BAGS AND ACCESSORIES" },
  { image: "/cat2.webp", alt: "Daily Life Products", label: "DAILY LIFE PRODUCTS" },
  { image: "/cat3.webp", alt: "Digital and Electronics", label: "DIGITAL AND ELECTRONICS" },
  { image: "/cat4.webp", alt: "Fashion Accessories", label: "FASHION ACCESSORIES" },
];

const TopCategories = () => {
  return (
    <>
      <section className="my-5 text-center">
        <h2 className="text-[30px] tracking-wide font-montserrat font-semibold text-[#333333] p-10 section-heading">
          TOP CATEGORIES
        </h2>
        <div className="flex justify-around flex-wrap px-8">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="w-full md:w-[48%] lg:w-[23%] text-white overflow-hidden"
            >
              <Image
                src={cat.image}
                alt={cat.alt}
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="p-2 font-semibold text-[14px] font-roboto bg-[#D8262F]">
                {cat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

export default TopCategories;
