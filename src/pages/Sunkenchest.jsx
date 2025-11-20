import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import XButton from "../components/XButton";
import { useNavigate } from "react-router-dom";

import SectionBlock from '../components/SectionBlock';
import placeholderImg from '../assets/placeholder.jpg';
import sunkenchestJollyRogerImg from '../assets/sunkenchest-jolly-roger.jpg';

const Sunkenchest = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="relative">

        {/* Fixed Close Button */}
        <div className="fixed top-[21px] right-[5%] md:right-[12.5%] z-[60] safe-top safe-right">
          <XButton onClick={() => navigate("/characters")} />
        </div>

        <Header title="The Sunken Chest" />

        <main className="flex flex-col">

          {/* H2 → Strategic Thinkers */}
          <h2 className="font-heading text-h2 text-primaryText md:text-h2-md lg:text-h2-lg mb-[15px] mt-0">
            Unconventional Dreamers
          </h2>

          {/* Body */}
          <p className="font-body text-body text-bodyText mb-[24px]">
            A crew of quirky, inventive, playful and imaginative Pelcrans.
          </p>

          {/* SectionBlock → The Ship */}
          <SectionBlock
            titleH2="The Ship"
            titleH4={false}
            imgSrc={placeholderImg}
            imgAlt="The Sunken Chest"
            className="mb-[24px]"
          >
            <p>
              The Sunken Chest is a wandering dhow stitched from myth and mischief, its foredeck said to be the very “chest” of Pelcran’s 
              long-lost ship. Its Veil Sail can shimmer to life at a moment’s notice, bending light until the vessel dissolves into mist — 
              but every use demands a quiet sacrifice. Ol’Muzzle, who bound their soul to the sail by choice, loses another sliver of 
              memory each time the veil is drawn.
            </p>
            <p>
              And as the crew chases hunches, dreams, and half-mad inspirations across the archipelago, one truth shadows even their brightest 
              escapades: how much of a past can be spent before the present forgets its own heart?
            </p>
          </SectionBlock>

          {/* H2 → Jolly Roger */}
          <h2 className="font-heading text-h2 text-primaryText md:text-h2-md lg:text-h2-lg mb-[15px] mt-0">
            The Jolly Roger
          </h2>

          {/* Image + body */}
          <div className="mb-[24px]">
            <img
              src={sunkenchestJollyRogerImg}
              alt="The Sunken Chest Jolly Roger"
              className="w-full md:w-64 md:float-left md:mr-6 mb-4 rounded-lg shadow-md"
            />
            <p className="font-body text-body text-bodyText">
              A flying galleon adrift in clouds, the Sunken Chest's Jolly Roger marks a crew who chase horizons others cannot see... Pelcrans of wonder as much as the sea.
            </p>
            <div className="clear-left" />
          </div>

          {/* H2 → The Crew */}
          <h2 className="font-heading text-h2 text-primaryText md:text-h2-md lg:text-h2-lg mb-[15px] mt-0">
            The Crew
          </h2>

        </main>
      </div>
    </PageWrapper>
  );
};

export default Sunkenchest;
