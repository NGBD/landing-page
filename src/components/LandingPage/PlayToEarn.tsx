import React, { useEffect } from "react"
import Title from "./Title"

function PlayToEarn(props) {
  return (
    <div className="max-w-[1428px] mx-auto pt-9 md:pt-24 px-4">
      <Title>Play to earn</Title>

      <div className="grid grid-cols-6 mt-9 md:mt-16 md:grid-cols-3 gap-x-2 gap-y-7 md:gap-y-28 md:gap-x-14">
        <div data-aos="fade-up" className="col-span-2 md:col-span-1 ">
          <PlayToEarnItem
            icon="training-ground"
            title="Training ground"
            content="Let your monsters practice at the training ground to increase their level and $DMLG tokens even if you are not online"
          />
        </div>
        <div className="hidden m-auto md:block" data-aos="fade-up">
          <img
            src="/images/coin.png"
            alt="coin"
            className="hidden m-auto scale-95 md:block hover:scale-100 smooth-tranform"
          />
        </div>
        <div data-aos="fade-up" className="col-span-2 md:col-span-1 ">
          <PlayToEarnItem
            icon="world-bosses"
            title="World bosses"
            content="Accompany players around the world to defeat the World Boss and receive valuable rewards"
            className=""
          />
        </div>
        <div data-aos="fade-up" className="col-span-2 md:col-span-1 ">
          <PlayToEarnItem
            icon="marketplace"
            title="Market Place"
            content="Buy, sell, and trade unique monsters/items with other players"
          />
        </div>
        <div data-aos="fade-up" className="block col-span-6 md:hidden">
          <img
            src="/images/coin.png"
            alt="coin"
            className="m-auto w-[97px] md:w-auto"
          />
        </div>
        <div className="block md:hidden" />
        <div data-aos="fade-up" className="col-span-2 md:col-span-1 ">
          <PlayToEarnItem
            icon="daily-quests"
            title="Daily quests"
            content="Complete daily missions for rewards"
          />
        </div>
        <div data-aos="fade-up" className="col-span-2 md:col-span-1 ">
          <PlayToEarnItem
            icon="arena"
            title="Arena"
            content="Complete with other players in the arena ranking for the exclusive rewards"
          />
        </div>
        <div className="block md:hidden" />
      </div>
    </div>
  )
}

export default PlayToEarn

function PlayToEarnItem({ icon, title, content, className = "" }) {
  return (
    <div
      // style={{
      //   backgroundImage: "url(/images/play-to-earn-item-bg.png",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "100% 100%",
      // }}
      className={`relative smooth-tranform grayscale-effect pt-9 md:pt-[74px] play-to-earn-item pb-5 md:pb-9 px-3 md:px-14 min-h-[101px] md:min-h-[270px] ${className}`}
    >
      <img
        src={`/images/icons/${icon}.png`}
        alt={icon}
        className="absolute left-0 right-0 mx-auto -top-3 md:-top-16 max-w-[42px] md:max-w-[140px]"
      />
      <p className="font-sansBlack text-yellow text-base md:text-[32px] text-center uppercase">
        {title}
      </p>
      <p className="hidden mt-4 text-2xl font-extrabold text-center md:block font-playToEarnDetails">
        {content}
      </p>
    </div>
  )
}
