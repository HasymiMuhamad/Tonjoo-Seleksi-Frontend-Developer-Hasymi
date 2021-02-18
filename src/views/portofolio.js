import React from 'react';
import AppHero from '../components/home/hero';
import AppFeature from '../components/home/feature/feature';



function AppPort() {
  return (
    <div className="main post-space">
      <AppHero/>
      <AppFeature/>
    </div>
  );
}

export default AppPort;