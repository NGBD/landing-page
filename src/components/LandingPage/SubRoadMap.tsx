import React from 'react';

function SubRoadMap(props) {
  return (
    <div className="max-w-[1428px] px-9 md:px-4 mx-auto mt-9 md:mt-48 pb-11 md:pb-0">
      <p className="uppercase font-sansBlack text-gradient-blue text-[24px] md:text-[84px] text-center">Roadmap</p>

      <div className="grid grid-cols-1 mt-5 md:mt-24 md:grid-cols-3565">
        <div
          className="relative hidden md:block"

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

            className="flex items-start border-l border-white border-dashed pb-14"
          >
            <div

              className="flex items-center -mt-2 -ml-2 md:-ml-0"
            >
              <div className=" hidden md:block border-t border-white border-dashed w-[48px]" />
              <Dot />
            </div>
            <div className="flex flex-col items-start ml-2 md:flex-row md:ml-0">
              <div className="">
                <p className="hidden writing-mode-vertical font-sansBlack text-pink text-lg md:text-[28px] -mt-3 md:mr-5">
                  QIII/2021
                </p>
              </div>
              <div className="-mt-0 md:-mt-3 leading-normal text-sm md:text-[28px] ml-0 md:ml-3">
                <p className=" font-sansBlack text-pink text-lg md:text-[28px] md:mr-5">
                  QIII/2021
                </p>
                <p >
                  Character design, NFT system
                </p>
                <p >
                  Game design and testing
                </p>
                <p >
                  Partnerships
                </p>
                <p >
                  Fundraising
                </p>
              </div>
            </div>
          </div>
          <div

            className="flex items-start pb-8 border-l border-white border-dashed md:pb-20"
          >
            <div

              className="flex items-center -mt-2 -ml-2 md:-ml-0"
            >
              <div className="hidden md:block border-t border-white border-dashed w-[48px]" />
              <Dot />
            </div>
            <div className="flex flex-col items-start ml-2 md:flex-row md:ml-0">
              <div className="">
                <p className="hidden writing-mode-vertical font-sansBlack text-pink text-lg md:text-[28px] -mt-3 md:mr-5">
                  QIV/2021
                </p>
              </div>
              <div className="-mt-0 md:-mt-3 leading-normal text-sm md:text-[28px] ml-0 md:ml-3">
                <p className="font-sansBlack text-pink text-lg md:text-[28px] md:mr-5">
                  QIV/2021
                </p>
                <p>
                  NFT Offerings
                </p>
                <p>
                  TGE/Listing
                </p>
                <p>
                  Marketplace Training ground, Monster Nest
                </p>
                <p>
                  Game release: Campaign, World Boss, Arena
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-0 md:flex-row">
            <div

              className="flex items-start pb-8 border-l border-white border-dashed md:border-transparent "
            >
              <div

                className="flex items-center -mt-2 -ml-2 md:-ml-0"
              >
                <div className="hidden md:block border-t border-white border-dashed w-[48px]" />
                <Dot />
              </div>
              <div className="flex flex-col items-start ml-2 md:flex-row md:ml-0">
                <div

                  className=""
                >
                  <p className="hidden writing-mode-vertical font-sansBlack text-[#FFA800] text-lg md:text-[28px] -mt-3 md:mr-5">
                    QI/2022
                  </p>
                </div>
                <div className="-mt-0 md:-mt-3 leading-normal text-sm md:text-[28px] ml-0 md:ml-3">
                  <p className=" font-sansBlack text-[#FFA800] text-lg md:text-[28px] md:mr-5">
                    QI/2022
                  </p>
                  <p>
                    Pet system
                  </p>
                  <p>
                    Item system
                  </p>
                  <p>
                    Booster system
                  </p>
                  <p>
                    More social Features
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div

                className="flex items-center -mt-2 -ml-2 md:-ml-0"
              >
                <div className="hidden md:block border-t border-white border-dashed w-[48px]" />
                <Dot />
              </div>
              <div className="flex flex-col ml-2 md:flex-row md:ml-0">
                <div

                  className=""
                >
                  <p className="hidden writing-mode-vertical font-sansBlack text-[#FFA800] text-lg md:text-[28px] -mt-3 md:mr-5">
                    QII/2022
                  </p>
                </div>
                <div className="-mt-0 md:-mt-3 leading-normal text-sm md:text-[28px] ml-0 md:ml-3">
                  <p className=" font-sansBlack text-[#FFA800] text-lg md:text-[28px] md:mr-5">
                    QII/2022
                  </p>
                  <p >
                    Tournament
                  </p>
                  <p >
                    Coming Soon...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div

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
  );
}

export default SubRoadMap;

function Dot() {
  return <div className="h-[18px] w-[18px] bg-blue rounded-full" />
}
