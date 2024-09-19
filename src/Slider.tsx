import Marquee from "@/magicui/components/magicui/marquee";

const imageUrls = [
  "https://turismoantioquia.travel/wp-content/uploads/2021/09/BANNERS-MUNICIPIOS-AMAGA.jpg",
  "https://estaticos.elcolombiano.com/binrepository/848x565/34c0/780d565/none/11101/BHCE/ceamaga-5-jpg_40083712_20220603094945.jpg",
  "https://s2.wklcdn.com/image_15/472831/43858624/28708688.700x525.jpg",
  "https://s2.wklcdn.com/image_15/472831/16870211/10603517.700x525.jpg",
];

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
        {imageUrls.map((src, index) => (
          <ImageSlide key={index} src={src} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-900 via-transparent to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-900 via-transparent to-transparent"></div>
    </div>
  );
}
