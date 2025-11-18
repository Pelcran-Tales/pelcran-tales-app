import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import MessageButton from "../components/MessageButton";

const Logbook = () => {
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
        <MessageButton onClick={() => console.log("Message button clicked!")} />
      </div>
    </PageWrapper>
  );
};

export default Logbook;