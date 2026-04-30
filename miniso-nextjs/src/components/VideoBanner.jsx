import Image from "next/image";

const VideoBanner = () => {
  return (
    <>
      <div>
        <Image src="/video.webp" alt="Video Placeholder" width={1920} height={600} className="w-full h-auto" />
      </div>
      <hr />
    </>
  );
};

export default VideoBanner;
