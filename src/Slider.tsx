import Marquee from "@/magicui/components/magicui/marquee";

import Imagenes from "./assets/imagenes";

const ImageSlide = ({ src }: { src: string }) => {
  return (
    <div className="relative flex-shrink-0 w-64 h-32 sm:w-48 sm:h-24 flex items-center justify-center overflow-hidden">
      <img src={src} alt="" className="object-cover w-full h-full" />
    </div>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-36 w-full overflow-hidden bg-background sm:h-24">
      <Marquee
        pauseOnHover={false}
        className="whitespace-nowrap"
        loop
        style={{ "--duration": "30s" }}
        pauseOnHoverClass="md:hover:pause"
      >
        {Object.values(Imagenes).map((src, index) => (
          <ImageSlide key={index} src={src} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-900 via-transparent to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-900 via-transparent to-transparent"></div>
    </div>
  );
}
