import React, { useState } from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import Card from '../components/Card';
import { useNavigate } from "react-router-dom";
import MessageButton from "../components/MessageButton";
import PopupWindow from "../components/PopupWindow";
import PrimaryButton from "../components/PrimaryButton";

// Import the images
import loreImg from '../assets/lore.jpg';
import hiugbonmapImg from '../assets/hiugbonmap.jpg';
import charactersImg from '../assets/characters.jpg';

const Foundations = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false); // track if message was sent

  const handleSend = async () => {
    if (!message.trim()) return;

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwK_nb9YuEJ68Ly1mb11OqueBZ0_nqRcgikWJ-ilJSh2KAl6jB2S_v3DL9amFxmmYhc/exec",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ message }),
        }
      );

      const data = await response.json();
      console.log(data);

      setMessage("");     // clear textarea
      setIsSent(true);    // show thank you message
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again.");
    }
  };

  return (
    <PageWrapper>
      <Header title="Foundations" />

      <main>

      <div className="mb-[15px]">  
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
        </div>

        <div className="mb-[15px]">
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
        </div>

        {/* CHARACTERS CARD — navigates to /characters */}
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
          onClick={() => navigate("/characters")}
        />

      </main>

      {/* Fixed MessageButton */}
      <div className="fixed bottom-[93px] right-[5%] md:right-[12.5%] z-50 safe-bottom safe-right">
        <MessageButton onClick={() => {
          setIsPopupOpen(true);
          setIsSent(false); // reset thank you message when reopening
        }} />
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <PopupWindow onClose={() => setIsPopupOpen(false)}>
          <div className="p-4">
            <h2 className="font-heading text-h2 mb-[15px]">
              Message in a Bottle
            </h2>
            <p className="text-body text-bodyText mb-[24px]">
              Pelcran Tales is a fantasy world of pirate animals, the Pelcrans — a story of resistance, identity, and survival across a contested archipelago. 
              <br /><br />
              Use the space below to share your thoughts. Send your bottle drifting and sail on… the sea will carry it.<br /> No email or personal data is collected unless you choose to include it in your message.
            </p>

            {!isSent ? (
              <>
                <textarea
                  className="w-full bg-[#FDFBF7] placeholder-[#826E49] rounded-[6px] p-[9px] border border-transparent focus:border-[#826E49] focus:outline-none text-body text-bodyText mb-[15px] resize-y"
                  rows={5}
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="flex justify-end">
                  <PrimaryButton
                    label="Send"
                    onClick={handleSend}
                    disabled={!message.trim()}
                    className={`${!message.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                </div>
              </>
            ) : (
              <p className="font-heading text-h6 text-[#41644A]">
                Message sent! Thanks 😊
              </p>
            )}
          </div>
        </PopupWindow>
      )}
    </PageWrapper>
  );
};

export default Foundations;

