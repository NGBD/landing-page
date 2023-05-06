import React, { useEffect } from "react"
import Link from "next/link"
import { TelegramIconMobile } from "./icons/TelegramIcon"
import { TwitterIconMobile } from "./icons/TwitterIcon"
import { FacebookIconFooter } from "./icons/FacebookIcon"
import { YoutubeIconMobile } from "./icons/YoutubeIcon"
import { TiktokIconMobile } from "./icons/TiktokIcon"
import { DiscordIconMobile } from "./icons/DiscordIcon"

function Footer(props) {
  return (
    <div className="bg-black pt-12 pb-[160px] md:pt-[85px] md:pb-[200px] font-georama">
      <div className="max-w-[1428px] mx-auto px-4 flex flex-col items-center">
        <p
          data-aos="fade-up"
          className="text-5xl md:text-[72px] text-center uppercase font-evilEmpire"
        >
          Demole.io
        </p>
        <p
          data-aos="fade-up"
          className="text-left text-sm md:text-[20px] font-bold"
        >
          Defi Monster Legends
        </p>
        {/* <div
          data-aos="fade-up"
          className="max-w-[754px] w-full flex flex-col justify-center md:flex-row md:justify-between mt-7"
        >
          <Item>Summon</Item>
          <Item>Marketplace</Item>
          <Item>Stake</Item>
          <Item>Pitch Deck</Item>
          <Item>Demole-wiki</Item>
        </div> */}

        <div
          data-aos="fade-up"
          className="flex justify-between social-footer w-full max-w-[239px] mt-12 md:mt-24"
        >
          <TelegramIconMobile className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]" />

          <TwitterIconMobile className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]" />

          <FacebookIconFooter className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]" />

          <YoutubeIconMobile className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]" />

          <TiktokIconMobile className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]" />

          <DiscordIconMobile className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]" />
        </div>
        <p data-aos="fade-up" className="text-[8px] mt-4 md:text-sm opacity-60">
          Email: business@demole.io
        </p>
        <p data-aos="fade-up" className="mt-1 text-[8px] md:text-sm opacity-50">
          ©2021 DEMOLE.IO. ALL RIGHTS RESERVED.
        </p>
        {/* <div
          data-aos="fade-up"
          className="flex font-bold text-[8px] md:text-sm opacity-[65%] uppercase items-center mt-1"
        >
          <p className="cursor-pointer hover:underline">Privacy</p>
          <p className="pl-2 ml-2 border-l-2 border-white cursor-pointer hover:underline">
            Legal
          </p>
          <p className="pl-2 ml-2 border-l-2 border-white cursor-pointer hover:underline">
            Terms
          </p>
          <p className="pl-2 ml-2 border-l-2 border-white cursor-pointer hover:underline">
            Cookie Policy
          </p>
          <p className="pl-2 ml-2 border-l-2 border-white cursor-pointer hover:underline">
            Cookie Setting
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default Footer

function Item({ href = "/", children, className = "" }) {
  return (
    <div className={className}>
      <Link href={href}>
        <a
          target="_blank"
          className="flex justify-center w-full text-center hover:text-white hover:underline md:text-right"
        >
          {children}
        </a>
      </Link>
    </div>
  )
}
