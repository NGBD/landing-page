import React from 'react';

function SecondDragon(props) {
  return (

    <div
      className="h-[550px] md:min-h-[1099px] pt-[94px] pb-[149px] px-4 "
      style={{
        backgroundImage: "url(/images/dragon-tribe/dragon-tribe-bg.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >

      <div
        className='grid items-stretch grid-rows-2 md:grid-cols-2 max-w-[1428px] mx-auto'
      >

        <div
          className="top-0 flex flex-col "
        >
          <p
            className="uppercase font-sansBlack text-gradient-red text-[24px] md:text-[84px] text-center"
          >Tribes</p>

          <div
            className="relative "
          >
            <img
              src="/images/dragon-tribe/avatar.png"
              alt="avatar"
              className="absolute z-10 hidden md:block -top-40 -left-32 up-and-down"
            />
            <div
              style={{
                backgroundImage: "url(/images/dragon-tribe/dragon-tribe-info-bg.png)",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%"

              }}
              className="mt-5 pt-16 pb-[102px] px-[90px] hidden md:block"
            >

              <div
                className="flex items-end"
              >
                <p
                  className="text-gradient-red uppercase whitespace-nowrap font-sansBlack text-[45px]"
                >
                  dragon tribe
                </p>
                <img
                  src="/images/dragon-tribe/icon.png"
                  alt="icon"
                  className="-mb-7"
                />
              </div>
              <p
                className="mt-4 text-[28px] font-primary  text-white"
              >The Angel Tribe originated in the universe they called themselves Heaven. This is a universe where their living conditions in this universe are quite peaceful. The peaceful living conditions gave the Angel Tribe time to study magic and develop their skill. Wich wide range of knowledge from ancestor Angel Tribe are well-known for their wide area control effect.
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative flex flex-col items-center w-full h-full md:-top-0 -top-40"
        >
          <div
            style={{ left: "" }}
            className=""
          >
            <img src="/images/dragon-tribe/dragon-tribe-img.png"
              className="w-[180px] h-[220px] md:w-[750px] md:h-[900px] "
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default SecondDragon;
