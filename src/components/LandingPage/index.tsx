import React, { useEffect } from "react"
import Hero from "./Hero"
import PlayToEarn from "./PlayToEarn"
import RoadMap from "./RoadMap"
import Tokenomics from "./Tokenomics"
import Tribe from "./Tribe"
import Partners from "./Partners"
import Footer from "../Footer"
import TokenomicsMobile from "./TokenomicsMobile"
import AOS from "aos"

function index(props) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div>
      <Hero />
      <Tribe />
      <div
        className="overflow-hidden long-bg"
      // style={{
      //   backgroundImage: "url(/images/long-bg.png)",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
      >
        <PlayToEarn />
        <RoadMap />
        <Tokenomics />
      </div>
      <TokenomicsMobile />
      <Partners />
      <Footer />
    </div>
  )
}

export default index
