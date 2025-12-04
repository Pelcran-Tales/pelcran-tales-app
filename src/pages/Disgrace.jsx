import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import XButton from "../components/XButton";
import PopupWindow from "../components/PopupWindow";
import CharacterInfoCard from "../components/CharacterInfoCard";
import { useNavigate } from "react-router-dom";

import CardCarousel from '../components/CardCarousel'; // ← your reusable carousel
import disgraceShipImg from '../assets/disgrace-ship.jpg';
import disgraceJollyRogerImg from '../assets/disgrace-jolly-roger.jpg';
import cosgroveImg from '../assets/cosgrove.jpg';
import dubeothImg from '../assets/dubeoth.jpg';
import kuvImg from '../assets/kuv.jpg';
import sarnuqImg from '../assets/sarnuq.jpg';

const Disgrace = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Cosgrove", img: cosgroveImg },
    { title: "Kuv", img: kuvImg },
    { title: "Sarnuq", img: sarnuqImg },
    { title: "Dubeoth", img: dubeothImg },
  ];

  // --- NEW: Character info for popups ---
  const characterDetails = [
    {
      title: "Cosgrove",
      subtitle: "Male, Alpaca",
      image: cosgroveImg,
      bodyTable: [
        { label: "Nationality", value: "Hiugbonian" },
        { label: "Role", value: "Pelcran on the Disgrace" },
        { label: "Traits", value: "Fearless, impulsive, persuasive." },
        { label: "Strengths", value: "Charisma, rallying energy, talking into risky opportunities." },
        { label: "Weaknesses", value: "Overreaches, underplans." }
      ],
      sectionTitle: "Backstory",
      body2: "To be discovered...",
    },
    {
      title: "Kuv",
      subtitle: "Female, Clouded Leopard",
      image: kuvImg,
      bodyTable: [
        { label: "Nationality", value: "Hiugbonian" },
        { label: "Role", value: "Pelcran on the Disgrace" },
        { label: "Traits", value: "Aggressive, bold, risk-taking." },
        { label: "Strengths", value: "Frontline fighter, confidence." },
        { label: "Weaknesses", value: "Provokes unnecessary enemies." }
      ],
      sectionTitle: "Backstory",
      body2: "To be discovered...",
    },
    {
      title: "Sarnuq",
      subtitle: "Male, Golden Snub-Nosed Monkey",
      image: sarnuqImg,
      bodyTable: [
        { label: "Nationality", value: "Hiugbonian" },
        { label: "Role", value: "Pelcran on the Disgrace" },
        { label: "Traits", value: "Energetic, savvy, dynamic." },
        { label: "Strengths", value: "Improvisation, navigation, trickster instincts." },
        { label: "Weaknesses", value: "Chaotic planning." }
      ],
      sectionTitle: "Backstory",
      body2: "To be discovered...",
    },
    {
      title: "Dubeoth",
      subtitle: "Male, Red Deer",
      image: dubeothImg,
      bodyTable: [
        { label: "Nationality", value: "Hiugbonian" },
        { label: "Role", value: "Pelcran on the Disgrace" },
        { label: "Traits", value: "Undaunted, daring, cool-headed." },
        { label: "Strengths", value: "Balance, tactical calm." },
        { label: "Weaknesses", value: "Emotional distance." }
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

        <Header title="The Disgrace" />

        <main className="flex flex-col">

          {/* H2 → Impulsive Adventurers */}
          <h2 className="font-heading text-h2 text-primaryText md:text-h2-md lg:text-h2-lg mb-[15px] mt-0">
            Impulsive Adventurers
          </h2>

          {/* Body */}
          <p className="font-body text-body text-bodyText mb-[24px]">
            A crew of bold, energetic and risk-taking Pelcrans.
          </p>

          {/* --- SHIP SECTION (No SectionBlock) --- */}
          <h2 className="font-heading text-h2 text-primaryText md:text-h2-md lg:text-h2-lg mb-[15px] mt-0">
            The Ship
          </h2>
            
          {/* Image + body */}
          <div className="mb-[24px]">
            <img
             Src={disgraceShipImg}
             Alt="The Disgrace Ship"
            className="w-full md:w-64 md:float-left md:mr-6 mb-4 rounded-lg shadow-md"
             />
             <p className="font-body text-body text-bodyText">
              The Disgrace is a scar-lined fifie bound to its crew by a rare alchemical pitch, and every pre-dawn she draws them into a dream-heavy slumber so the Blackblood can knit her wounds. 
              With each repair the bond tightens, sharpening her dark talons and tinting her sails with the colors of the crew’s shifting emotions. <br />
              One day, when the pitch finally claims every plank, the Disgrace will awaken as something far more than a ship — and the crew’s unity, or fracture, will decide what it becomes…
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
              src={disgraceJollyRogerImg}
              alt="The Disgrace Jolly Roger"
              className="w-full md:w-64 md:float-left md:mr-6 mb-4 rounded-lg shadow-md"
            />
            <p className="font-body text-body text-bodyText">
              A ticking compass-bomb set above crossed cutlasses, The Disgrace's Jolly Roger marks a crew who never plan their course, only light the fuse, and charge headfirst into whatever awaits.
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

export default Disgrace;
