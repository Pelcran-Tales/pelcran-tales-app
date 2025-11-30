import React, { useState } from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import MessageButton from "../components/MessageButton";
import PopupWindow from "../components/PopupWindow";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Logbook = () => {
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
      <Header title="Logbook" />

      <main>
        {/* H2 subtitle */}
        <h2 className="font-heading text-h2 text-primaryText mb-4 md:text-h2-md lg:text-h2-lg">
          Pelcran Tales log-entries are coming soon!
        </h2>
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
              Pelcran Tales is a fantasy world of pirate animals, the Pelcrans — a story of resistance, identity, and survival across a contested Archipelago. 
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

export default Logbook;