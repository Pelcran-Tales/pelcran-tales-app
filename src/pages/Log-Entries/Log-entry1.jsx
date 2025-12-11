// src/pages/Log-Entries/Log-entry1.jsx
import React from "react";
import Header from "../../components/Header";
import PageWrapper from "../../components/PageWrapper";

import placeholderImg from "../../assets/placeholder.jpg";

import XButton from "../../components/XButton";
import PrimaryButton from "../../components/PrimaryButton";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";

import { useNavigate } from "react-router-dom";

const LogEntry1 = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="relative">

        {/* Fixed Close Button */}
        <div className="fixed top-[21px] right-[5%] md:right-[12.5%] z-[60] safe-top safe-right">
          <XButton onClick={() => navigate("/logbook")} />
        </div>

        <Header title="S1/LE1" />

        <main>
          <h2 className="font-heading text-h2 text-primaryText mb-4 md:text-h2-md lg:text-h2-lg">
            Episode Title
          </h2>

          <img
            src={placeholderImg}
            alt="Placeholder"
            className="w-full md:w-64 md:float-left md:mr-6 mb-4 rounded-lg shadow-md"
          />

          <p className="font-body text-body text-bodyText mb-4">
            Sed eros nisl, accumsan nec arcu a, sodales finibus odio...
          </p>

          <p className="font-body text-body text-bodyText">
            Donec eget efficitur quam. Maecenas eu sollicitudin lorem...
          </p>

          <div className="clear-both" />

          {/* --- Bottom Navigation Buttons --- */}
          <div className="flex justify-end mt-6">
             <PrimaryButton
               rightIcon={ArrowRight}
               onClick={() => navigate("/log-entry2")} // change as needed
               label="" // no text
             />
          </div>
        </main>
      </div>
    </PageWrapper>
  );
};

export default LogEntry1;
