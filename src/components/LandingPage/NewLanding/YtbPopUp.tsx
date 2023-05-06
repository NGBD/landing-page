import React from 'react';

function YtbPopUp(props) {
  return (



    <div>
      <p className="pb-2 text-xl font-semibold border-b border-white">How to make a RainyMood + YouTube Mix
      </p>
      <p className="mt-2 text-xl font-semibold">Follow these steps:
      </p>
      <p className="mt-2">Step 1: Find something you like on&nbsp;
        <a className="underline outline-none cursor-pointer underline-offset-4" target="_blank" href="https://www.youtube.com/">Youtube
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



  );
}

export default YtbPopUp;
