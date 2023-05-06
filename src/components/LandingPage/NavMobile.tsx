import React, { useState } from 'react';
import ClosePopupIcon from '../icons/ClosePopupIcon';
// import ClosePopupIcon from '../../../icons/ClosePopupIcon';

function NavMobile(props) {
  // const [navHidden, setnavHidden] = useState(false)
  // console.log(navHidden)
  return (
    <div className="" style={{
      position: 'fixed',
      top: "0",
      right: "0",
      backgroundColor: "rgb(71, 15, 157)",
      transformOrigin: "50% -30px",
      height: "100vh",
      width: "240px",
      overflowY: "auto",
      zIndex: 99,
      pointerEvents: "all",
      // clipPath: "circle(2200px at 40px 40px)",
    }}

    >

      <div className="mt-4">

        <div className="flex flex-col items-center justify-center w-full mb-10">
          <div className="w-full opacity-100 translate-y-[50px] translate-z-0">

            <div className="flex items-center justify-end text-xs cursor-pointer font-primary hover:bg-black hover:bg-opacity-5 text-gray" >
              <ClosePopupIcon />
            </div>

            <div className="flex items-center px-2 py-4 text-xs cursor-pointer font-primary hover:bg-black hover:bg-opacity-5 text-gray">
              <p className="ml-3 text-white uppercase">Summon</p>
            </div>

            <div className="flex items-center px-2 py-4 text-xs cursor-pointer font-primary hover:bg-black hover:bg-opacity-5 text-gray">
              <p className="ml-3 text-white uppercase">Market Place</p>
            </div>

            <div className="flex items-center px-2 py-4 text-xs cursor-pointer font-primary hover:bg-black hover:bg-opacity-5 text-gray">
              <p className="ml-3 text-white uppercase">MonsterNest</p>
            </div>

            <div className="flex items-center px-2 py-4 text-xs cursor-pointer font-primary hover:bg-black hover:bg-opacity-5 text-gray">
              <p className="ml-3 text-white uppercase">Training Ground</p>
            </div>
          </div>


        </div>
      </div>
      {/* {navHidden === true && <NavMobile className="hidden " />} */}
    </div>
  );
}

export default NavMobile;

