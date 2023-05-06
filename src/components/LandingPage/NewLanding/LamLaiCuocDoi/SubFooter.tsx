import React from 'react';
import { DiscordIconMobile } from '../../../icons/DiscordIcon';
import { FacebookIconFooter } from '../../../icons/FacebookIcon';
import { TelegramIconMobile } from '../../../icons/TelegramIcon';
import { TiktokIconMobile } from '../../../icons/TiktokIcon';
import { TwitterIconMobile } from '../../../icons/TwitterIcon';
import { YoutubeIconMobile } from '../../../icons/YoutubeIcon';


function SubFooter(props) {
  return (
    <div className="bg-black pt-12 pb-[160px] md:pt-[160px] md:pb-[200px] font-georama">
      <div className="max-w-[1428px] mx-auto px-4 flex flex-col items-center">
        <p

          className="text-5xl md:text-[72px] text-center uppercase font-evilEmpire"
        >
          Demole.io
        </p>
        <p

          className="text-left text-sm md:text-[20px] font-bold"
        >
          Defi Monster Legends
        </p>

        <div

          className="flex justify-between social-footer w-full max-w-[239px] mt-12 md:mt-24"
        >
          <TelegramIconMobile className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]" />

          <TwitterIconMobile className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]" />

          <FacebookIconFooter className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]" />

          <YoutubeIconMobile className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]" />

          <TiktokIconMobile className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]" />

          <DiscordIconMobile className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]" />
        </div>
        <p className="text-[8px] mt-4 md:text-sm opacity-60">
          Email: business@demole.io
        </p>
        <p className="mt-1 text-[8px] md:text-sm opacity-50">
          ©2021 DEMOLE.IO. ALL RIGHTS RESERVED.
        </p>

      </div>
    </div>
  );
}

export default SubFooter

function Item({ href = "/", children, className = "" }) {
  return (
    <div className={className}>

      <a
        target="_blank"
        className="flex justify-center w-full text-center hover:text-white hover:underline md:text-right"
      >
        {children}
      </a>

    </div>
  )
}
