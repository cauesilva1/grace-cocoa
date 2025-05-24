"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  images: string[];
  alt: string;
}

export default function CarouselDesktop({ images, alt }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="hidden lg:flex flex-1 items-center justify-end relative overflow-hidden ">
      <div className="flex transition-transform duration-500 ease-in-out w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%]  min-w-0"
              >
                <Image
                  src={image}
                  width={550}
                  height={8}
                  alt={alt}
                  className="w-full h-auto transition-transform duration-200 hover:scale-110 rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#521B11] text-white w-10 h-10 rounded-full flex items-center justify-center z-10 cursor-pointer"
        onClick={scrollPrev}
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#521B11] text-white w-10 h-10 rounded-full flex items-center justify-center z-10 cursor-pointer"
        onClick={scrollNext}
      >
        →
      </button>
    </div>
  );
}
