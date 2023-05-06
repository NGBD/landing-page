import React, { useEffect } from "react"
import Title from "./Title"

function RoadMap(props) {
  return (
    <div className="max-w-[1428px] px-9 md:px-4 mx-auto mt-9 md:mt-48 pb-11 md:pb-0">
      <Title>Roadmap</Title>

      <div className="grid grid-cols-1 mt-5 md:mt-24 md:grid-cols-3565">
        <div
          className="relative hidden md:block"
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img
            src="/images/roadmap-dragon.png"
            alt="dragon"
            className="absolute right-16 min-w-[988px] -top-56"
          />
        </div>
        {/* <div className="border-l border-white border-dashed" /> */}
        <div>
          <div
            data-aos="fade-left"
            className="flex items-start border-l border-white border-dashed pb-14"
          >
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="flex items-center -mt-2 -ml-2 md:-ml-0"
            >
              <div className="hidden md:block border-t border-white border-dashed w-[48px]" />
              <Dot />
            </div>
            <div className="flex flex-col items-start ml-2 md:flex-row md:ml-0">
              <div data-aos-delay="300" data-aos="fade-left" className="hidden">
                <p className="writing-mode-vertical font-sansBlack text-pink text-lg md:text-[28px] -mt-3 md:mr-5">
                  QIII/2021
                </p>
              </div>
              <div className="-mt-0 md:-mt-3 leading-normal text-sm md:text-[28px] ml-0 md:ml-3">
                <p className=" font-sansBlack text-pink text-lg md:text-[28px] md:mr-5">
                  QIII/2021
                </p>
                <p data-aos-delay="500" data-aos="fade-left">
                  Character design, NFT system
                </p>
                <p data-aos-delay="600" data-aos="fade-left">
                  Game design and testing
                </p>
                <p data-aos-delay="700" data-aos="fade-left">
                  Partnerships
                </p>
                <p data-aos-delay="800" data-aos="fade-left">
                  Fundraising
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex items-start pb-8 border-l border-white border-dashed md:pb-20"
          >
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="flex items-center -mt-2 -ml-2 md:-ml-0"
            >
              <div className="hidden md:block border-t border-white border-dashed w-[48px]" />
              <Dot />
            </div>
            <div className="flex flex-col items-start ml-2 md:flex-row md:ml-0">
              <div data-aos="fade-left" data-aos-delay="300" className="hidden">
                <p className="writing-mode-vertical font-sansBlack text-pink text-lg md:text-[28px] -mt-3 md:mr-5">
                  QIV/2021
                </p>
              </div>
              <div className="-mt-0 md:-mt-3 leading-normal text-sm md:text-[28px] ml-0 md:ml-3">
                <p className="font-sansBlack text-pink text-lg md:text-[28px] md:mr-5">
                  QIV/2021
                </p>
                <p data-aos="fade-left" data-aos-delay="500">
                  NFT Offerings
                </p>
                <p data-aos="fade-left" data-aos-delay="500">
                  TGE/Listing
                </p>
                <p data-aos="fade-left" data-aos-delay="500">
                  Marketplace Training ground, Monster Nest
                </p>
                <p data-aos="fade-left" data-aos-delay="500">
                  Game release: Campaign, World Boss, Arena
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="flex flex-col ml-0 md:flex-row">
            <div
              data-aos="fade-left"
              className="flex items-start pb-8 border-l border-white border-dashed md:border-transparent "
            >
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="flex items-center -mt-2 -ml-2 md:-ml-0"
              >
                <div className="hidden md:block border-t border-white border-dashed w-[48px]" />
                <Dot />
              </div>
              <div className="flex flex-col items-start ml-2 md:flex-row md:ml-0">
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  className="hidden"
                >
                  <p className="writing-mode-vertical font-sansBlack text-[#FFA800] text-lg md:text-[28px] -mt-3 md:mr-5">
                    QI/2022
                  </p>
                </div>
                <div className="-mt-0 md:-mt-3 leading-normal text-sm md:text-[28px] ml-0 md:ml-3">
                  <p className=" font-sansBlack text-[#FFA800] text-lg md:text-[28px] md:mr-5">
                    QI/2022
                  </p>
                  <p data-aos="fade-left" data-aos-delay="500">
                    Pet system
                  </p>
                  <p data-aos="fade-left" data-aos-delay="500">
                    Item system
                  </p>
                  <p data-aos="fade-left" data-aos-delay="500">
                    Booster system
                  </p>
                  <p data-aos="fade-left" data-aos-delay="500">
                    More social Features
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div
                data-aos="fade-left"
                data-aos-delay="500"
                className="flex items-center -mt-2 -ml-2 md:-ml-0"
              >
                <div className="hidden md:block border-t border-white border-dashed w-[48px]" />
                <Dot />
              </div>
              <div className="flex flex-col ml-2 md:flex-row md:ml-0">
                <div
                  data-aos="fade-left"
                  data-aos-delay="550"
                  className="hidden"
                >
                  <p className="writing-mode-vertical font-sansBlack text-[#FFA800] text-lg md:text-[28px] -mt-3 md:mr-5">
                    QII/2022
                  </p>
                </div>
                <div className="-mt-0 md:-mt-3 leading-normal text-sm md:text-[28px] ml-0 md:ml-3">
                  <p className=" font-sansBlack text-[#FFA800] text-lg md:text-[28px] md:mr-5">
                    QII/2022
                  </p>
                  <p data-aos="fade-left" data-aos-delay="600">
                    Tournament
                  </p>
                  <p data-aos="fade-left" data-aos-delay="600">
                    Coming Soon...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="relative block md:hidden"
        >
          <img
            src="/images/roadmap-dragon.png"
            alt="dragon"
            className="absolute rotateY -right-24 w-[230px] -bottom-8"
          />
        </div>
      </div>
    </div>
  )
}

export default RoadMap

function Dot() {
  return <div className="h-[18px] w-[18px] bg-blue rounded-full" />
}
