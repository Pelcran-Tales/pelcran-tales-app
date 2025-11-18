import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';

import XButton from "../components/XButton";
import { useNavigate } from "react-router-dom";

import hiugbonmapImg from '../assets/hiugbonmap.jpg';

const Map = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="relative">

        {/* Fixed Close Button */}
        <div className="fixed top-[21px] right-[21px] z-[60]">
          <XButton onClick={() => navigate("/foundations")} />
        </div>

        <Header title="Map" />

        <main className="mt-[calc(theme(spacing.21))]"> {/* optional margin-top to avoid overlap with header */}

          {/* -------------------------- */}
          {/* INTRO Section */}
          {/* -------------------------- */}
          <h2 className="font-heading text-h2 text-primaryText mb-[6px] md:text-h2-md lg:text-h2-lg">
            Intro
          </h2>

          {/* Full-width responsive image */}
          <div className="w-full rounded-lg overflow-hidden shadow-md mb-[15px]">
            <img
              src={hiugbonmapImg}
              alt="Hiugbon Archipelgo Map"
              className="
              w-full 
              h-auto 
              object-cover
              "
            />
          </div>

          {/* Body text below image */}
          <p className="font-body text-body text-bodyText mb-[36px]">
            This hand-drawn map of the Hiugbon Archipelago reveals key 
            locations that hint at the larger story, guiding you deeper 
            into this pirate-ruled world.
          </p>

        </main>
      </div>
    </PageWrapper>
  );
};

export default Map;
