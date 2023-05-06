import React, { useEffect } from "react"
import Title from "./Title"
import dynamic from "next/dynamic"

const GhostAnimation = dynamic(() => import("../animation/Ghost"), {
  ssr: false,
})

function ShadowTribe(props) {
  return (
    <div
      data-aos="fade-left"
      style={{
        backgroundImage: "url(/images/shadow-tribe/shadow-tribe-bg.png)",
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
              src="/images/shadow-tribe/avatar.png"
              alt="avatar"
              className="absolute z-10 -top-44 -left-40 up-and-down"
            />
            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              style={{
                backgroundImage:
                  "url(/images/shadow-tribe/shadow-tribe-info-bg.png)",
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
                <p className="text-gradient-orange uppercase whitespace-nowrap font-sansBlack text-[45px]">
                  Shadow tribe
                </p>
                <img
                  src="/images/shadow-tribe/icon.png"
                  alt="icon"
                  className="-mb-7"
                />
              </div>
              <p
                data-aos="zoom-in-up"
                data-aos-delay="200"
                className="mt-4 text-[28px] font-primary"
              >
                The Ghost Tribe originated from the same explosion that created
                the cracks that connected the multiverse. The Ghost Tribe is
                called Ankou-The Entity and all variant of ghost tribe serving
                as vessels for the main being. Ghost Tribe has the power of
                universe which can create portals and dealing massive amount of
                damage with super speed attacks.
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
            src="/images/shadow-tribe/shadow-tribe-img.png"
            alt="img"
            className="absolute bottom-0 left-0"
          /> */}
          <div className="absolute -bottom-10 -left-20">
            <GhostAnimation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShadowTribe
