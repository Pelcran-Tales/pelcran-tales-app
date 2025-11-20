// src/components/CardCarousel.jsx
import React, { useState, useRef } from "react";
import placeholderImg from "../assets/placeholder.jpg";
import PrimaryButton from "./PrimaryButton";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";

const SWIPE_THRESHOLD = 50; // pixels required to register a swipe

const CardCarousel = ({ cards = [], onCardClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const total = cards.length;

  const prev = () => setCurrentIndex((currentIndex - 1 + total) % total);
  const next = () => setCurrentIndex((currentIndex + 1) % total);

  /* --- Touch Handlers --- */
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > SWIPE_THRESHOLD) {
      if (distance > 0) {
        next(); // swipe left → next
      } else {
        prev(); // swipe right → previous
      }
    }

    // reset tracking
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel wrapper */}
      <div className="relative h-[224px] md:h-[280px] flex items-center justify-center">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`absolute transition-opacity duration-500 ease-in-out
              ${idx === currentIndex ? "opacity-100" : "opacity-0"}
            `}
            style={{ width: "182px", height: "224px" }}
          >
            <div
              onClick={() => onCardClick(idx)}
              className="w-full h-full p-3 bg-[#F4EAD5] rounded-[6px] cursor-pointer flex flex-col items-center"
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
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-[15px] gap-[6px]">
        {cards.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-[#5B4B36]" : "bg-[#DEDBD7]"
            }`}
          />
        ))}
      </div>

      {/* Left arrow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2">
        <PrimaryButton leftIcon={ArrowLeft} onClick={prev} />
      </div>

      {/* Right arrow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2">
        <PrimaryButton rightIcon={ArrowRight} onClick={next} />
      </div>
    </div>
  );
};

export default CardCarousel;
