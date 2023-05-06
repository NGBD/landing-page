import React from 'react';
import SubFooter from '../components/LandingPage/NewLanding/LamLaiCuocDoi/SubFooter';
import SubHero from '../components/LandingPage/NewLanding/LamLaiCuocDoi/SubHero';

import SubMainNav from '../components/LandingPage/NewLanding/LamLaiCuocDoi/SubMainNav';
import SubPartner from '../components/LandingPage/NewLanding/LamLaiCuocDoi/SubPartner';
import SubPTE from '../components/LandingPage/NewLanding/LamLaiCuocDoi/SubPTE';
import SubRoadMap from '../components/LandingPage/NewLanding/LamLaiCuocDoi/SubRoadMap';
import SubToken from '../components/LandingPage/NewLanding/LamLaiCuocDoi/SubToken';
import SubTribe from '../components/LandingPage/NewLanding/LamLaiCuocDoi/SubTribe';

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
