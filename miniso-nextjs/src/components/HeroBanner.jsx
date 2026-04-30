import Image from "next/image";

const HeroBanner = () => {
  return (
    <>
      <div>
        <Image src="/hero.webp" alt="Hero Banner" width={1920} height={600} priority className="w-full h-auto" />
      </div>
      <hr />
    </>
  );
};

export default HeroBanner;
