import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import XButton from "../components/XButton";
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
            <MiniCard 
            title="King Ehlk"
            img={placeholderImg} 
            onClick={() => {}} 
            />

            <MiniCard 
            title="King Fhogee"
            img={placeholderImg} 
            onClick={() => {}} 
            />

            <MiniCard 
            title="Pelcran"
            img={placeholderImg} 
            onClick={() => {}} 
            />

            <MiniCard 
            title="Queen Olmek"
            img={placeholderImg} 
            onClick={() => {}} 
            />
          </div>  

        </main>

      </div>
    </PageWrapper>
  );
};

export default Characters;
