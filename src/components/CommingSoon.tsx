import React from "react"

function CommingSoon({ children, className = "" }) {
  return (
    <div className="relative smooth-transform tooltip">
      {children}
      <div
        className={`whitespace-nowrap text-center smooth-transform tooltip-text text-sm text-white absolute left-0 right-0 max-w-[145px] py-[8px] px-2 mx-auto bg-[#5D2993] bg-opacity-80 rounded-lg ${className}`}
      >
        Coming Soon
      </div>
    </div>
  )
}

export default CommingSoon
