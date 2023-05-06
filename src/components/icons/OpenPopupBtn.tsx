import React from "react"

function OpenPopupBtn(props) {
  return (
    <div className="relative mt-5 scale-95 cursor-pointer open-popup-btn hover:scale-100 smooth-tranform md:mt-5">
      {/* <svg
        width={60}
        height={60}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className="spinner"
      >
        <path
          d="M29.994 28.077l-3.261-1.783.037 2.894-.574.33-.83.488.83.477.598.354.061 2.882 3.2-1.893 3.175-1.93-3.236-1.819z"
          fill="#00FFFC"
        />
        <path
          d="M2.223 28.846s0 .012 0 0l8.268.012c.488-9.477 7.95-17.085 17.354-17.818l.146-.256 1.111-1.893 1.112 1.893.134.232c9.611.525 17.293 8.219 17.782 17.83h10.93l.097-.061-2.906-1.637C54.944 13.873 44.136 3.408 30.69 2.723l-.476-.842L29.09 0 27.98 1.893l-.5.88C14.141 3.651 3.504 14.178 2.332 27.441L0 28.846h2.223zM51.451 31.142h-3.346c-.66 9.404-8.17 16.89-17.574 17.5l-.33.587-1.11 1.893-1.112-1.893-.342-.599c-9.208-.806-16.5-8.219-17.146-17.464H7.779l.025-.012H.11l-.11.037 2.357 1.331C3.652 45.577 14.13 55.91 27.27 56.874l.697 1.221 1.111 1.893 1.111-1.893.684-1.197C44.087 56.141 54.7 45.92 56.19 32.913l2.955-1.783h-7.694v.012z"
          fill="#00FFFC"
          // className="spinner"
        />
      </svg> */}
      <img
        src="/images/circle.png"
        alt="circle"
        className="max-w-[60px] spinner"
      />
      <img
        src="/images/arrow.png"
        alt="arrow"
        className="absolute top-0 bottom-0 left-0 right-0 m-auto max-w-[8px]"
      />
    </div>
  )
}

export default OpenPopupBtn
