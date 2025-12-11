import React from "react";

const MiniCard = ({ title, img, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="min-w-[150px] min-h-[186px] w-full p-3 bg-[#F4EAD5] hover:bg-[#f8f2e6] rounded-[6px] cursor-pointer 
                 flex flex-col items-center shadow-md"
    >
      {/* IMAGE — always square */}
      <img
        src={img}
        alt={title}
        className="w-full aspect-square object-cover rounded-[6px]"
      />

      {/* TITLE — h6, centered */}
      <h6 className="font-heading text-h6 text-center mt-3 text-primaryText">
        {title}
      </h6>
    </div>
  );
};

export default MiniCard;
