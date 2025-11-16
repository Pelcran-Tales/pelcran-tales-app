import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';

const Logbook = () => {
  return (
    <PageWrapper>
      <Header title="Logbook" />

      {/* Add top padding to prevent content being hidden behind fixed header */}
      <main className="pt-16">
        <p>Welcome to the Logbook page!</p>
      </main>
    </PageWrapper>
  );
};

export default Logbook;