import React from "react"
import MainNav from "./MainNav"

function Layout(props) {
  return (
    <div className="text-white ">
      <MainNav />
      {props.children}
    </div>
  )
}

export default Layout
