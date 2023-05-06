import React from "react"

function ClosePopupIcon(props) {
  return (
    <svg

      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 36V25.813L11.58 36M36 36H14.52L.011 23.578V2.131h35.977V36H36zm-21.19-.695h20.495V2.825H.707V23.3L14.81 35.305z"
        fill="#B1B1B1"
      />
      <path
        d="M0 2.316L2.317 0h6.715l2.19 2.177M25.39 2.316L27.706 0h6.024l2.19 2.177"
        fill="#B1B1B1"
      />
      <path
        d="M23.812 26l2.187-2.05L12.187 11 10 13.051 23.812 26z"
        fill="#424242"
      />
      <path
        d="M26 13.05L23.813 11 10.001 23.949l2.187 2.05L26 13.05z"
        fill="#424242"
      />
    </svg>
  )
}

export default ClosePopupIcon
