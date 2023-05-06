import React from "react"
import dynamic from "next/dynamic"

const GhostAnimation = dynamic(() => import("../animation/Ghost"), {
  ssr: false,
})
function ShadowTribeMobile(props) {
  return <GhostAnimation />
}

export default ShadowTribeMobile
