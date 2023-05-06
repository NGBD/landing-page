import React, { useLayoutEffect } from "react"
import {
  Camera,
  Logger,
  SystemInfo,
  Vector3,
  WebGLEngine,
  Entity,
} from "oasis-engine"
import { SpineAnimation } from "@oasis-engine/spine"

function Animation({ tribeShowing }) {
  function createOasis() {
    // Logger.enable()

    const engine = new WebGLEngine("drawcanvas", { alpha: true })
    engine.canvas.resizeByClientSize()

    const scene = engine.sceneManager.activeScene
    const rootEntity = scene.createRootEntity()

    // camera
    const cameraEntity = rootEntity.createChild("camera_node")
    const camera = cameraEntity.addComponent(Camera)
    scene.background.solidColor.setValue(0, 0, 0, 0)
    cameraEntity.transform.position = new Vector3(0, 0, 40)

    if (tribeShowing === "merman") {
      engine.resourceManager
        .load({
          urls: [
            "assets/fish/fish.json",
            "assets/fish/fish.atlas",
            "assets/fish/fish.png",
          ],
          type: "spine",
        })
        .then((spineEntity: Entity) => {
          spineEntity.transform.setPosition(0, -15, 0)
          spineEntity.transform.setScale(0.5, 0.5, 0.5)
          rootEntity.addChild(spineEntity)
          const spineAnimation = spineEntity.getComponent(SpineAnimation)
          spineAnimation.state.setAnimation(0, "animation", true)
          spineAnimation.scale = 0.06
        })
    } else if (tribeShowing === "shadow") {
      engine.resourceManager
        .load({
          urls: [
            "assets/ghost/ghost.json",
            "assets/ghost/ghost.atlas",
            "assets/ghost/ghost.png",
          ],
          type: "spine",
        })
        .then((spineEntity: Entity) => {
          spineEntity.transform.setPosition(0, 0, 0)
          spineEntity.transform.setScale(0.5, 0.5, 0.5)
          rootEntity.addChild(spineEntity)
          const spineAnimation = spineEntity.getComponent(SpineAnimation)
          spineAnimation.state.setAnimation(0, "animation", true)
          spineAnimation.scale = 0.06
        })
    } else if (tribeShowing === "dragon") {
      engine.resourceManager
        .load({
          urls: [
            "assets/dragon/dragon.json",
            "assets/dragon/dragon.atlas",
            "assets/dragon/dragon.png",
          ],
          type: "spine",
        })
        .then((spineEntity: Entity) => {
          spineEntity.transform.setPosition(0, 0, 0)
          spineEntity.transform.setScale(0.5, 0.5, 0.5)
          rootEntity.addChild(spineEntity)
          const spineAnimation = spineEntity.getComponent(SpineAnimation)
          spineAnimation.state.setAnimation(0, "animation", true)
          spineAnimation.scale = 0.06
        })
    } else if (tribeShowing === "angel") {
      engine.resourceManager
        .load({
          urls: [
            "assets/cat/cat.json",
            "assets/cat/cat.atlas",
            "assets/cat/cat.png",
          ],
          type: "spine",
        })
        .then((spineEntity: Entity) => {
          spineEntity.transform.setPosition(0, 0, 0)
          spineEntity.transform.setScale(0.5, 0.5, 0.5)
          rootEntity.addChild(spineEntity)
          const spineAnimation = spineEntity.getComponent(SpineAnimation)
          spineAnimation.state.setAnimation(0, "animation", true)
          spineAnimation.scale = 0.06
        })
    } else if (tribeShowing === "treant") {
      engine.resourceManager
        .load({
          urls: [
            "assets/tree/tree.json",
            "assets/tree/tree.atlas",
            "assets/tree/tree.png",
          ],
          type: "spine",
        })
        .then((spineEntity: Entity) => {
          spineEntity.transform.setPosition(0, -4, 0)
          spineEntity.transform.setScale(0.5, 0.5, 0.5)
          rootEntity.addChild(spineEntity)
          const spineAnimation = spineEntity.getComponent(SpineAnimation)
          spineAnimation.state.setAnimation(0, "animation", true)
          spineAnimation.scale = 0.06
        })
    }

    // else {
    //   console.log(tribeShowing)
    //   engine.resourceManager
    //     .load({
    //       urls: [
    //         "assets/raptor/raptor.json",
    //         "assets/raptor/raptor.atlas",
    //         "assets/raptor/raptor.png",

    //       ],
    //       type: "spine",
    //     })
    //     .then((spineEntity: Entity) => {
    //       spineEntity.transform.setPosition(0, -15, 0)
    //       spineEntity.transform.setScale(0.5, 0.5, 0.5)
    //       rootEntity.addChild(spineEntity)
    //       const spineAnimation = spineEntity.getComponent(SpineAnimation)
    //       spineAnimation.state.setAnimation(0, "roar", true)
    //       spineAnimation.scale = 0.05

    //       // const { skeleton, state } = spineAnimation;
    //       // skeleton.setSkinByName("egg01");
    //     })
    // }

    engine.run()
  }

  useLayoutEffect(() => {
    createOasis()
  }, [tribeShowing])

  return (
    <div className="">
      <canvas
        id="drawcanvas"
        className="w-[280px] h-[220px] md:w-[1041px] md:h-[1016px]"
      />
    </div>
  )
}

export default Animation
