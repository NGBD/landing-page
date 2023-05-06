import React from 'react';
import DiscordIcon from '../icons/DiscordIcon';
import FacebookIcon from '../icons/FacebookIcon';
import TelegramIcon from '../icons/TelegramIcon';
import TiktokIcon from '../icons/TiktokIcon';
import TwitterIcon from '../icons/TwitterIcon';
import YoutubeIcon from '../icons/YoutubeIcon';
// import DiscordIcon from '../../../icons/DiscordIcon';
// import FacebookIcon from '../../../icons/FacebookIcon';
// import TelegramIcon from '../../../icons/TelegramIcon';
// import TiktokIcon from '../../../icons/TiktokIcon';
// import TwitterIcon from '../../../icons/TwitterIcon';
// import YoutubeIcon from '../../../icons/YoutubeIcon';
// import HeroVideoPopup from '../../HeroVideoPopup';

function SubHero(props) {
  return (
    <div className="relative mt-[67px] md:mt-0"

    // style={{
    //   backgroundImage: "url(/images/group-figma.png",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    // }}
    >
      <img src='/images/group-figma.png' className='inset-0 object-cover w-full' />
      <div className="absolute bottom-0 left-0 right-0 mx-auto">
        <div className="md:max-w-[56px] z-50 fixed top-40 right-3 md:top-[200px] md:left-[110px] flex flex-col max-h-[250px] md:max-h-[440px] h-full justify-between">
          <TelegramIcon

            className="w-[40px] h-[40px] md:w-[59px] md:h-[59px]"
          />

          <TwitterIcon

            className="w-[40px] h-[40px] md:w-[59px] md:h-[59px]"
          />

          <FacebookIcon

            className="w-[40px] h-[40px] md:w-[59px] md:h-[59px]"
          />

          <YoutubeIcon

            className="w-[40px] h-[40px] md:w-[59px] md:h-[59px]"
          />

          <TiktokIcon

            className="w-[40px] h-[40px] md:w-[59px] md:h-[59px]"
          />

          <DiscordIcon

            className="w-[40px] h-[40px] md:w-[59px] md:h-[59px]"
          />
        </div>
        <div className="flex flex-col items-center pt-[86px] pb-2 md:pb-16">

          <p

            className="text-center text-white uppercase font-sansBlack text-base md:text-[45px]"
          >
            Make friends - earn together
          </p>
          <div

            className="hidden md:block mt-7"
          >

          </div>
          <div className="max-w-[343px] md:max-w-[634px] w-full grid grid-cols-3 items-center md:grid-cols-3 gap-2 md:gap-6 mt-1 md:mt-6">
            <div>
              <PrimaryBtn >
                Buy $ DMLG
              </PrimaryBtn>
            </div>
            <div>

              <PrimaryBtn>Play Game</PrimaryBtn>

            </div>
            <div>

              <PrimaryBtn >Pitch Deck</PrimaryBtn>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHero;


function PrimaryBtn({ children }) {
  return (
    <button
      style={{
        backgroundImage: "url(/images/btn-bg.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
      className={`md:pt-2 md:pb-4 pt-1 pb-3 max-w-[129px] text-center scale-95 hover:scale-100 smooth-tranform w-full md:max-w-[196px] text-base md:text-2xl text-blue font-sansBlack`}
    >

      <a target="_blank">{children}</a>

    </button>
  )
}
