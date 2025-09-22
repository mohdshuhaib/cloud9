// app/components/Gallery.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Gallery() {
  const images: string[] = [
    "/gallery1.png", "/gallery3.png", "/gallery4.png",
    "/gallery6.png", "/gallery2.png", "/gallery8.png",
    "/gallery7.png",
  ];

  return (
    <section id="gallery" className="py-20 bg-background-dark">
      <div className="container mx-auto px-6 text-center">
        {/* 1. Translated heading with new font class */}
        <h3 className="text-4xl font-bold mb-12 font-heading">
          <span className="gold-gradient-text">Our Work</span>
        </h3>

        <div className="relative flex flex-col items-center">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: true,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="w-full pb-14"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="!w-[18rem] !h-[25rem] sm:!w-[22rem] sm:!h-[28rem] md:!w-[26rem] md:!h-[32rem]"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                  <Image
                    src={image}
                    // 2. Translated alt text
                    alt={`A stylish haircut from the Cloud9 gallery ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination mt-4 flex justify-center" />
        </div>
      </div>
    </section>
  );
}