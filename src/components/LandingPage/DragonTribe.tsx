import React, { useEffect } from "react"
import Title from "./Title"
import dynamic from "next/dynamic"

const DragonAnimation = dynamic(() => import("../animation/Dragon"), {
  ssr: false,
})

function DragonTribe(props) {
  return (
    <div
      data-aos="fade-left"
      // data-aos-delay="100"
      style={{
        backgroundImage: "url(/images/dragon-tribe/dragon-tribe-bg.png)",
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
              src="/images/dragon-tribe/avatar.png"
              alt="avatar"
              className="absolute z-10 -top-32 -left-40 up-and-down"
            />
            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              style={{
                backgroundImage:
                  "url(/images/dragon-tribe/dragon-tribe-info-bg.png)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
              className="mt-5 pt-16 pb-[102px] px-[90px]"
            >
              <div
                data-aos="zoom-in-up"
                data-aos-delay="200"
                className="flex items-end"
              >
                <p className="text-gradient-red uppercase whitespace-nowrap font-sansBlack text-[45px]">
                  dragon tribe
                </p>
                <img
                  src="/images/dragon-tribe/icon.png"
                  alt="icon"
                  className="-mb-7"
                />
              </div>
              <p
                data-aos="zoom-in-up"
                data-aos-delay="200"
                className="mt-4 text-[28px] font-primary"
              >
                The dragon Tribe originated in the universe they called
                themselves Heaven. This is a universe where their living
                conditions in this universe are quite peaceful. The peaceful
                living conditions gave the dragon Tribe time to study magic and
                develop their skill. Wich wide range of knowledge from ancestor
                dragon Tribe are well-known for their wide area control effect.
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
            src="/images/dragon-tribe/dragon-tribe-img.png"
            alt="img"
            className="absolute -bottom-9 left-4 min-w-[663px]"
          /> */}
          <div className="absolute bottom-1 -left-10">
            <DragonAnimation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DragonTribe
