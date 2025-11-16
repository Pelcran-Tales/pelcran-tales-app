import React from 'react';
import Header from '../components/Header';

const Logbook = () => {
  return (
    <div>
      <Header title="Logbook" />

      {/* Add top padding to prevent content being hidden behind fixed header */}
      <main className="pt-16">
        <p>Welcome to the Logbook page!</p>
      </main>
    </div>
  );
};

export default Logbook;