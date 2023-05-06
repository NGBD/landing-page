import React, { useState } from "react"
import OpenPopupBtn from "../icons/OpenPopupBtn"
import { AnimatePresence, motion } from "framer-motion"
import { DialogOverlay } from "@reach/dialog"
import MotionDialogContent from "../MotionDialogContent"

function HeroVideoPopup(props) {
  const [showDialog, setShowDialog] = useState(false)

  function toggleDialog() {
    setShowDialog(!showDialog)
  }
  return (
    <div>
      <div onClick={toggleDialog}>
        <OpenPopupBtn />
      </div>
      <AnimatePresence>
        {showDialog && (
          <DialogOverlay
            onDismiss={toggleDialog}
            className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full p-0 bg-black bg-opacity-30"
            style={{ zIndex: 100 }}
            // aria-label="label"
          >
            {/* @ts-ignore */}
            <MotionDialogContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl m-0 shadow-lg w-full max-w-[1000px] max-h-[562px] outline-none"
              style={{ margin: "10px", width: "95%" }}
            >
              <motion.div
                initial={{ y: +30 }}
                animate={{ y: 0 }}
                className="relative flex flex-col h-[203px] md:h-[562px] rounded-2xl"
              >
                <iframe
                  className="w-full h-full rounded-2xl"
                  // width="1000"
                  // height="562"
                  src="https://www.youtube.com/embed/6YdciLOJjEg??rel=1&autoplay=1&playlist=6YdciLOJjEg&loop=1"
                  title="YouTube video player"
                  // @ts-ignore
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  data-aos="fade-right"
                  // data-aos-offset="300"
                ></iframe>
              </motion.div>
            </MotionDialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HeroVideoPopup
