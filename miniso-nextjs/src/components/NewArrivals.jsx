import Image from "next/image";

const arrivals = [
  { image: "/arriv1.webp", alt: "Sushi Kitten Plush Toy", label: "SUSHI KITTEN PLUSH TOY" },
  { image: "/arriv2.webp", alt: "Sushi Kitten Plush Toy", label: "SUSHI KITTEN PLUSH TOY" },
  { image: "/arriv3.webp", alt: "Sushi Kitten Plush Toy", label: "SUSHI KITTEN PLUSH TOY" },
  { image: "/arriv4.webp", alt: "Sushi Kitten Plush Toy", label: "SUSHI KITTEN PLUSH TOY" },
];

const NewArrivals = () => {
  return (
    <>
      <section className="my-5 text-center">
        <h2 className="text-[30px] font-montserrat font-semibold text-[#333333] p-10 section-heading">
          NEW ARRIVALS
        </h2>
        <div className="flex justify-around flex-wrap px-8">
          {arrivals.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[48%] lg:w-[23%] bg-red-600 text-white overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="p-2 font-semibold text-[14px] font-roboto bg-[#D8262F]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

export default NewArrivals;
