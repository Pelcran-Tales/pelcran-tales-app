import React from "react";

const SectionBlock = ({ titleH2, titleH4, imgSrc, imgAlt, children }) => {
  return (
    <section className="mb-section-gap">
      
      {/* H2 */}
      {titleH2 && (
        <h2 className="font-heading text-h2 text-primaryText md:text-h2-md lg:text-h2-lg mb-[6px]">
          {titleH2}
        </h2>
      )}

      {/* H4 */}
      {titleH4 && (
        <h4 className="font-heading text-h4 text-primaryText md:text-h4-md lg:text-h4-lg mb-[15px]">
          {titleH4}
        </h4>
      )}

      {/* Image wrapper */}
      {imgSrc && (
        <div className="w-full aspect-[318/87] rounded-lg overflow-hidden shadow-md mb-[15px]">
          <img src={imgSrc} alt={imgAlt || ""} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Body text */}
      {children && (
        <div className="font-body text-body text-bodyText">
          {children}
        </div>
      )}

    </section>
  );
};

export default SectionBlock;



