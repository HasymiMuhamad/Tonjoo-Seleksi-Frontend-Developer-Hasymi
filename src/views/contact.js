import React from 'react';
import AppFaq from '../components/home/faq';
import AppGetContact from '../components/home/contact';



function AppContact() {
  return (
    <div className="main post-space">
      <AppFaq/>
      <AppGetContact/>
    </div>
  );
}

export default AppContact;