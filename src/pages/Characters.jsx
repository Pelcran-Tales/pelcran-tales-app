import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import XButton from "../components/XButton";
import PopupWindow from "../components/PopupWindow";
import CharacterInfoCard from "../components/CharacterInfoCard";
import { useNavigate } from "react-router-dom";

import Card from '../components/Card';
import MiniCard from "../components/MiniCard";

import disgraceflagImg from '../assets/disgrace-flag.jpg';
import alaricsoathflagImg from '../assets/alaricsoath-flag.jpg';
import sunkenchestflagImg from '../assets/sunkenchest-flag.jpg';
import placeholderImg from "../assets/placeholder.jpg";

const Characters = () => {
  const navigate = useNavigate();
  const imgClass = "w-full h-full object-cover rounded-md";

  // 1️⃣ State to track active character for popup
  const [activeCharacter, setActiveCharacter] = React.useState(null);

  // 2️⃣ Example character data
  const characterData = [
    {
      title: "King Ehlk",
      subtitle: "Male, Hare",
      image: placeholderImg,
      bodyTable: [
        { label: "Nationality", value: "Helderian" },
        { label: "Role", value: "King" },
        { label: "Traits", value: "Quietly obsessive, half-mystic in temperament" },
      ],
      sectionTitle: "Backstory",
      body2: "To be discovered...",
    },
    {
      title: "King Fhogee",
      subtitle: "Male, Hare",
      image: placeholderImg,
      bodyTable: [
        { label: "Nationality", value: "Helderian" },
        { label: "Role", value: "King" },
        { label: "Traits", value: "Commanding, proud. Believes fully in imperial destiny. Pragmatic tactician." },
      ],
      sectionTitle: "Backstory",
      body2: "Unknown.",
    },
    {
      title: "Pelcran",
      subtitle: "Male, Goat",
      image: placeholderImg,
      bodyTable: [
        { label: "Nationality", value: "Hiugbonian" },
        { label: "Role", value: "Legendary rebel from the Age of Resistance." },
        { label: "Traits", value: "Bold, daring, smart." },
        { label: "Status", value: "Mythic ancestor of pirate identity." },
      ],
      sectionTitle: "Backstory",
      body2: "Unknown."
    },
    {
      title: "Queen Olmek",
      subtitle: "Female, Hare",
      image: placeholderImg,
      bodyTable: [
        { label: "Nationality", value: "Helderian" },
        { label: "Role", value: "Queen" },
        { label: "Traits", value: "Intelligent, inquisitive." },
      ],
      sectionTitle: "Backstory",
      body2: "To be discovered...",
    },
  ];

  return (
    <PageWrapper>
      <div className="relative">

        {/* Fixed Close Button */}
        <div className="fixed top-[21px] right-[5%] md:right-[12.5%] z-[60] safe-top safe-right">
          <XButton onClick={() => navigate("/foundations")} />
        </div>

        <Header title="Characters" />

        <main>

          {/* First h2 — spacing matches reference */}
          <h2 className="font-heading text-h2 text-primaryText mb-4 md:text-h2-md lg:text-h2-lg mt-0">
            Pelcran Crews
          </h2>

          <div className="mb-[15px]">
            <Card
              title="The Disgrace"
              showSubtitle={false}
              image={<img src={disgraceflagImg} alt="The Disgrace" className={imgClass} />}
              onClick={() => navigate("/disgrace")}
            />
          </div>

          <div className="mb-[15px]">
            <Card
              title="The Alaric’s Oath"
              showSubtitle={false}
              image={<img src={alaricsoathflagImg} alt="Alaric’s Oath" className={imgClass} />}
              onClick={() => navigate("/alaricsoath")}
            />
          </div>

          <Card
            title="The Sunken Chest"
            showSubtitle={false}
            image={<img src={sunkenchestflagImg} alt="The Sunken Chest" className={imgClass} />}
            onClick={() => navigate("/sunkenchest")}
          />

          {/* Other Characters section */}
          <h2 className="font-heading text-h2 text-primaryText mb-4 md:text-h2-md lg:text-h2-lg mt-[24px]">
            Other Characters
          </h2>

          <div className="flex flex-wrap gap-4 mb-10">
            {characterData.map((char, idx) => (
              <MiniCard
                key={idx}
                title={char.title}
                img={char.image}
                onClick={() => setActiveCharacter(char)} // 3️⃣ Show popup
              />
            ))}
          </div>  

        </main>

      </div>

      {/* 4️⃣ Popup Window with Character Info */}
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

export default Characters;
