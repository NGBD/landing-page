import React, { useEffect } from "react"
import Title from "./Title"
import dynamic from "next/dynamic"

const CatAnimation = dynamic(() => import("../animation/Cat"), {
  ssr: false,
})

function AngelTribe(props) {
  return (
    <div
      data-aos="fade-left"
      style={{
        backgroundImage: "url(/images/angel-tribe/angel-tribe-bg.png)",
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
              src="/images/angel-tribe/avatar.png"
              alt="avatar"
              className="absolute z-10 -top-52 -left-32 up-and-down"
            />
            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              style={{
                backgroundImage:
                  "url(/images/angel-tribe/angel-tribe-info-bg.png)",
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
                <p className="text-gradient-blue uppercase font-sansBlack text-[45px]">
                  angel tribe
                </p>
                <img
                  src="/images/angel-tribe/icon.png"
                  alt="icon"
                  className="-mb-7"
                />
              </div>
              <p
                data-aos="zoom-in-up"
                data-aos-delay="200"
                className="mt-4 text-[28px] font-primary"
              >
                The Angel Tribe originated in the universe they called
                themselves Heaven. This is a universe where their living
                conditions in this universe are quite peaceful. The peaceful
                living conditions gave the Angel Tribe time to study magic and
                develop their skill. Wich wide range of knowledge from ancestor
                Angel Tribe are well-known for their wide area control effect.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="relative h-full"
        >
          {/* <img
            src="/images/angel-tribe/angel-tribe-img.png"
            alt="img"
            className="absolute -bottom-20 -left-32 min-w-[938px]"
            // style={{ left: "-74px" }}
          /> */}
          <div className="absolute bottom-1 -left-44">
            <CatAnimation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AngelTribe
