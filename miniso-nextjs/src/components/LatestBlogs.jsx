import Image from "next/image";

const blogs = [
  {
    image: "/blog1.webp",
    alt: "Miniso",
    title: "Get To Know About Miniso India Amazing Team",
    paragraphs: [
      "Meet our two Superheroes of Operations Team, Operation Supervisors",
      "They have shown some immense growth and hard work since the time they have been with Miniso.",
      "Let us take you through their experience one by one.",
    ],
    padding: "p-2",
  },
  {
    image: "/blog2.webp",
    alt: "Marvel Collaboration",
    title: "MINISO Cooperates With Marvel Studios, Releasing 2000 Superheroes Peripheral Products",
    paragraphs: [
      "The world's well-known retail brand MINISO officially announced the cooperation with globally renowned top IP Marvel to develop a series of peripheral products, which will be put on sale in over 100 countries.",
      "The MINISO x MARVEL products exhibition area was set up at the new product release meeting. There were as many as 2000 M...",
    ],
    padding: "p-6",
  },
  {
    image: "/blog3.webp",
    alt: "Design Award",
    title: "Miniso Won Big At The German IF Design Awards 2019",
    paragraphs: [
      "The German iF Design awards 2019 recently bestowed MINISO, the world's most trusted designer lifestyle brand, for their creative innovation in three product categories.",
      "MINISO's Kendama Gel Pen, Round Foldable Lamp and U-Fan stood out amongst 6,000+ entries from over 50 countries and won at the international awards.",
    ],
    padding: "p-6",
    titleFont: "font-['Montserrat']",
  },
  {
    image: "/blog4.webp",
    alt: "Spring Clean",
    title: "It's Time To Spring Clean Your Office Desk And Boost Productivity!",
    paragraphs: [
      "Spring season is just around the corner and we are about to gear up for brighter mornings, lighter evening and a whole new lease of motivation!",
      null, // <br> spacer
      "There's no better time of the year to have a good clean - be it your office, wardrobe, kitchen or bedroom. With the average person spending around 40 hours a week working, we find that a clean workspace leads to increased focus and efficiency.",
    ],
    padding: "p-6",
    titleFont: "font-['Montserrat']",
  },
];

const LatestBlogs = () => {
  return (
    <>
      <section className="my-5 text-center">
        <h2 className="text-[30px] font-montserrat font-semibold text-[#333333] p-10 section-heading">
          LATEST FROM BLOGS
        </h2>
        <div className="flex flex-wrap justify-between px-50px">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`w-full md:w-[48%] lg:w-[23%] text-black border border-gray-200 ${blog.padding} overflow-hidden`}
            >
              <Image src={blog.image} alt={blog.alt} width={400} height={300} className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <p className={`font-semibold ${blog.titleFont || "font-montserrat"} text-[18px] text-[#333333] leading-none mb-3 mt-7`}>
                {blog.title}
              </p>
              {blog.paragraphs.map((text, i) =>
                text === null ? (
                  <br key={i} />
                ) : (
                  <p key={i} className="text-sm text-[#666666]">
                    {text}
                  </p>
                )
              )}
            </div>
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

export default LatestBlogs;
