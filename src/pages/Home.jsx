import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import placeholderImg from '../assets/placeholder.jpg';
import MessageButton from "../components/MessageButton";
import PrimaryButton from "../components/PrimaryButton";
import PopupWindow from "../components/PopupWindow";
import Card from '../components/Card';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const firstSectionRef = useRef(null);
  const [bgTop, setBgTop] = useState(0);

  useEffect(() => {
    const updateBgTop = () => {
      if (firstSectionRef.current) {
        const rect = firstSectionRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;
        setBgTop(rect.bottom + scrollTop + 24); // 24px gap
      }
    };

    updateBgTop();
    window.addEventListener('resize', updateBgTop);
    return () => window.removeEventListener('resize', updateBgTop);
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

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
      setMessage("");
      setIsSent(true);
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again.");
    }
  };

  return (
    <PageWrapper>
      {/* Background dynamically positioned */}
      <div
        className="absolute left-0 w-full bg-[#F4EAD5]"
        style={{ top: `${bgTop}px`, bottom: 0 }}
      />

      <Header title="Pelcran Tales" />

      <main>
        {/* First section we measure */}
        <div ref={firstSectionRef}>
          <h2 className="font-heading text-h2 text-primaryText mb-4 md:text-h2-md lg:text-h2-lg">
            Latest Log-Entry
          </h2>

          <div className="mb-[15px]">
            <Card
              title="Episode Title"
              subtitle="Log-Entry 1"
              image={
                <img
                  src={placeholderImg}
                  alt="Log-Entry 1"
                  className="w-full h-full object-cover rounded-md"
                />
              }
              onClick={() => navigate("/log-entry1")}
            />
          </div>

          <p className="font-body text-body text-bodyText">
            For previous Log-Entries go to{" "}
            <span
              className="underline"
              style={{ color: "#642126", cursor: "pointer" }}
              onClick={() => navigate("/logbook")}
            >
              Logbook
            </span>.
          </p>
        </div>

        {/* Second section */}
        <div className="relative mt-6">
          <h2 className="font-heading text-h2 text-primaryText pt-6 mb-4 md:text-h2-md lg:text-h2-lg">
            First time here?
          </h2>

          <p className="font-body text-body text-bodyText">
            To follow the Log-Entries with clarity, first learn the forces that shaped these waters... Go to{" "}
            <span
              className="underline"
              style={{ color: "#642126", cursor: "pointer" }}
              onClick={() => navigate("/foundations")}
            >
              Foundations
            </span>.
          </p>
        </div>
      </main>

      {/* Fixed MessageButton */}
      <div className="fixed bottom-[93px] right-[5%] md:right-[12.5%] z-50 safe-bottom safe-right">
        <MessageButton
          onClick={() => {
            setIsPopupOpen(true);
            setIsSent(false);
          }}
        />
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

export default Home;
