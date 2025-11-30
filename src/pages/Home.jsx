// src/pages/Home.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import placeholderImg from '../assets/placeholder.jpg';
import MessageButton from "../components/MessageButton";
import PrimaryButton from "../components/PrimaryButton";
import PopupWindow from "../components/PopupWindow";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
      <Header title="New Log-Entry" />

      <main>

        <h2 className="font-heading text-h2 text-primaryText mb-4 md:text-h2-md lg:text-h2-lg">
          Pelcran Tales log-entries are coming soon!
        </h2>

        <img
          src={placeholderImg}
          alt="Placeholder"
          className="w-full md:w-64 md:float-left md:mr-6 mb-4 rounded-lg shadow-md"
        />

        <p className="font-body text-body text-bodyText mb-4">
          Sed eros nisl, accumsan nec arcu a, sodales finibus odio. Nunc congue neque in pulvinar volutpat. Duis lacus justo, malesuada eu justo vestibulum, tincidunt tempus lorem. Curabitur fringilla pellentesque est, a hendrerit turpis pretium quis. Aenean eu metus ullamcorper, auctor tellus quis, lacinia enim. Suspendisse nec lectus aliquam, commodo nisi vel, feugiat nulla. Praesent velit turpis, sollicitudin id quam id, tempor ullamcorper dolor. Nullam leo est, placerat finibus porta sed, blandit id nulla. Suspendisse malesuada, metus vitae dignissim consequat, ante sapien porta massa, quis laoreet leo quam vitae diam. Curabitur sed rhoncus massa. Vivamus vel lectus lorem. Vestibulum leo dolor, tempor ac nunc quis, mollis pellentesque leo. Quisque mattis leo justo, vitae fermentum diam tempor at. Integer ut pharetra arcu.
        </p>

        <p className="font-body text-body text-bodyText">
          Donec eget efficitur quam. Maecenas eu sollicitudin lorem. In nec fermentum justo, non bibendum lacus. Nam at pretium sem, non congue lacus. Sed ullamcorper, nibh vitae semper elementum, massa mi tristique turpis, a eleifend mauris ante sed tellus. In feugiat ligula at est tempor, tempor accumsan nisi elementum. Integer ullamcorper porttitor nisi sed laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis pellentesque velit vel nisl tincidunt interdum. Fusce vel magna quam. Nam id consectetur sem. Nulla vitae mi at sem semper ornare. Curabitur eget mollis massa. Suspendisse porttitor, dolor sed semper tincidunt, ligula diam vehicula velit, ac posuere eros velit eu arcu. Ut arcu lorem, bibendum eu est quis, accumsan consectetur mi.
        </p>

        <div className="clear-both" />

        <div className="mt-[15px] mb-[0px]">
          <PrimaryButton
            label="PREVIOUS ENTRIES"
            rightIcon={ArrowRight}
            onClick={() => navigate("/logbook")}
          />
        </div>
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

export default Home;
