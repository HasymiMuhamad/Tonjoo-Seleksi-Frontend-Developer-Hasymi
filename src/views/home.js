import React from 'react';
import AppHero from '../components/home/hero';
import AppFeature from '../components/home/feature/feature';


function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppFeature/>
    </div>
  );
}

export default AppHome;