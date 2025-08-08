import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroText = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".text",
      {
        opacity: 0,
        transformOrigin: "50% 0%",
        rotationX: -90,
        yPercent: 100,
        willChange: "transform,opacity",
      },
      {
        rotationX: 0,
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        delay:0.3,
        clearProps: "willChange",
      }
    );

  })


  return (
    <div className="w-full pb-20 md:pb-0">
      <div className="px-4 md:px-12 py-6 mt-28 perspective-distant ">
        <h1 className="text opacity-0 text-7xl inline-block origin-top text-left  md:text-[15rem] md:leading-[16rem]  font-medium uppercase  bg-gradient-to-b from-[#535252] to-[#3a3939] text-transparent bg-clip-text">
          Aryan
        </h1>
        <h1 className="text opacity-0 text-7xl md:text-[15rem] md:leading-[16rem] text-right font-medium  md:mr-40 uppercase bg-gradient-to-b from-[#535252] to-[#3a3939]  text-transparent bg-clip-text">
          Jast
        </h1>
      </div>
    </div>
  );
}

export default HeroText