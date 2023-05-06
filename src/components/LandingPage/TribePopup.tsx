import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { DialogOverlay } from "@reach/dialog"
import MotionDialogContent from "../MotionDialogContent"

function TribePopup({ tribeShowing }) {
  const [showDialog, setShowDialog] = useState(false)

  function toggleDialog() {
    setShowDialog(!showDialog)
  }
  return (
    <div className="mt-5">
      <div onClick={toggleDialog}>
        <ButtonInfomaiton />
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
              className="rounded-md m-0 shadow-lg w-full max-w-[300px] !bg-transparent outline-none"
              style={{ margin: "10px", width: "95%" }}
            >
              <motion.div
                initial={{ y: +30 }}
                animate={{ y: 0 }}
                className="relative flex flex-col px-10 pb-10 pt-9"
                style={{
                  backgroundImage: `url(/images/${tribeShowing}-tribe/${tribeShowing}-tribe-info-bg.png)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                <img
                  src="/images/close-popup-icon.png"
                  alt="close-popup"
                  className="max-w-[40px] absolute -top-1 -right-2"
                  onClick={toggleDialog}
                />
                <div className="">
                  <div className="flex items-center">
                    <p
                      className={`uppercase text-lg font-sansBlack text-gradient-${
                        tribeShowing === "dragon"
                          ? "red"
                          : tribeShowing === "treant"
                          ? "green"
                          : tribeShowing === "shadow"
                          ? "orange"
                          : "blue"
                      }`}
                    >
                      {tribeShowing} tribe
                    </p>
                    <img
                      src={`/images/${tribeShowing}-tribe/icon.png`}
                      alt={tribeShowing}
                      className="max-w-[50px] "
                    />
                  </div>
                  <p className="text-sm text-white font-primary">
                    {tribeShowing === "dragon" &&
                      "The Dragon tribe is a tribe originating from the universe called Hell Gate. This is a rather arid universe with most planets with harsh living conditions. Because of the harsh living conditions, the dragon race had to fight with each other. Which make them very powerful and  gain enormous strength, extreme endurance."}

                    {tribeShowing === "treant" &&
                      "The Treant Tribe is a ancient clan that inhabits the GaiA universe. They are expert artisans who can create anything you want. With their passion for crafting, the tree tribe is the group with the least desire to participate in the expendition.With their creations, the Treant tribe is known as a master of defense."}

                    {tribeShowing === "angel" &&
                      "The Angel Tribe originated in the universe they called themselves Heaven. This is a universe where their living conditions in this universe are quite peaceful. The peaceful living conditions gave the Angel Tribe time to study magic and develop their skill. Wich wide range of knowledge from ancestor Angel Tribe are well-known for their wide area control effect."}

                    {tribeShowing === "merman" &&
                      "Mermaids are a representation of water. They can be as pliable and soft as spring waters, but they can also consume everything with their wrath like a cataclysm.The Mermaid Tribe is a one-of-a-kind living clan. They reside in the Aqua universe. Because of their water skill, they can heal any wounds their friends sustain and support them with water and tidal spells."}

                    {tribeShowing === "shadow" &&
                      "The Ghost Tribe originated from the same explosion that created the cracks that connected the multiverse. The Ghost Tribe is called Ankou-The Entity and all variant of ghost tribe serving as vessels for the main being. Ghost Tribe has the power of universe which can create portals and dealing massive amount of damage with super speed attacks."}
                  </p>
                </div>{" "}
                <img
                  src={`/images/${tribeShowing}-tribe/avatar-mobile.png`}
                  alt="close-popup"
                  className="max-w-[120px] absolute -bottom-8 -right-3"
                  onClick={toggleDialog}
                />
              </motion.div>
            </MotionDialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TribePopup

function ButtonInfomaiton() {
  return (
    <button className="flex border-[1px] px-[6px] py-1 text-sm rounded border-blue items-baseline">
      {" "}
      <Icon className="mr-1" /> Information{" "}
    </button>
  )
}
function Icon(props) {
  return (
    <svg
      width={7}
      height={9}
      viewBox="0 0 7 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {" "}
      <path
        d="M7 2.839l-1.95.405-1.378 2.433L2.18 3.244 0 2.84 3.672 8.38 7 2.839zM3.672 2.839l.689-.811L3.672 0l-.574 2.028.574.81z"
        fill="#00FFFC"
      />{" "}
      <path
        d="M7 2.839l-1.95.405-1.378 2.433L2.18 3.244 0 2.84 3.672 8.38 7 2.839zM3.672 2.839l.689-.811L3.672 0l-.574 2.028.574.81z"
        stroke="#00FFFC"
      />{" "}
    </svg>
  )
}
