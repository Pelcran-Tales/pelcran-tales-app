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
        slidesPerView={1.25}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
        }}
        className="pb-8"
        style={{
          width: SLIDE_WIDTH * 1.8,
          height: SLIDE_HEIGHT,
        }}
      >
        {cards.map((card, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            <div
              onClick={() => onCardClick(idx)}
              className="w-[183px] h-[221px] p-3 bg-[#F4EAD5] hover:bg-[#f8f2e6] rounded-[6px] cursor-pointer flex flex-col items-center shadow-md"
            >
              <img
                src={card.img || placeholderImg}
                alt={card.title}
                className="w-full aspect-square object-cover rounded-[6px]"
              />

              {/* CHANGED h4 → h6 and text-h4 → text-h6 */}
              <h6 className="font-heading text-h6 text-center mt-3 text-primaryText">
                {card.title}
              </h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-pagination-bullet {
          background: #DEDBD7 !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #5B4B36 !important;
        }
      `}</style>
    </div>
  );
};

export default CardCarousel;
