// src/components/CardCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import placeholderImg from "../assets/placeholder.jpg";

const SLIDE_WIDTH = 183;
const SLIDE_HEIGHT = 270;

const CardCarousel = ({ cards = [], onCardClick }) => {
  return (
    <div className="relative w-full flex flex-col items-center">

      {/* SWIPER */}
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        slidesPerView={1.25}      // 👈 Small peek on each side
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 1.5,   // 👈 Slightly larger peek on tablet
          },
        }}
        className="pb-8"          // 👈 Adds space for the dots BELOW
        style={{
          width: SLIDE_WIDTH * 1.8,   // enough width to show peek
          height: SLIDE_HEIGHT,
        }}
      >
        {cards.map((card, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            <div
              onClick={() => onCardClick(idx)}
              className="w-[183px] h-[225px] p-3 bg-[#F4EAD5] rounded-[6px] cursor-pointer flex flex-col items-center shadow-md"
            >
              <img
                src={card.img || placeholderImg}
                alt={card.title}
                className="w-full aspect-square object-cover rounded-[6px]"
              />

              <h4 className="font-heading text-h4 text-center mt-3">
                {card.title}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM DOT COLORS */}
      <style>{`
        .swiper-pagination-bullet {
          background: #DEDBD7 !important; /* inactive dot */
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #5B4B36 !important; /* active dot */
        }
      `}</style>
    </div>
  );
};

export default CardCarousel;
