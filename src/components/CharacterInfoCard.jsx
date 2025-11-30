import React from "react";

export default function CharacterInfoCard({
  title,
  subtitle,
  image,
  bodyTable,
  sectionTitle,
  body2,
}) {
  return (
    <div className="w-full text-[#372D20]">

      {/* H2 Title */}
      <h2 className="font-heading text-h2 md:text-h2-md lg:text-h2-lg mb-4">
        {title}
      </h2>

      {/* H4 Subtitle */}
      <h4 className="font-heading text-h4 md:text-h4-md lg:text-h4-lg mb-6">
        {subtitle}
      </h4>

      {/* RESPONSIVE IMAGE + TABLE */}
      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8 w-full">

        {/* Full-width responsive image on mobile / fixed-ratio on desktop */}
        <div className="w-full md:w-[258px] md:flex-shrink-0">
          <div className="w-full aspect-[258/366]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-[6px] shadow-md"
            />
          </div>
        </div>

        {/* Body Table */}
        <table className="table-fixed border-collapse w-full">
          <tbody>
            {bodyTable?.map((row, i) => (
              <tr key={i} className="align-top">
                {/* Left column */}
                <td className="w-28 pr-2 pb-1.5 align-top">
                  <h6 className="font-heading text-h6">{row.label}</h6>
                </td>

                {/* Right column */}
                <td className="text-body font-body break-words pl-2 pb-1.5">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* Section Title */}
      <h4 className="font-heading text-h4 md:text-h4-md lg:text-h4-lg mb-3">
        {sectionTitle}
      </h4>

      {/* Body 2 */}
      <p className="text-body font-body leading-relaxed whitespace-pre-line">
        {body2}
      </p>

    </div>
  );
}
