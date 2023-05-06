import next from "next"
import React, { useEffect, useState } from "react"
import Carousel from "react-multi-carousel"
import AngelTribe from "./AngelTribe"
import DragonTribe from "./DragonTribe"
import MermanTribe from "./MermanTribe"
import ShadowTribe from "./ShadowTribe"
import TreantTribe from "./TreantTribe"
import TribeSlideBtn from "../icons/TribeSlideBtn"
import TribePopup from "./TribePopup"
import Title from "./Title"
import dynamic from "next/dynamic"
import ShadowTribeMobile from "./ShadowTribeMobile"

const Animation = dynamic(() => import("../animation/Animation"), {
  ssr: false,
})

const FishAnimation = dynamic(() => import("../animation/Fish"), {
  ssr: false,
})
const GhostAnimation = dynamic(() => import("../animation/Ghost"), {
  ssr: false,
})
const TreeAnimation = dynamic(() => import("../animation/Tree"), {
  ssr: false,
})
const CatAnimation = dynamic(() => import("../animation/Cat"), {
  ssr: false,
})
const DragonAnimation = dynamic(() => import("../animation/Dragon"), {
  ssr: false,
})

const tribeList = ["dragon", "angel", "treant", "shadow", "merman"]
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

function Tribe(props) {
  const [tribeShowing, setTribeShowing] = useState("treant")

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

  // function renderAnimation() {
  //   if (tribeShowing === "merman") {
  //     return <FishAnimation />
  //   } else {
  //     return "aaaaaaaa"
  //   }
  // }

  // useEffect(() => {
  //   renderAnimation()
  // }, [tribeShowing])

  return (
    <div>
      {/* tribe pc dipslay */}
      <div className="relative hidden overflow-hidden md:block bg-[#3D0058]">
        <div className="flex flex-col absolute top-48 right-20 z-10 max-h-[480px] h-full justify-between">
          {tribeList.map((i, index) => (
            <div key={index} data-aos="zoom-out-up" data-aos-delay="100">
              <img
                onClick={() => setTribeShowing(i)}
                src={`/images/icons/${i}-tribe-icon.png`}
                alt={i}
                className="max-w-[93px] scale-95 hover:scale-100 smooth-transform cursor-pointer"
              />
            </div>
          ))}
        </div>
        {tribeShowing === "shadow" && <ShadowTribe />}
        {tribeShowing === "merman" && <MermanTribe />}
        {tribeShowing === "treant" && <TreantTribe />}
        {tribeShowing === "angel" && <AngelTribe />}
        {tribeShowing === "dragon" && <DragonTribe />}
      </div>

      {/* tribe mobile dipslay */}
      <div className="bg-gradient-to-b from-[#320772] via-[#572D95] to-[#210857] pt-6 pb-9 block md:hidden">
        <Title>Tribes</Title>
        <div className="flex flex-col items-center">
          {/* <img
            src={`/images/${tribeShowing}-tribe/${tribeShowing}-tribe-img-mobile.png`}
            alt={tribeShowing}
          />
          {tribeShowing === "shadow" && <ShadowTribeMobile />}
          {tribeShowing === "merman" && <FishAnimation />}
          {tribeShowing === "treant" && <TreeAnimation />}
          {tribeShowing === "angel" && <CatAnimation />}
          {tribeShowing === "dragon" && <DragonAnimation />} */}
          <Animation tribeShowing={tribeShowing} />

          <div>
            {/* <ButtonInfomaiton /> */}
            <TribePopup tribeShowing={tribeShowing} />
          </div>
        </div>
        <div className="relative flex justify-center w-full mt-4">
          <div className="max-w-[250px] w-full">
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
              removeArrowOnDeviceType={[
                "tablet",
                "mobile",
                "desktop",
                "supperDesktop",
              ]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              className="z-[1]"
              renderButtonGroupOutside={true}
              // @ts-ignore
              customButtonGroup={<CustomButtonGroupAsArrows />}
            >
              {tribeList?.map((i, index) => (
                <div
                  key={index}
                  className="relative min-h-[60px] flex justify-center mx-4"
                >
                  <img
                    onClick={() => setTribeShowing(i)}
                    src={`/images/icons/${i}-tribe-icon.png`}
                    alt={i}
                    // style={{ zIndex: 1 }}
                    className="max-w-[60px] absolute top-0 left-0 right-0 bottom-0 m-auto md:max-w-[93px] scale-95 hover:scale-100 smooth-transform cursor-pointer"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tribe
