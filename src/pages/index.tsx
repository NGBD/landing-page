import React from 'react';
import SubFooter from '../components/LandingPage/SubFooter';
import SubHero from '../components/LandingPage/SubHero';
import SubMainNav from '../components/LandingPage/SubMainNav';
import SubPartner from '../components/LandingPage/SubPartner';
import SubPTE from '../components/LandingPage/SubPTE';
import SubRoadMap from '../components/LandingPage/SubRoadMap';
import SubToken from '../components/LandingPage/SubToken';
import SubTribe from '../components/LandingPage/SubTribe';


function remake(props) {
  return (
    <div className='text-white' >
      <SubMainNav />
      <SubHero />
      <SubTribe />
      <div className="relative overflow-hidden long-bg"
        style={{
          backgroundImage: "url(/images/long-bg.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <SubPTE />
        <SubRoadMap />
        <SubToken />
        <SubPartner />
        <SubFooter />


      </div>
    </div>
  );
}

export default remake;
