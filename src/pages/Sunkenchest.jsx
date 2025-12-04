import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import XButton from "../components/XButton";
import PopupWindow from "../components/PopupWindow";
import CharacterInfoCard from "../components/CharacterInfoCard";
import { useNavigate } from "react-router-dom";

import CardCarousel from '../components/CardCarousel';
import sunkenchestShipImg from '../assets/sunken-chest-ship.jpg';
import sunkenchestJollyRogerImg from '../assets/sunkenchest-jolly-roger.jpg';
import linoothImg from '../assets/linooth.jpg';
import mosswoodImg from '../assets/mosswood.jpg';
import olmuzzleImg from '../assets/olmuzzle.jpg';
import thrasherImg from '../assets/thrasher.jpg';

const Sunkenchest = () => {
  const navigate = useNavigate();

    const cards = [
    { title: "Linooth", img: linoothImg },
    { title: "Ol' Muzzle", img: olmuzzleImg },
    { title: "Mosswood", img: mosswoodImg },
    { title: "Thrasher", img: thrasherImg },
  ];

  // --- NEW: Character info for popups ---
  const characterDetails = [
    {
      title: "Linooth",
      subtitle: "Male, European Pine Marten",
      image: linoothImg,
      bodyTable: [
        { label: "Nationality", value: "Hiugbonian" },
        { label: "Role", value: "Pelcran on the Sunken Chest" },
        { label: "Traits", value: "Chaotic, idealistic, comical." },
        { label: "Strengths", value: "Creativity, morale boost." },
        { label: "Weaknesses", value: "Distractible." }
      ],
      sectionTitle: "Backstory",
      body2: "To be discovered...",
    },
    {
      title: "Ol’Muzzle",
      subtitle: "Male, Eurasian Badger",
      image: olmuzzleImg,
      bodyTable: [
        { label: "Nationality", value: "Hiugbonian" },
        { label: "Role", value: "Pelcran on the Sunken Chest" },
        { label: "Traits", value: "Unpredictable, imaginative, loyal." },
        { label: "Strengths", value: "Deep intuition, emotional heart." },
        { label: "Weaknesses", value: "Memory erosion." }
      ],
      sectionTitle: "Backstory",
      body2: "To be discovered...",
    },
    {
      title: "Mosswood",
      subtitle: "Female, Caiman Lizard",
      image: mosswoodImg,
      bodyTable: [
        { label: "Nationality", value: "Hiugbonian" },
        { label: "Role", value: "Pelcran on the Sunken Chest" },
        { label: "Traits", value: "Impulsive, reckless, prankish." },
        { label: "Strengths", value: "Physical robustness, mischief." },
        { label: "Weaknesses", value: "Collateral damage." }
      ],
      sectionTitle: "Backstory",
      body2: "To be discovered...",
    },
    {
      title: "Thrasher",
      subtitle: "Female, Raccoon",
      image: thrasherImg,
      bodyTable: [
        { label: "Nationality", value: "Hiugbonian" },
        { label: "Role", value: "Pelcran on the Sunken Chest" },
        { label: "Traits", value: "Daydreaming, improvisational, scrappy." },
        { label: "Strengths", value: "Unexpected solutions." },
        { label: "Weaknesses", value: "Reality avoidance." }
      ],
      sectionTitle: "Backstory",
      body2: "To be discovered...",
    },
  ];

  const [activeCharacter, setActiveCharacter] = React.useState(null);

  const handleCardClick = (index) => {
    setActiveCharacter(characterDetails[index]);
  };

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

          {/* --- SHIP SECTION (No SectionBlock) --- */}
          <h2 className="font-heading text-h2 text-primaryText md:text-h2-md lg:text-h2-lg mb-[15px] mt-0">
            The Ship
          </h2>
            
          {/* Image + body */}
          <div className="mb-[24px]">
            <img
               src={sunkenchestShipImg}
               alt="The Sunken Chest Ship"
               className="w-full md:w-64 md:float-left md:mr-6 mb-4 rounded-lg shadow-md"
             />
             <p className="font-body text-body text-bodyText">
               The Sunken Chest is a wandering dhow stitched from myth and mischief, its foredeck said to be the very “chest” of Pelcran’s long-lost ship. 
               Its Veil Sail can shimmer to life at a moment’s notice, bending light until the vessel dissolves into mist — but every use demands a quiet 
               sacrifice. Ol’Muzzle, who bound their soul to the sail by choice, loses another sliver of memory each time the veil is drawn. <br />
               And as the crew chases hunches, dreams, and half-mad inspirations across the archipelago, one truth shadows even their brightest escapades: 
               how much of a past can be spent before the present forgets its own heart?
             </p>
             <div className="clear-left" />
          </div>


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

          {/* Horizontal Carousel */}
          <div className="mb-[24px]">
            <CardCarousel cards={cards} 
            onCardClick={handleCardClick} />
          </div>

        </main>
      </div>

      {/* --- POPUP --- */}
      {activeCharacter && (
        <PopupWindow onClose={() => setActiveCharacter(null)}>
          <CharacterInfoCard
            title={activeCharacter.title}
            subtitle={activeCharacter.subtitle}
            image={activeCharacter.image}
            bodyTable={activeCharacter.bodyTable}
            sectionTitle={activeCharacter.sectionTitle}
            body2={activeCharacter.body2}
          />
        </PopupWindow>
      )}
    </PageWrapper>
  );
};

export default Sunkenchest;
