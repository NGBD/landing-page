import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import LaAnh from './LaAnh';
import MenuBtn from './MenuBtn';
import MenuBtn1 from './MenuBtn1';
import MenuPopUp from './MenuPopUp';
import PlayBtn from './PlayBtn';
import YtbPopUp from './YtbPopUp';



function Watch(props) {
  const [menuShowing, setMenuShowing] = useState(false)
  const [youtubeShowing, setYoutubeShowing] = useState(false)
  const router = useRouter()
  console.log(router)


  return (
    <div>
      <div className="relative w-screen h-screen overflow-hidden">
        <img src="/images/rain/7.jpeg" alt="background"
          className="absolute top-0 left-0 object-cover w-screen h-screen m-auto" />
        <div className="relative z-10 flex flex-col items-center justify-center w-screen h-screen">
          <PlayBtn />
          <div
            className=" my-auto fixed top-[50px] md:top-[50px] bottom-[50px] left-[20px] md:left-[50px] h-[80vh] md:h-[90vh] w-[90vw] md:w-[300px] rounded-md">
            <div className="max-h-8 max-w-[32px]">

              <div className='' onClick={() => setMenuShowing(true)}>
                <MenuBtn1 />
              </div>

              {menuShowing === true &&

                <div
                  className="bg-black text-white  border z-50 border-white border-opacity-20 text-shadow my-auto fixed top-[50px] md:top-[50px] bottom-[50px] left-[20px] md:left-[50px] h-[80vh] md:h-[90vh] w-[90vw] md:w-[300px] rounded-md"
                >
                  <div>

                    <div className="max-h-8 max-w-[32px]" onClick={() => setMenuShowing(false)}><MenuBtn />
                    </div>

                    <MenuPopUp />
                  </div>

                </div>}

            </div>

          </div>

          <input className="mt-5 hover:custom-range-input" type="range" min="0" max="100" value="100" />

          <div className="mt-5 text-center text-white ">
            <p className="text-[40px] md:text-[55px] ">
              <span className="text-[55px] md:text-[70px]">R</span>ainy<span className="text-[55px] md:text-[70px]">M</span>ood</p>
            <p>Sleep, study, and relax with the sound of rain.</p>
          </div>
          <audio className="hidden" id="audioplayer">


            <source src="/audio/rainy.mp3" /></audio>
          <LaAnh />
          <div className="fixed cursor-pointer bottom-5 right-5">

            <div className="flex items-center w-full gap-3 text-xl text-white text-shadow text-s " onClick={() => setYoutubeShowing(true)} >Mix with Youtube
              <svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.953 6.259a7.158 7.158 0 00-5.035-5.035C46.448 0 28.565 0 28.565 0S10.682 0 6.212 1.176c-2.4.66-4.377 2.636-5.036 5.083C0 10.729 0 20 0 20s0 9.318 1.176 13.741a7.158 7.158 0 005.036 5.035C10.729 40 28.565 40 28.565 40s17.882 0 22.353-1.176a7.158 7.158 0 005.035-5.036c1.176-4.47 1.176-13.74 1.176-13.74s.047-9.319-1.176-13.79z" fill="red">
                </path>
                <path d="M22.871 11.43v17.13l14.87-8.566-14.87-8.564z" fill="#fff">
                </path>
              </svg>
            </div>

          </div>
        </div>
      </div>
      {youtubeShowing === true && <div
        className="absolute inset-12 overflow-auto px-5 pb-5 justify-center z-[999] rounded-xl md:w-2/3 md:max-h-[80%] m-auto bg-[#010613] "

      >
        <div
          className="text-white">
          <div
            className="sticky top-0 pt-5 pb-2 left-0 right-0 flex items-center bg-[#010613] justify-end" onClick={() => setYoutubeShowing(false)}>
            <div
              className="cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8">
                <path opacity="0.4" d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2z" fill="#EB5757">
                </path>
                <path d="M15.016 13.77l-1.779-1.777 1.778-1.779a.874.874 0 000-1.237.872.872 0 00-1.237 0L12 10.753l-1.779-1.78a.877.877 0 00-1.238 0 .877.877 0 000 1.239l1.78 1.78-1.776 1.774a.874.874 0 101.237 1.239L12 13.229l1.78 1.78a.876.876 0 001.237-1.238" fill="#EB5757">
                </path>
              </svg>
            </div>
          </div>
          < YtbPopUp />

        </div>
      </div>
      }

    </div >
  );
}

export default Watch;
