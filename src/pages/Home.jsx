import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
      <Header title="New Log-Entry" />

      {/* Add top padding to prevent content being hidden behind fixed header */}
      <main className="pt-16">
        <p>Welcome to the homepage!</p>
      </main>
    <PageWrapper>
  );
};

export default Home;