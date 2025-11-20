import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import XButton from "../components/XButton";
import { useNavigate } from "react-router-dom";

import SectionBlock from '../components/SectionBlock';
import CardCarousel from '../components/CardCarousel'; // Proper import
import placeholderImg from '../assets/placeholder.jpg';
import alaricsoathJollyRogerImg from '../assets/alaricsoath-jolly-roger.jpg';
import brunnickImg from '../assets/brunnick.jpg';
import grunnickImg from '../assets/grunnick.jpg';
import nimbostratusImg from '../assets/nimbostratus.jpg';
import thornImg from '../assets/thorn.jpg';

const Alaricsoath = () => {
  const navigate = useNavigate();

  // Cards data for the carousel
  const cards = [
    { title: "Brunnick", img: brunnickImg },
    { title: "Grunnick", img: grunnickImg },
    { title: "Thorn", img: thornImg },
    { title: "Nimbostratus", img: nimbostratusImg },
  ];

  const handleCardClick = (index) => {
    console.log("Clicked card:", index);
  };

  return (
    <PageWrapper>
      <div className="relative">

        {/* Fixed Close Button */}
        <div className="fixed top-[21px] right-[5%] md:right-[12.5%] z-[60] safe-top safe-right">
          <XButton onClick={() => navigate("/characters")} />
        </div>

        <Header title="The Alaric's Oath" />

        <main className="flex flex-col">

          {/* H2 → Strategic Thinkers */}
          <h2 className="font-heading text-h2 text-primaryText md:text-h2-md lg:text-h2-lg mb-[15px] mt-0">
            Strategic Thinkers
          </h2>

          <p className="font-body text-body text-bodyText mb-[24px]">
            A crew of disciplined, clever and methodical Pelcrans.
          </p>

          {/* SectionBlock → The Ship */}
          <SectionBlock
            titleH2="The Ship"
            titleH4={false}
            imgSrc={placeholderImg}
            imgAlt="The Alaric's Oath"
            className="mb-[24px]"
          >
            <p>
              The Alaric’s Oath is a vigilant sloop that glides like a thought through dark water — silent, watchful, and lit from within by its 
              rune-carved masts. When danger nears, the carvings flare to life, and the ship’s twin telescopes swing with predatory precision 
              toward unseen shapes in the distance. But every warning carries a price: one crew member is struck blind, chosen at random by the 
              Oath itself.
            </p>
            <p>
              As their discipline holds and their trust frays, a single question grows sharper than any blade — how much foresight 
              is worth the darkness that follows?
            </p>
          </SectionBlock>

          {/* H2 → Jolly Roger */}
          <h2 className="font-heading text-h2 text-primaryText md:text-h2-md lg:text-h2-lg mb-[15px] mt-0">
            The Jolly Roger
          </h2>

          <div className="mb-[24px]">
            <img
              src={alaricsoathJollyRogerImg}
              alt="The Alaric's Oath Jolly Roger"
              className="w-full md:w-64 md:float-left md:mr-6 mb-4 rounded-lg shadow-md"
            />
            <p className="font-body text-body text-bodyText">
              A brain crowned with the negative silhouette of a tower above a lone bone, the Alaric's Oath's Jolly Roger marks a crew who plot every move like a sea-bound chess match, always ten steps ahead.
            </p>
            <div className="clear-left" />
          </div>

          {/* H2 → The Crew */}
          <h2 className="font-heading text-h2 text-primaryText md:text-h2-md lg:text-h2-lg mb-[15px] mt-0">
            The Crew
          </h2>

          {/* Horizontal Card Carousel */}
          <div className="mb-[24px]">
            <CardCarousel
              cards={cards}
              onCardClick={handleCardClick}
            />
          </div>

        </main>
      </div>
    </PageWrapper>
  );
};

export default Alaricsoath;
