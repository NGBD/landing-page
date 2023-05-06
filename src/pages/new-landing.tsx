import { useRouter } from 'next/router';
import React, { useState } from 'react';
import LaAnh from '../components/LandingPage/NewLanding/LaAnh';


function newlanding(props) {
  const [Menushowing, setMenuShowing] = useState(false)
  const [Youtubeshowing, setYoutubeshowing] = useState(false)
  const router = useRouter()
  console.log(123, router)


  return (
    <div>
      <div className="relative w-screen h-screen overflow-hidden">
        <img src="/images/rain/7.jpeg" alt="background"
          className="absolute top-0 left-0 object-cover w-screen h-screen m-auto" />
        <div className="relative z-10 flex flex-col items-center justify-center w-screen h-screen">
          <div className="cursor-pointer" >
            <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1216_671)" fill="#fff">
                <path d="M65 130c35.898 0 65-29.102 65-65C130 29.1 100.898 0 65 0 29.102 0 0 29.102 0 65c0 35.899 29.102 65 65 65zm0-119.6c30.106 0 54.6 24.494 54.6 54.6 0 30.105-24.494 54.6-54.6 54.6-30.105 0-54.6-24.495-54.6-54.6 0-30.106 24.492-54.6 54.6-54.6z">
                </path>
                <path d="M94.912 68.356c2.584-1.492 2.584-5.225 0-6.717L73.52 49.281 52.127 36.924c-2.583-1.493-5.815.373-5.815 3.359v49.431c0 2.986 3.23 4.852 5.815 3.36L73.52 80.715l21.392-12.36z">
                </path>
              </g>
            </svg>
          </div>
          <div className="">
            <div
              className="   my-auto fixed top-[50px] md:top-[50px] bottom-[50px] left-[20px] md:left-[50px] h-[80vh] md:h-[90vh] w-[90vw] md:w-[300px] rounded-md">
              <div className="">
                <div className="mt-[30px] ml-[28px]" onClick={() => setMenuShowing(true)}>
                  <button>
                    <svg width="23" height="23" viewBox="0 0 23 23">
                      <path fill="transparent" stroke-width="3" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" d="M 2 2.5 L 20 2.5">
                      </path>
                      <path fill="transparent" stroke-width="3" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" d="M 2 9.423 L 20 9.423" opacity="1">
                      </path>
                      <path fill="transparent" stroke-width="3" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" d="M 2 16.346 L 20 16.346">
                      </path>
                    </svg>
                  </button>
                </div>
                {Menushowing === true && <div
                  className="bg-black text-white  border  border-white border-opacity-20  my-auto fixed top-[50px] md:top-[50px] bottom-[50px] left-[20px] md:left-[50px] h-[80vh] md:h-[90vh] w-[90vw] md:w-[300px] rounded-md"
                  style={{ zIndex: '99' }}>
                  <div className="">
                    <div className="mt-[30px] ml-[28px] " onClick={() => setMenuShowing(false)}>
                      <button>
                        <svg width="23" height="23" viewBox="0 0 23 23">
                          <path fill="transparent" stroke-width="3" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" d="M 3 16.5 L 17 2.5">
                          </path>
                          <path fill="transparent" stroke-width="3" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" d="M 2 9.423 L 20 9.423" opacity="0">
                          </path>
                          <path fill="transparent" stroke-width="3" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" d="M 3 2.5 L 17 16.346">
                          </path>
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-col h-[70vh]  md:h-auto">
                      <div className="h-[1px] w-full bg-white bg-opacity-30 mt-7 md:mt-10">
                      </div>
                      <div className="px-5 mt-3 text-xl font-bold"
                      >Sound effect
                      </div>
                      <div className="w-full" >
                        <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/">
                          <p className="text-base text-center text-white">Rainy
                          </p>
                        </a>
                      </div>
                      <div className="w-full" >
                        <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/">
                          <p className="text-base text-center text-white">Forest
                          </p>
                        </a>
                      </div>
                      <div className="w-full" >
                        <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/">
                          <p className="text-base text-center text-white">Camfire crackling
                          </p>
                        </a>
                      </div>
                      <div className="w-full" >
                        <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/">
                          <p className="text-base text-center text-white">Waterfall
                          </p>
                        </a>
                      </div>
                      <div className="h-[1px] w-full bg-white bg-opacity-30 mt-7 md:mt-10"
                      >
                      </div>
                      <div className="px-5 mt-5 text-xl font-bold"
                      >You may like
                      </div>
                      <div className="w-full"  >
                        <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/watch?v=q8AzTS4Yq3I">
                          <p className="text-base text-center text-white ">[Vietsub] Là anh - Mộng Nhiên
                          </p>
                        </a>
                      </div>
                      <div className="w-full" >
                        <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/watch?v=WgTMeICssXY">
                          <p className="text-base text-center text-white">Ruth B. - Dandelions
                          </p>
                        </a>
                      </div>
                      <div className="w-full" >
                        <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/watch?v=ZpGlNIItm4E">
                          <p className="text-base text-center text-white">Giấc Mơ Có Thật | Lệ Quyên
                          </p>
                        </a>
                      </div>
                      <div className="w-full"  >
                        <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/watch?v=SNES5Y-tYxM">
                          <p className="text-base text-center text-white">BINZ - OK (Official Music Video)
                          </p>
                        </a>
                      </div>
                      <div className="w-full" >
                        <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/watch?v=4CleuAo70DM">
                          <p className="text-base text-center text-white">TÌNH NHÂN ƠI - ORANGE Ft BINZ
                          </p>
                        </a>
                      </div>
                      <div className="w-full" >
                        <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/watch?v=XdBsAXOxYfo">
                          <p className="text-base text-center text-white">TOULIVER X BINZ - THEY SAID
                          </p>
                        </a>
                      </div>
                      <div className="w-full" >
                        <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/watch?v=M8U7PR6fQNA">
                          <p className="text-base text-center text-white">NHẠT - PHAN MẠNH QUỲNH
                          </p>
                        </a>
                      </div>
                      <div className="w-full" >
                        <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/watch?v=pcKR0LPwoYs">
                          <p className="text-base text-center text-white">Stay With Me
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>}
                {/* < MenuPopUp /> */}
              </div>
            </div>
          </div>
          <input className="mt-5 hover:custom-range-input" type="range" min="0" max="100" value="100" />

          <div className="mt-5 text-center text-white ">
            <p className="text-[40px] md:text-[55px] ">
              <span className="text-[55px] md:text-[70px]">R</span>ainy&nbsp;<span className="text-[55px] md:text-[70px]">M</span>ood</p>
            <p>Sleep, study, and relax with the sound of rain.</p>
          </div>
          <audio className="hidden" id="audioplayer">


            <source src="/audio/rainy.mp3" /></audio>
          <LaAnh />
          <div className="fixed cursor-pointer bottom-5 right-5">
            <div className="">
              <div className="flex items-center w-full gap-3 text-xl text-white text-s " onClick={() => setYoutubeshowing(true)} >Mix with Youtube
                <svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M55.953 6.259a7.158 7.158 0 00-5.035-5.035C46.448 0 28.565 0 28.565 0S10.682 0 6.212 1.176c-2.4.66-4.377 2.636-5.036 5.083C0 10.729 0 20 0 20s0 9.318 1.176 13.741a7.158 7.158 0 005.036 5.035C10.729 40 28.565 40 28.565 40s17.882 0 22.353-1.176a7.158 7.158 0 005.035-5.036c1.176-4.47 1.176-13.74 1.176-13.74s.047-9.319-1.176-13.79z" fill="red">
                  </path><path d="M22.871 11.43v17.13l14.87-8.566-14.87-8.564z" fill="#fff">
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Youtubeshowing === true && <div
        className="absolute inset-12 overflow-auto px-5 pb-5 justify-center z-[999] rounded-xl md:w-2/3 md:max-h-[80%] m-auto bg-[#010613] "
      // style="transform: none;"
      >
        <div
          className="text-white">
          <div
            className="sticky top-0 pt-5 pb-2 left-0 right-0 flex items-center bg-[#010613] justify-end" onClick={() => setYoutubeshowing(false)}>
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
          <div>
            <p className="pb-2 text-xl font-semibold border-b border-white">How to make a RainyMood + YouTube Mix
            </p>
            <p className="mt-2 text-xl font-semibold">Follow these steps:
            </p>
            <p className="mt-2">Step 1: Find something you like on&nbsp;
              <a className="underline outline-none underline-offset-4" target="_blank" href="https://www.youtube.com/">Youtube
              </a>.
            </p>
            <p className="mt-2">Step 2: Locate the YouTube URL in the address bar. Here's an example:
            </p>
            <img src="/images/rain/step1.png" alt="step1" className="mt-2 rounded-xl" />
            <p className="mt-2">Step 3: Change the beginning of the URL <br /> From this:
            </p>
            <img src="/images/rain/step2.png" alt="step2" className="mt-2 rounded-xl" />
            <div className="flex mt-2">Into this: (
              <div className="">
                <div className="p-[2px] text-[#5fe53a] flex items-center hover:underline bg-transparent rounded cursor-pointer">Copy the URL&nbsp;
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.4" x="4" y="2" width="12.4308" height="17.0923" rx="2" fill="#5fe53a">
                    </rect>
                    <rect x="7.10767" y="5.10767" width="12.4308" height="17.0923" rx="2" fill="#5fe53a">
                    </rect>
                  </svg>
                </div>
              </div>)
            </div>
            <img src="/images/rain/step3.png" alt="step3" className="mt-2 rounded-xl" />
            <p className="mt-2">Then press Enter!
            </p>
            <p className="mt-2">Step 4: Share the new URL on Facebook and Twitter!
            </p>
            <p className="mt-5">***Tip: If you want your song to repeat? <br /> Right click on the video and select “Loop“ (Vòng lặp)
            </p>
            <img src="/images/rain/tip.png" alt="tip" className="mt-2 rounded-xl" />
          </div>
        </div>
      </div>}

    </div>
  );
}

export default newlanding;
