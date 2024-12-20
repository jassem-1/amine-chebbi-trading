import { amine, curve, chebbi, bitcoin } from "../assets";
import Section from "./Section";
import { ReactTyped } from "react-typed";

import { BackgroundCircles, BottomLine } from "./design/Hero";
import { useRef } from "react";
import { InfiniteMovingCards } from "./Infinite-moving-cards";
import { useTranslation } from "react-i18next";
import LanguageSelector from './Translate';
const technologyStack = [
  { name: "Next JS", image: chebbi, officialSite: "https://nextjs.org/" },
  { name: "Prisma", image: bitcoin, officialSite: "https://www.prisma.io/" },
  { name: "Next JS", image: chebbi, officialSite: "https://nextjs.org/" },
  { name: "Prisma", image: bitcoin, officialSite: "https://www.prisma.io/" },
  { name: "Next JS", image: chebbi, officialSite: "https://nextjs.org/" },
  { name: "Prisma", image: bitcoin, officialSite: "https://www.prisma.io/" },
  { name: "Next JS", image: chebbi, officialSite: "https://nextjs.org/" },
  { name: "Prisma", image: bitcoin, officialSite: "https://www.prisma.io/" },
  { name: "Next JS", image: chebbi, officialSite: "https://nextjs.org/" },
  { name: "Prisma", image: bitcoin, officialSite: "https://www.prisma.io/" },
];
const Hero = () => {
  const parallaxRef = useRef(null);
  const { t } = useTranslation();

  return (
    <Section className="pt-[10rem] bg-[#FFF9F1] -mt-[5.25rem]" customPaddings id="about">

      <div className="p-4 relative" ref={parallaxRef}>
      <div className="ml-auto absolute top-0 z-30 right-10">
            <LanguageSelector /> {/* Add TranslateWidget */}
          </div>
        <div className="relative z-1 w-full mx-auto pt-6 text-center mb-[2.875rem] md:mb-10 lg:mb-[2.25rem]">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 text-black flex flex-col items-center">
          Achieve trading excellence with 
                     <span className="inline-block relative">
                     every move
              <img
                src={curve}
                className="absolute top-full left-0 xl:-mt-2"
                width={224}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="text-lg sm:text-sm md:text-xl lg:text-2xl max-w-3xl mx-auto mb-4 text-[#493822] lg:mb-2">
          {t("hero.subtitle")}
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto xl:mb-24 pt-2 md:pt-16">
          <div className="flex md:flex-row flex-col justify-between items-start  p-2 w-full gap-8 h-full">
            <div className="flex flex-col gap-y-4 justify-start p-4 z-10 w-full">
              <h1 className="text-2xl md:text-4xl text-amber-950">
              {t("hero.about_me_title")}              </h1>
              <ReactTyped
        strings={[t("hero.typed_text")]} // Fetch translated text dynamically
        className=" text-xs sm:text-base md:text-sm lg:text-lg text-[#604a2d]"
            typeSpeed={10}
            startDelay={500}
          />
      
            </div>
            <div className="relative z-1 p-0.5 rounded-2xl background-conic backdrop-blur-sm border border-white border-opacity-45
             w-ful">
            <div className="relative rounded-[1rem] ">
              <div className="absolute inset-0 z-0 flex flex-col space-y-4">
                {/* First Row - Left Direction */}
                {technologyStack.length > 0 && (
                  <InfiniteMovingCards
                    items={technologyStack.map((tech) => ({
                      name: tech.name,
                      image: tech.image,
                    }))}
                    direction="left"
                    speed="fast"
                    pauseOnHover={true}
                  />
                )}

                {/* Second Row - Right Direction */}
                {technologyStack.length > 0 && (
                  <InfiniteMovingCards
                    items={technologyStack.map((tech) => ({
                      name: tech.name,
                      image: tech.image,
                    }))}
                    direction="right"
                    speed="fast"
                    pauseOnHover={true}
                  />
                )}

                {/* Third Row - Left Direction */}
                {technologyStack.length > 0 && (
                  <InfiniteMovingCards
                    items={technologyStack.map((tech) => ({
                      name: tech.name,
                      image: tech.image,
                    }))}
                    direction="left"
                    speed="fast"
                    pauseOnHover={true}
                  />
                )}
              </div>

              {/* Image */}
              <div className="relative z-10 flex justify-center">
                <img src={amine} width={624} alt="amine chebbi" />
              </div>
            </div>
          </div>

          </div>
         
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            {/* <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            /> */}
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
