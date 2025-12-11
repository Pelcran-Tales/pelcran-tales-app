import React, { useState } from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';

import XButton from "../components/XButton";
import PrimaryButton from "../components/PrimaryButton";
import PopupWindow from "../components/PopupWindow";
import SectionBlock from "../components/SectionBlock";
import { useNavigate } from "react-router-dom";

import hiugbonmapImg from '../assets/hiugbonmap.jpg';
import embrinockImg from '../assets/embrinock.jpg';
import oppedenImg from '../assets/oppeden.jpg';
import relnavithImg from '../assets/relnavith.jpg';
import restradPortImg from '../assets/restrad-port.jpg';

const Map = () => {
  const navigate = useNavigate();
  const [activePopup, setActivePopup] = useState(null); // tracks which button popup is open

  // Design coordinates for buttons
  const designWidth = 318;
  const designHeight = 225;

  const buttons = [
    { label: "1", leftPx: 61, topPx: 95 },
    { label: "2", leftPx: 200, topPx: 190 },
    { label: "3", leftPx: 300, topPx: 175 },
    { label: "4", leftPx: 270, topPx: 90 },
  ].map(btn => ({
    ...btn,
    leftPercent: (btn.leftPx / designWidth) * 100,
    topPercent: (btn.topPx / designHeight) * 100,
  }));

  // Content for each popup SectionBlock
  const popupContents = [
    {
      titleH2: "Restrad Port",
      titleH4: "The Colonial Stronghold",
      imgSrc: restradPortImg,
      imgAlt: "Restrad Port",
      body: "Once a thriving Hiugbonian harbor, Restrad Port now beats to the drum of the Helderian Empire. With its towering docks, foreign warships, and endless trade convoys, the city stands as both a naval stronghold and a symbol of the Empire’s grip over Sunahiug Island. To the locals, it is a place of heavy taxes, strict rules, and watchful soldiers; to the Pelcrans, it is the enemy’s prize jewel—ripe for disruption, sabotage, or plunder. Beneath the Empire’s banners, whispers of resistance still drift through its alleyways like salt on the wind."
    },
    {
      titleH2: "Oppeden",
      titleH4: "The Pirate Hideout",
      imgSrc: oppedenImg,
      imgAlt: "Oppeden",
      body: "Hidden from the maps and unknown to the Empire, Oppeden is the Pelcrans’ secret heart. Ringed by jagged cliffs and treacherous waters, the island can only be reached through the perilous Ferrownek Passage, where narrow straits and dagger-like islets turn careless sailors into wreckage. Yet for those who brave the course, Oppeden Bay opens like a safe harbor—a place of refuge, council, and Pelcran rule. Here, among carved stone halls and weatherworn huts, the outlaws govern themselves and plot against the Helderian yoke. To outsiders, the island might as well not exist… and that’s just how the Pelcrans prefer it."
    },
    {
      titleH2: "Embrinock",
      titleH4: "The Pirate Haven",
      imgSrc: embrinockImg,
      imgAlt: "Embrinock",
      body: "If Oppeden is the hidden heart of the Pelcrans, Embrinock is their open palm. This lively island is a favored stopping point for crews in need of rest, recruits, or a strong drink after weeks at sea. Its taverns are always filled with laughter, brawls, and rumors of treasure—some true, most false. Between the barrels of rum and the clamor of sea shanties, Pelcrans trade stories, forge alliances, and pick up the odd stowaway willing to try a pirate’s life. To the Helderians it may seem like a mere speck on the map—but to those who sail under the black flags, Embrinock is where the tales begin."
    },
    {
      titleH2: "Relnavith",
      titleH4: "The Ship Graveyard",
      imgSrc: relnavithImg,
      imgAlt: "Relnavith",
      body: "Known as the Ship Graveyard yet shrouded in mystery, Relnavith is spoken of more than it is truly known. Wrecks and relics of past battles drift half-submerged in the shallows, lie stranded along the shore, or are carried inland by storms and time. Some whisper it hides a secret market among the splintered hulks, where scavengers and shipwrights barter over barnacled treasures and broken timbers. The truth? Only the Pelcrans know for certain... Whether a place of repair, trade, or quiet mourning for ships long gone, Relnavith holds a key place in Pelcran society."
    },
  ];

  return (
    <PageWrapper>
      <div className="relative">

        {/* Fixed Close Button */}
        <div className="fixed top-[21px] right-[5%] md:right-[12.5%] z-[60] safe-top safe-right">
          <XButton onClick={() => navigate("/foundations")} />
        </div>

        <Header title="Map" />

        <main>

          {/* -------------------------- */}
          {/* INTRO Section */}
          {/* -------------------------- */}
          <h2 className="font-heading text-h2 text-primaryText mb-4 md:text-h2-md lg:text-h2-lg">
            Hiugbon Archipelago
          </h2>

          {/* Map Image Container */}
          <div className="relative w-full rounded-lg overflow-hidden shadow-md mb-[15px]">
            <img
              src={hiugbonmapImg}
              alt="Hiugbon Archipelago Map"
              className="w-full h-auto object-cover"
            />

            {/* Map Buttons */}
            {buttons.map((btn, idx) => (
              <div
                key={idx}
                className="absolute"
                style={{
                  left: `${btn.leftPercent}%`,
                  top: `${btn.topPercent}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <PrimaryButton
                  label={btn.label}
                  onClick={() => setActivePopup(idx)}
                />
              </div>
            ))}
          </div>

          {/* Body text below image */}
          <p className="font-body text-body text-bodyText mb-[36px]">
            Interact with this hand-drawn map of the Hiugbon Archipelago to discover its key 
            locations.
          </p>

        </main>

        {/* Popup for active button */}
        {activePopup !== null && (
          <PopupWindow onClose={() => setActivePopup(null)}>
            <SectionBlock
            titleH2={popupContents[activePopup].titleH2}
            titleH4={popupContents[activePopup].titleH4}
            imgSrc={popupContents[activePopup].imgSrc}
            imgAlt={popupContents[activePopup].imgAlt}
            >
            {popupContents[activePopup].body}
            </SectionBlock>
          </PopupWindow>
        )}

      </div>
    </PageWrapper>
  );
};

export default Map;
