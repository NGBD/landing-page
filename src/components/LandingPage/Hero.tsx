import React, { useEffect } from "react"
import OpenPopupBtn from "../icons/OpenPopupBtn"
import Link from "next/link"
import TelegramIcon from "../icons/TelegramIcon"
import TwitterIcon from "../icons/TwitterIcon"
import FacebookIcon from "../icons/FacebookIcon"
import YoutubeIcon from "../icons/YoutubeIcon"
import TiktokIcon from "../icons/TiktokIcon"
import DiscordIcon from "../icons/DiscordIcon"
import CommingSoon from "../CommingSoon"
import HeroVideoPopup from "./HeroVideoPopup"

function Hero(props) {
  return (
    <div
      // style={{
      //   backgroundImage: "url(/images/hero-bg.png)",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
      className="relative mt-[67px] md:mt-0"
      // className="hero-bg"
    >
      <video className="inset-0 object-cover w-full " muted loop autoPlay>
        <source src="/video/video-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute bottom-0 left-0 right-0 mx-auto">
        <div className="md:max-w-[56px] z-50 fixed top-40 right-3 md:top-[200px] md:left-[110px] flex flex-col max-h-[250px] md:max-h-[440px] h-full justify-between">
          <TelegramIcon
            data-aos="zoom-out-up"
            data-aos-delay="100"
            className="w-[40px] h-[40px] md:w-[59px] md:h-[59px]"
          />

          <TwitterIcon
            data-aos="zoom-out-up"
            data-aos-delay="200"
            className="w-[40px] h-[40px] md:w-[59px] md:h-[59px]"
          />

          <FacebookIcon
            data-aos="zoom-out-up"
            data-aos-delay="300"
            className="w-[40px] h-[40px] md:w-[59px] md:h-[59px]"
          />

          <YoutubeIcon
            data-aos="zoom-out-up"
            data-aos-delay="400"
            className="w-[40px] h-[40px] md:w-[59px] md:h-[59px]"
          />

          <TiktokIcon
            data-aos="zoom-out-up"
            data-aos-delay="500"
            className="w-[40px] h-[40px] md:w-[59px] md:h-[59px]"
          />

          <DiscordIcon
            data-aos="zoom-out-up"
            data-aos-delay="600"
            className="w-[40px] h-[40px] md:w-[59px] md:h-[59px]"
          />
        </div>
        <div className="flex flex-col items-center pt-[86px] pb-2 md:pb-16">
          {/* <img src="/images/hero-img.png" alt="hero-img" /> */}
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center text-white uppercase font-sansBlack text-base md:text-[45px]"
          >
            Make friends - earn together
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="hidden md:block mt-7"
          >
            <HeroVideoPopup />
          </div>
          <div className="max-w-[343px] md:max-w-[634px] w-full grid grid-cols-3 items-center md:grid-cols-3 gap-2 md:gap-6 mt-1 md:mt-6">
            <div data-aos="fade-up" data-aos-delay="100">
              <PrimaryBtn href="https://pancakeswap.finance/swap?outputCurrency=0x1c796c140de269e255372ea687ef7644bab87935">
                Buy $ DMLG
              </PrimaryBtn>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <CommingSoon>
                <PrimaryBtn>Play Game</PrimaryBtn>
              </CommingSoon>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              // className="flex justify-center col-span-2 md:col-auto"
            >
              <PrimaryBtn href="/Demole_PitchDeck.pdf">Pitch Deck</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

function PrimaryBtn({ children, href = "/", className = "" }) {
  return (
    <button
      style={{
        backgroundImage: "url(/images/btn-bg.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
      className={`md:pt-2 md:pb-4 pt-1 pb-3 max-w-[129px] text-center scale-95 hover:scale-100 smooth-tranform w-full md:max-w-[196px] text-base md:text-2xl text-blue font-sansBlack ${className}`}
    >
      <Link href={href}>
        <a target="_blank">{children}</a>
      </Link>
    </button>
  )
}
