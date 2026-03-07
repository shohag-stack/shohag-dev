import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { slider } from "@/db/slide";
import Image from "next/image";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1000, stopOnInteraction: false }),
  ]);

  return (
    <div className="embla py-20">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slider.map((slide, index) => (
            <div className="embla__slide" key={slide.key}>
              <div className="embla__slide__inner">
                <Image
                  key={slide.key}
                  width={800}
                  height={600}
                  className="embla__slide"
                  src={slide.path}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
