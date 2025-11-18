import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import Card from '../components/Card';
import { useNavigate } from "react-router-dom";
import MessageButton from "../components/MessageButton";

// Import the images
import loreImg from '../assets/lore.jpg';
import hiugbonmapImg from '../assets/hiugbonmap.jpg';
import charactersImg from '../assets/characters.jpg';

const Foundations = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Header title="Foundations" />

      <main className="flex flex-col gap-[15px] mt-4">
        
        {/* LORE CARD → navigates to /lore */}
        <Card
          title="Lore & History"
          showSubtitle={false}
          image={
            <img
              src={loreImg}
              alt="Lore"
              className="w-full h-full object-cover rounded-md"
            />
          }
          onClick={() => navigate("/lore")}
        />

        {/* MAP CARD — navigates to /map */}
        <Card
          title="Map"
          showSubtitle={false}
          image={
            <img
              src={hiugbonmapImg}
              alt="Hiugbon Archipelgo Map"
              className="w-full h-full object-cover rounded-md"
            />
          }
          onClick={() => navigate("/map")}
        />

        {/* CHARACTERS CARD — link later if needed */}
        <Card
          title="Characters"
          showSubtitle={false}
          image={
            <img
              src={charactersImg}
              alt="Characters"
              className="w-full h-full object-cover rounded-md"
            />
          }
        />

      </main>

      {/* Fixed MessageButton */}
      <div className="fixed bottom-[93px] right-[21px] z-50">
        <MessageButton />
      </div>
    </PageWrapper>
  );
};

export default Foundations;

