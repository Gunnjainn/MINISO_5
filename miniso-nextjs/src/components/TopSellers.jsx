import Image from "next/image";

const gridSellers = [
  { image: "/seller2.webp", alt: "Eye Masks", label: "EYE MASKS" },
  { image: "/seller3.webp", alt: "Scented Candles", label: "SCENTED CANDLES" },
  { image: "/seller4.webp", alt: "Cosmetics", label: "COSMETICS" },
  { image: "/seller5.webp", alt: "Sippers", label: "SIPPERS" },
];

const TopSellers = () => {
  return (
    <>
      <section className="my-5 text-center">
        <h2 className="text-[30px] font-montserrat font-semibold text-[#333333] p-10 section-heading">
          TOP SELLERS
        </h2>
        <div className="flex flex-col md:flex-row gap-2 px-4 md:px-2 py-5">
          {/* Featured large product */}
          <div className="w-full md:w-[48%] h-full mx-0 md:mx-5 my-4 md:my-10 bg-red-600 text-white text-sm overflow-hidden">
            <Image
              src="/seller1.webp"
              alt="Makeup Brush"
              width={800}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="p-2 font-semibold text-[14px] font-roboto bg-[#D8262F]">
              3-IN-1 MAKEUP BRUSH
            </div>
          </div>

          {/* Grid of smaller products */}
          <div className="grid grid-cols-2 gap-2 flex-1 mx-0 md:mx-5 my-4 md:my-10">
            {gridSellers.map((item) => (
              <div key={item.label} className="bg-red-600 text-white overflow-hidden mr-0 md:mr-3">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="pt-3 font-semibold text-[14px] font-roboto bg-[#D8262F]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default TopSellers;
