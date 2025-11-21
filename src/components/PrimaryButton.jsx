// src/components/PrimaryButton.jsx
import React from "react";

const ICON_CLASS = "w-[18px] h-[18px] text-[#FDFBF7] fill-current";

export default function PrimaryButton({ label, leftIcon, rightIcon, onClick, disabled }) {
  const renderIcon = (icon) => {
    if (!icon) return null;

    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, {
        className: `${ICON_CLASS} ${icon.props.className || ""}`.trim(),
      });
    }

    if (typeof icon === "function") {
      const IconComp = icon;
      return <IconComp className={ICON_CLASS} />;
    }

    if (typeof icon === "string") {
      return <img src={icon} alt="" className="w-[18px] h-[18px] object-cover" />;
    }

    return null;
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        h-[36px] min-w-[29px]
        px-[9px] py-[6px] gap-[9px]
        bg-[#372D20] hover:bg-[#493C2B]
        rounded-[6px]
        text-[#FDFBF7]
        font-heading text-h6 uppercase tracking-widest
        select-none transition-colors
        ${disabled ? "opacity-50 cursor-not-allowed hover:bg-[#372D20]" : ""}
      `}
    >
      {renderIcon(leftIcon)}
      {label && <span className="ml-1">{label}</span>}
      {renderIcon(rightIcon)}
    </button>
  );
}
