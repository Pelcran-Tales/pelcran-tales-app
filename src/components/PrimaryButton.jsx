import React from "react";

const PrimaryButton = ({ label, leftIcon, rightIcon, onClick }) => {
  const renderIcon = (iconElement) => {
    if (!iconElement) return null;

    // Check if it's already a React element
    return React.isValidElement(iconElement)
      ? React.cloneElement(iconElement, { className: "w-[18px] h-[18px] text-[#FDFBF7]" })
      : null; // we only support React elements for now
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
      {label && <span>{label}</span>}
      {renderIcon(rightIcon)}
    </button>
  );
};

export default PrimaryButton;







