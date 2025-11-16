import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header title="New Log-Entry" />

      {/* Add top padding to prevent content being hidden behind fixed header */}
      <main className="pt-16">
        <p>Welcome to the homepage!</p>
      </main>
    </div>
  );
};

export default Home;