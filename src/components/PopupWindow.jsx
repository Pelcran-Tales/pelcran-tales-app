import React, { useEffect } from "react";
import XButton from "./XButton";

export default function PopupWindow({ children, onClose }) {
  // Prevent background scroll when popup is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#372D20] bg-opacity-80">
      <div
        className="
          relative
          w-full mx-auto w-[85%] md:w-[70%] max-w-[1100px]
          h-full max-h-[calc(100%-60px)]
          bg-[#F4EAD5] rounded-[6px]
          overflow-hidden
        "
      >
        {/* XButton fixed at top-right of popup */}
        <div className="absolute top-[21px] right-[21px] z-[10]">
          <XButton onClick={onClose} />
        </div>

        {/* Scrollable content inside popup */}
        <div className="h-full overflow-auto pt-[60px] px-[21px] pb-[21px]">
          {children}
        </div>
      </div>
    </div>
  );
}

