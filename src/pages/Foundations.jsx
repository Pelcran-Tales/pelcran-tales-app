import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';

const Foundations = () => {
  return (
    <PageWrapper>
      <Header title="Foundations" />

      {/* Add top padding to prevent content being hidden behind fixed header */}
      <main className="pt-16">
        <p>Welcome to the Foundations page!</p>
      </main>
    </PageWrapper>
  );
};

export default Foundations;