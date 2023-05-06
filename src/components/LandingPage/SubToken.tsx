import React from 'react';

function SubToken(props) {
  return (
    <div>
      <div className="pt-[200px] hidden md:block pb-32 max-w-[1428px] mx-auto px-4">
        <p className="uppercase font-sansBlack text-gradient-blue text-[24px] md:text-[84px] text-center">Tokenomics</p>
        <div className="grid items-center grid-cols-2 gap-20 mt-16">
          <div >
            <img src="/images/tokenomics-chart.png" alt="chart" />
          </div>
          <div

            className="relative px-16 pb-32 pt-28"
            style={{
              backgroundImage: "url(/images/tokenomics-block-bg.png)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >
            <img

              src="/images/tokenomics-dragon.png"
              alt="dragon"
              className="absolute -right-36 -top-64"
            />
            <p

              className="uppercase text-yellow font-sansBlack text-[32px]"
            >
              Max supply: 500,000,000
            </p>
            <p

              className="text-yellow text-[28px]"
            >
              Seed Round: <span className="text-white">(5.0%) 25,000,000</span>
            </p>
            <p

              className="text-yellow text-[28px]"
            >
              Private round:{" "}
              <span className="text-white">(10.5%) 52,500,000</span>
            </p>
            <p

              className="text-yellow text-[28px]"
            >
              Public sale: <span className="text-white">(1.5%) 7,500,000</span>
            </p>
            <p

              className="text-yellow text-[28px]"
            >
              Ecosystem: <span className="text-white">(30%) 150,000,000</span>
            </p>
            <p

              className="text-yellow text-[28px]"
            >
              Team & Advisor:{" "}
              <span className="text-white">(20%) 100,000,000</span>
            </p>
            <p

              className="text-yellow text-[28px]"
            >
              DEX Deposit, MM, and Liquidity Incentives
            </p>
            <p

              className="text-white text-[28px]"
            >
              (15%) 75,000,000
            </p>
          </div>
        </div>
      </div>
      <div className="pt-8 md:pt-[340px] bg-[#260868] pb-9 md:pb-32 max-w-[1428px] mx-auto px-12 block md:hidden">
        <p className='uppercase font-sansBlack text-gradient-blue text-[24px] md:text-[84px] text-center'>Tokenomics</p>
        <div className="grid items-center grid-cols-1 gap-5 mt-16">
          <img

            src="/images/tokenomics-chart.png"
            alt="chart"
          />
          <div className="">
            <p

              className="text-lg uppercase text-yellow font-sansBlack"
            >
              Max supply: 500,000,000
            </p>
            <p

              className="text-sm text-yellow"
            >
              Seed Round: <span className="text-white">(5.0%) 25,000,000</span>
            </p>
            <p

              className="text-sm text-yellow"
            >
              Private round:{" "}
              <span className="text-white">(10.5%) 52,500,000</span>
            </p>
            <p

              className="text-sm text-yellow"
            >
              Public sale: <span className="text-white">(1.5%) 7,500,000</span>
            </p>
            <p

              className="text-sm text-yellow"
            >
              Ecosystem: <span className="text-white">(30%) 150,000,000</span>
            </p>
            <p

              className="text-sm text-yellow"
            >
              Team & Advisor:{" "}
              <span className="text-white">(20%) 100,000,000</span>
            </p>
            <p

              className="text-sm text-yellow"
            >
              DEX Deposit, MM, and Liquidity Incentives
            </p>
            <p

              className="text-sm text-white"
            >
              (15%) 75,000,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubToken;
