import React from 'react';
import SubMainMobile from './SubMainMobile';


function SubMainNav(props) {
  return (

    <div className="bg-[#470F9D] absolute top-0 left-0 right-0 bg-opacity-100 md:bg-opacity-60 z-10 flex items-center justify-start w-full px-4 py-1 md:py-3">

      <div className="flex items-center justify-between w-full max-w-[1428px] mx-auto">
        <div className="md:relative">
          <img src="/logo.png" alt="logo" className="max-w-[90px] md:max-w-[180px] md:absolute md:-top-7 md:left-0" />
        </div>
        <div className="items-center md:flex">
          <div className="hidden md:flex">
            <div className="relative">
              <div className="flex px-2 py-4 mx-3">
                <p className="uppercase text-gradient-yellow font-primary">Summon</p>
              </div>

            </div>
            <div className="relative">
              <div className="flex px-2 py-4 mx-3">
                <p className="uppercase text-gradient-yellow font-primary">Market Place</p>
              </div>

            </div>
            <div className="relative">
              <div className="flex px-2 py-4 mx-3">
                <p className="uppercase text-gradient-yellow font-primary">MonsterNest</p>
              </div>

            </div>
            <div className="flex px-2 py-4 mx-3">
              <p className="text-white uppercase font-primary">Training Ground</p>
            </div>
          </div>


        </div>
      </div>
      <div className="flex items-center md:hidden">
        <div className="ml-3 md:hidden ">
          <SubMainMobile />
        </div>
      </div>
    </div>




  );
}

export default SubMainNav;
