import React, { useEffect } from "react"

function Title({ children, className = "" }) {
  return (
    <p
      data-aos="fade-up"
      data-aos-delay="100"
      className={`uppercase font-sansBlack text-gradient-blue text-[24px] md:text-[84px] text-center ${className}`}
    >
      {children}
    </p>
  )
}

export default Title
