// src/components/PrimaryButton.jsx
import React from "react";

const ICON_CLASS = "w-[18px] h-[18px] text-[#FDFBF7] fill-current";

export default function PrimaryButton({ label, leftIcon, rightIcon, onClick }) {
  const renderIcon = (icon) => {
    if (!icon) return null;

    // 1) If it's already a React element (e.g. <svg/> or <img/>)
    if (React.isValidElement(icon)) {
      // Add className prop (merge if existing)
      return React.cloneElement(icon, {
        className: `${ICON_CLASS} ${icon.props.className || ""}`.trim(),
      });
    }

    // 2) If it's a component (function / class) — render it
    if (typeof icon === "function") {
      const IconComp = icon;
      return <IconComp className={ICON_CLASS} />;
    }

    // 3) If it's a string -> treat as image URL
    if (typeof icon === "string") {
      return (
        <img
          src={icon}
          alt=""
          className="w-[18px] h-[18px] object-cover"
          // can't recolor a raster, so no color attempt
        />
      );
    }

    // unknown type
    return null;
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex items-center justify-center
        h-[36px] min-w-[29px]
        px-[9px] py-[6px] gap-[9px]
        bg-[#372D20] hover:bg-[#493C2B]
        rounded-[6px]
        text-[#FDFBF7]
        font-heading text-h6 uppercase tracking-widest
        select-none transition-colors
      "
    >
      {renderIcon(leftIcon)}
      {label && <span className="ml-1">{label}</span>}
      {renderIcon(rightIcon)}
    </button>
  );
}