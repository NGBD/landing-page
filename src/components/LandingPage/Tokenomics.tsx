import React, { useEffect } from "react"
import Title from "./Title"

function Tokenomics(props) {
  return (
    <div className="pt-[340px] hidden md:block pb-32 max-w-[1428px] mx-auto px-4">
      <Title>Tokenomics</Title>
      <div className="grid items-center grid-cols-2 gap-20 mt-16">
        <div data-aos="flip-up" data-aos-delay="300">
          <img src="/images/tokenomics-chart.png" alt="chart" />
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="200"
          className="relative px-16 pb-32 pt-28"
          style={{
            backgroundImage: "url(/images/tokenomics-block-bg.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <img
            data-aos="fade-left"
            data-aos-delay="600"
            src="/images/tokenomics-dragon.png"
            alt="dragon"
            className="absolute -right-36 -top-64"
          />
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="uppercase text-yellow font-sansBlack text-[32px]"
          >
            Max supply: 500,000,000
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-yellow text-[28px]"
          >
            Seed Round: <span className="text-white">(5.0%) 25,000,000</span>
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-yellow text-[28px]"
          >
            Private round:{" "}
            <span className="text-white">(10.5%) 52,500,000</span>
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-yellow text-[28px]"
          >
            Public sale: <span className="text-white">(1.5%) 7,500,000</span>
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-yellow text-[28px]"
          >
            Ecosystem: <span className="text-white">(30%) 150,000,000</span>
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-yellow text-[28px]"
          >
            Team & Advisor:{" "}
            <span className="text-white">(20%) 100,000,000</span>
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-yellow text-[28px]"
          >
            DEX Deposit, MM, and Liquidity Incentives
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-white text-[28px]"
          >
            (15%) 75,000,000
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
