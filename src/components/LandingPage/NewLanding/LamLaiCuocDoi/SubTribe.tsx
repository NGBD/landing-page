import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import TribeSlideBtn from '../../../icons/TribeSlideBtn';
import SecondAngel from '../SecondAngel';
import SecondDragon from '../SecondDragon';
import SecondMerman from '../SecondMerman';
import SecondShadow from '../SecondShadow';
import SecondTreant from '../SecondTreant';

function SubTribe(props) {

  const responsive = {
    supperDesktop: {
      breakpoint: { max: 5000, min: 1920 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  const [tribeShowing, settribeShowing] = useState("dragon")
  // console.log(tribeShowing)
  const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
      <div className="">
        <div
          className="max-w-[320px] absolute left-0 right-0 z-0 w-full mx-auto flex justify-between"
          style={{ bottom: "15px" }}
        >
          <button className="rotate-180" onClick={previous}>
            <TribeSlideBtn />
          </button>
          <button className="" onClick={next}>
            <TribeSlideBtn />
          </button>
        </div>
      </div>
    )
  }
  return (

    <div className="relative md:block bg-[#3D0058]">
      <div className="hidden md:flex flex-row md:flex-col absolute md:top-48 md:right-20 z-50 w-auto max-h-[480px] bottom-5
       overflow-hidden justify-between">
        <div className="" onClick={() => settribeShowing("dragon")}>
          <img src="/images/icons/dragon-tribe-icon.png" alt="dragon"
            className="max-w-[60px] md:max-w-[93px] scale-95 hover:scale-100 smooth-transform cursor-pointer" />

        </div>
        <div className="" onClick={() => settribeShowing("angel")}>
          <img src="/images/icons/angel-tribe-icon.png" alt="angel"
            className="max-w-[60px] md:max-w-[93px]  scale-95 hover:scale-100 smooth-transform cursor-pointer" />

        </div>
        <div className="" onClick={() => settribeShowing("treant")}>
          <img src="/images/icons/treant-tribe-icon.png" alt="treant"
            className="max-w-[60px] md:max-w-[93px]  scale-95 hover:scale-100 smooth-transform cursor-pointer" />

        </div>
        <div className="" onClick={() => settribeShowing("shadow")}>
          <img src="/images/icons/shadow-tribe-icon.png" alt="shadow"
            className="max-w-[60px] md:max-w-[93px]  scale-95 hover:scale-100 smooth-transform cursor-pointer" />

        </div>
        <div className="" onClick={() => settribeShowing("merman")}>
          <img src="/images/icons/merman-tribe-icon.png" alt="merman"
            className="max-w-[60px] md:max-w-[93px]  scale-95 hover:scale-100 smooth-transform cursor-pointer" />

        </div>
      </div>

      {tribeShowing === "dragon" && <SecondDragon />}
      {tribeShowing === "angel" && <SecondAngel />}
      {tribeShowing === "treant" && <SecondTreant />}
      {tribeShowing === "shadow" && <SecondShadow />}
      {tribeShowing === "merman" && <SecondMerman />}
      <div className='w-4/5 mx-auto md:hidden'>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={5000}
          keyBoardControl={true}

          customTransition="transform 400ms ease-in-out"
          transitionDuration={400}
          containerClass="carousel-container"

        >
          <div className="" onClick={() => settribeShowing("dragon")}>
            <img src="/images/icons/dragon-tribe-icon.png" alt="dragon"
              className="max-w-[60px] md:max-w-[93px] scale-95 hover:scale-100 smooth-transform cursor-pointer" />
          </div>

          <div className="" onClick={() => settribeShowing("angel")}>
            <img src="/images/icons/angel-tribe-icon.png" alt="angel"
              className="max-w-[60px] md:max-w-[93px]  scale-95 hover:scale-100 smooth-transform cursor-pointer" />
          </div>

          <div className="" onClick={() => settribeShowing("treant")}>
            <img src="/images/icons/treant-tribe-icon.png" alt="treant"
              className="max-w-[60px] md:max-w-[93px]  scale-95 hover:scale-100 smooth-transform cursor-pointer" />
          </div>

          <div className="" onClick={() => settribeShowing("shadow")}>
            <img src="/images/icons/shadow-tribe-icon.png" alt="shadow"
              className="max-w-[60px] md:max-w-[93px]  scale-95 hover:scale-100 smooth-transform cursor-pointer" />
          </div>

          <div className="" onClick={() => settribeShowing("merman")}>
            <img src="/images/icons/merman-tribe-icon.png" alt="merman"
              className="max-w-[60px] md:max-w-[93px]  scale-95 hover:scale-100 smooth-transform cursor-pointer" />
          </div>
        </Carousel>
      </div>







    </div>




  );
}

export default SubTribe;
