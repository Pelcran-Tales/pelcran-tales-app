import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
      <Header title="New Log-Entry" />
      
      <main>
        <p>Welcome to the homepage!</p>
      </main>
    </PageWrapper>
  );
};

export default Home;