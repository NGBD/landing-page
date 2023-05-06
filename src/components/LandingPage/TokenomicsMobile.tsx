import React, { useEffect } from "react"
import Title from "./Title"
import AOS from "aos"

function TokenomicsMobile(props) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="pt-8 md:pt-[340px] bg-[#260868] pb-9 md:pb-32 max-w-[1428px] mx-auto px-12 block md:hidden">
      <Title>Tokenomics</Title>
      <div className="grid items-center grid-cols-1 gap-5 mt-16">
        <img
          data-aos="flip-up"
          data-aos-delay="300"
          src="/images/tokenomics-chart.png"
          alt="chart"
        />
        <div className="">
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-lg uppercase text-yellow font-sansBlack"
          >
            Max supply: 500,000,000
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-sm text-yellow"
          >
            Seed Round: <span className="text-white">(5.0%) 25,000,000</span>
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-sm text-yellow"
          >
            Private round:{" "}
            <span className="text-white">(10.5%) 52,500,000</span>
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-sm text-yellow"
          >
            Public sale: <span className="text-white">(1.5%) 7,500,000</span>
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-sm text-yellow"
          >
            Ecosystem: <span className="text-white">(30%) 150,000,000</span>
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-sm text-yellow"
          >
            Team & Advisor:{" "}
            <span className="text-white">(20%) 100,000,000</span>
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-sm text-yellow"
          >
            DEX Deposit, MM, and Liquidity Incentives
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-sm text-white"
          >
            (15%) 75,000,000
          </p>
        </div>
      </div>
    </div>
  )
}

export default TokenomicsMobile
