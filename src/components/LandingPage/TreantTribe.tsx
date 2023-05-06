import React, { useEffect } from "react"
import Title from "./Title"
import dynamic from "next/dynamic"
import TribePopup from "./TribePopup"

const TreeAnimation = dynamic(() => import("../animation/Tree"), {
  ssr: false,
})

function TreantTribe(props) {
  return (
    <div
      data-aos="fade-left"
      style={{
        backgroundImage: "url(/images/treant-tribe/treant-tribe-bg.png)",
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
              src="/images/treant-tribe/avatar.png"
              alt="avatar"
              className="absolute z-10 -top-28 -left-16 up-and-down"
            />
            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              style={{
                backgroundImage:
                  "url(/images/treant-tribe/treant-tribe-info-bg.png)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
              className="mt-5 pt-16 pb-[102px] px-[90px] "
            >
              <div
                data-aos="zoom-in-up"
                data-aos-delay="200"
                className="flex items-end"
              >
                <p className="text-gradient-green uppercase whitespace-nowrap font-sansBlack text-[45px]">
                  treant tribe
                </p>
                <img
                  src="/images/treant-tribe/icon.png"
                  alt="icon"
                  className="-mb-7"
                />
              </div>
              <p
                data-aos="zoom-in-up"
                data-aos-delay="200"
                className="mt-4 text-[28px] font-primary"
              >
                The Treant Tribe is a ancient clan that inhabits the GaiA
                universe. They are expert artisans who can create anything you
                want. With their passion for crafting, the tree tribe is the
                group with the least desire to participate in the
                expendition.With their creations, the Treant tribe is known as a
                master of defense.
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
            src="/images/treant-tribe/treant-tribe-img.png"
            alt="img"
            className="absolute -bottom-32 min-w-[938px]"
            style={{ left: "-74px" }}
          /> */}
          <div
            style={{ left: "-200px" }}
            className="absolute z-50 -bottom-0 min-w-[938px]"
          >
            <TreeAnimation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TreantTribe
