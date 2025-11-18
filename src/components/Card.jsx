import React from "react";

const Card = ({
  image = "PLACEHOLDER IMAGE",
  title,
  subtitle,
  showSubtitle = true,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="
        flex items-center
        gap-3
        rounded-md
        bg-[#f8f2e6]
        transition-all duration-150
        cursor-pointer
        hover:bg-[#FBF7EE]
        hover:shadow-none
        w-full
        h-[87px]
        p-0
      "
    >
      {/* Image / placeholder */}
      <div
        className="
          flex justify-center items-center
          rounded-md
          bg-[#f4ead5]
          text-[#372D20] font-body text-xs leading-[15px]
          shrink-0
        "
        style={{
          width: "106px",
          height: "75px",
          margin: "6px 12px 6px 6px", // top 6px, right 12px, bottom 6px, left 6px
        }}
      >
        {image}
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-center items-start w-full h-full pr-3">
        {showSubtitle && (
          <div className="font-body text-body" style={{ color: "#5B4B36" }}>
            {subtitle}
          </div>
        )}
        <div className="font-heading text-h6 text-primaryText leading-[21px]">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Card;


