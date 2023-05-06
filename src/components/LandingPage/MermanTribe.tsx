import React, { useEffect } from "react"
import Title from "./Title"
import dynamic from "next/dynamic"

const FishAnimation = dynamic(() => import("../animation/Fish"), {
  ssr: false,
})

function MermanTribe(props) {
  return (
    <div
      data-aos="fade-left"
      style={{
        backgroundImage: "url(/images/merman-tribe/merman-tribe-bg.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-[1099px] pt-[94px] pb-[149px] px-4"
    >
      <div className="grid items-stretch grid-cols-2 max-w-[1428px] mx-auto">
        <div className="flex flex-col">
          <Title>Tribes</Title>
          <div className="relative">
            <img
              data-aos="fade-right"
              data-aos-delay="800"
              src="/images/merman-tribe/avatar.png"
              alt="avatar"
              className="absolute z-10 -top-36 -left-48 up-and-down"
            />
            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              style={{
                backgroundImage:
                  "url(/images/merman-tribe/merman-tribe-info-bg.png)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
              className="mt-5 pt-16 pb-[102px] px-[90px] relative"
            >
              <div
                data-aos="zoom-in-up"
                data-aos-delay="200"
                className="flex items-end"
              >
                <p className="text-gradient-blue uppercase whitespace-nowrap font-sansBlack text-[45px]">
                  Merman tribe
                </p>
                <img
                  src="/images/merman-tribe/icon.png"
                  alt="icon"
                  className="-mb-7"
                />
              </div>
              <p
                data-aos="zoom-in-up"
                data-aos-delay="200"
                className="mt-4 text-[28px] font-primary"
              >
                Mermaids are a representation of water. They can be as pliable
                and soft as spring waters, but they can also consume everything
                with their wrath like a cataclysm.The Mermaid Tribe is a
                one-of-a-kind living clan. They reside in the Aqua universe.
                Because of their water skill, they can heal any wounds their
                friends sustain and support them with water and tidal spells.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="relative w-full h-full"
        >
          {/* <img
            src="/images/merman-tribe/merman-tribe-img.png"
            alt="img"
            className="absolute bottom-7 min-w-[1003px] -left-56"
          /> */}
          <div className="absolute bottom-1 -left-10">
            <FishAnimation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MermanTribe
