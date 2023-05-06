import React, { useEffect } from "react"
import Title from "./Title"

const partners = [
  "dao-marker",
  "gate",
  "game-starter",
  "ld",
  "wolf",
  "magnus",
  "metrix",
  "au21",
  "ac",
  "m6",
  "netboom",
  "gt",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
]

function Partners(props) {
  return (
    <div className="pt-9 md:pt-20 bg-radial-gradient pb-9 md:pb-28">
      <div className="max-w-[1428px] mx-auto px-10 md:px-4 md:block">
        <Title>Partners</Title>
        {/* partner pc */}
        <div className="hidden md:block">
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center justify-between mt-12"
          >
            {partners.slice(0, 5).map((i, index) => (
              <img key={index} src={`/images/partners/${i}.png`} alt={i} />
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center justify-between mt-12"
          >
            {partners.slice(5, 10).map((i, index) => (
              <img key={index} src={`/images/partners/${i}.png`} alt={i} />
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center justify-between mt-12"
          >
            {partners.slice(11, 17).map((i, index) => (
              <img key={index} src={`/images/partners/${i}.png`} alt={i} />
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center justify-between mt-12"
          >
            {partners.slice(17, 22).map((i, index) => (
              <img key={index} src={`/images/partners/${i}.png`} alt={i} />
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center justify-between mt-12"
          >
            {partners.slice(22, 29).map((i, index) => (
              <img key={index} src={`/images/partners/${i}.png`} alt={i} />
            ))}
          </div>
        </div>
        {/* partner mobile */}
        <div className="blocl md:hidden">
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center justify-between mt-6"
          >
            {partners.slice(0, 3).map((i, index) => (
              <img
                key={index}
                src={`/images/partners/${i}-mobile.png`}
                alt={i}
              />
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center justify-between mt-4"
          >
            {partners.slice(3, 6).map((i, index) => (
              <img
                key={index}
                src={`/images/partners/${i}-mobile.png`}
                alt={i}
              />
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center justify-between mt-4"
          >
            {partners.slice(6, 9).map((i, index) => (
              <img
                key={index}
                src={`/images/partners/${i}-mobile.png`}
                alt={i}
              />
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center justify-between mt-4"
          >
            {partners.slice(9, 12).map((i, index) => (
              <img
                key={index}
                src={`/images/partners/${i}-mobile.png`}
                alt={i}
              />
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center justify-between mt-4"
          >
            {partners.slice(12, 17).map((i, index) => (
              <img
                key={index}
                src={`/images/partners/${i}.png`}
                alt={i}
                className="max-w-[34px]"
              />
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center justify-between mt-4"
          >
            {partners.slice(17, 22).map((i, index) => (
              <img
                key={index}
                src={`/images/partners/${i}.png`}
                alt={i}
                className="max-w-[34px]"
              />
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center justify-between mt-4"
          >
            {partners.slice(22, 27).map((i, index) => (
              <img
                key={index}
                src={`/images/partners/${i}.png`}
                alt={i}
                className="max-w-[34px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
