import * as React from "react"

function IconHamberger(props) {
  return (
    <svg
      width={20}
      height={12}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0h20v2H0V0zm5 5h15v2H5V5zm6.25 5H20v2h-8.75v-2z"
        fill="#fff"
      />
    </svg>
  )
}

export default IconHamberger
