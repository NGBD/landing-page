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

function Dragon(props) {
  function createOasis() {
    // Logger.enable()

    const engine = new WebGLEngine("dragon", { alpha: true })
    engine.canvas.resizeByClientSize()

    const scene = engine.sceneManager.activeScene
    const rootEntity = scene.createRootEntity("root")

    // camera
    const cameraEntity = rootEntity.createChild("camera_node")
    const camera = cameraEntity.addComponent(Camera)
    scene.background.solidColor.setValue(0, 0, 0, 0)
    cameraEntity.transform.position = new Vector3(0, 0, 40)

    engine.resourceManager
      .load({
        urls: [
          // "assets/raptor/raptor.json",
          // "assets/raptor/raptor.atlas",
          // "assets/raptor/raptor.png",
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

    engine.run()
  }

  useLayoutEffect(() => {
    createOasis()
  }, [])

  return (
    <canvas
      className="w-[280px] h-[220px] md:w-[1041px] md:h-[1016px]"
      id="dragon"
    />
  )
}

export default Dragon
