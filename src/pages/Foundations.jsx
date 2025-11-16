import React from 'react';
import Header from '../components/Header';

const Foundations = () => {
  return (
    <div>
      <Header title="Foundations" />

      {/* Add top padding to prevent content being hidden behind fixed header */}
      <main className="pt-16">
        <p>Welcome to the Foundations page!</p>
      </main>
    </div>
  );
};

export default Foundations;