import React, { useState } from 'react';
import ClosePopupIcon from '../../../icons/ClosePopupIcon';
import NavMobile from './NavMobile';

function SubMainMobile(props) {
  const [navShowing, setnavShowing] = useState(false)


  return (

    <div className="relative" >

      <div className="w-full"
        onClick={() => setnavShowing(true)}
      >

        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h20v2H0V0zm5 5h15v2H5V5zm6.25 5H20v2h-8.75v-2z" fill="#fff">
          </path>
        </svg>

      </div>

      {navShowing === true && <div className="" style={{
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

      }}
      >
        <div className="mt-4">
          <div className="flex flex-col items-center justify-center w-full mb-10">
            <div className="w-full opacity-100 translate-y-[50px] translate-z-0">

              <div className="flex items-center justify-end text-xs cursor-pointer font-primary hover:bg-black hover:bg-opacity-5 text-gray">

                <div className="absolute -top-10 w-[40px] h-[40px]" onClick={() => setnavShowing(false)}>

                  <svg width="23" height="23" viewBox="0 0 23 23">
                    <path fill="transparent" stroke-width="3" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" d="M 3 16.5 L 17 2.5">
                    </path>
                    <path fill="transparent" stroke-width="3" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" d="M 2 9.423 L 20 9.423" opacity="0">
                    </path>
                    <path fill="transparent" stroke-width="3" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" d="M 3 2.5 L 17 16.346">
                    </path>
                  </svg>
                </div>

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
      </div>}




    </div>

  );
}

export default SubMainMobile;
