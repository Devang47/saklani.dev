'use client'

import React, { useEffect, useRef } from 'react'
import {
  BufferAttribute,
  BufferGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  TextureLoader,
  Vector2,
  Vector3,
  WebGLRenderer
} from 'three'

function Threebg() {
  const canvasEl = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer
    const stars: Mesh[] = []

    const LINE_COUNT = 20
    const geom = new BufferGeometry()
    geom.setAttribute(
      'position',
      new BufferAttribute(new Float32Array(6 * LINE_COUNT), 3)
    )
    geom.setAttribute(
      'velocity',
      new BufferAttribute(new Float32Array(2 * LINE_COUNT), 1)
    )
    const pos = geom.getAttribute('position')
    const pa = pos.array
    const vel = geom.getAttribute('velocity')
    const va = vel.array

    const mouse = new Vector2()
    const target = new Vector2()

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }

    const init = () => {
      if (!canvasEl.current) return
      camera = new PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
      )
      camera.position.z = innerWidth > 750 ? 100 : 500

      scene = new Scene()

      renderer = new WebGLRenderer({
        antialias: true,
        canvas: canvasEl.current,
        alpha: true
      })
      renderer.setClearColor(0x000000, 0)

      resize()
    }

    const addSphere = () => {
      const geometry = new SphereGeometry(0.5, 5, 5)
      const material = new MeshBasicMaterial({ color: 0xa2a2a2 })
      const textureLoader = new TextureLoader()
      const texture = textureLoader.load('/star.png')
      material.alphaMap = texture

      for (let z = -1000; z < 2000; z += 20) {
        const sphere = new Mesh(geometry, material)

        sphere.position.x = Math.random() * 1000 - 500
        sphere.position.y = Math.random() * 1000 - 500
        sphere.position.z = z
        sphere.scale.x = sphere.scale.y = 2

        scene.add(sphere)
        stars.push(sphere)
      }
    }

    const addLines = () => {
      for (let line_index = 0; line_index < LINE_COUNT; line_index++) {
        const x = Math.random() * 200 - 100
        const y = Math.random() * 100 - 50
        const z = Math.random() * 200 - 100
        const xx = x
        const yy = y
        const zz = z
        //line start
        pa[6 * line_index] = x
        pa[6 * line_index + 1] = y
        pa[6 * line_index + 2] = z
        //line end
        pa[6 * line_index + 3] = xx
        pa[6 * line_index + 4] = yy
        pa[6 * line_index + 5] = zz

        va[2 * line_index] = va[2 * line_index + 1] = 0
      }

      const mat = new LineBasicMaterial({ color: 0xa2a2a2 })
      const lines = new LineSegments(geom, mat)
      scene.add(lines)
    }

    const animateStars = () => {
      for (let i = 0; i < stars.length; i++) {
        const star: any = stars[i]
        star.position.z += i / 30
        if (star.position.z > 1000) star.position.z -= 2000
      }
    }

    const onMouseMove = (event: any) => {
      mouse.x = event.clientX - innerWidth / 2
      mouse.y = event.clientY - innerHeight / 2
    }

    const render = () => {
      requestAnimationFrame(render)

      target.x = (1 - mouse.x) * 0.0002
      target.y = (1 - mouse.y) * 0.0002

      camera.rotation.x += 0.04 * (target.y - camera.rotation.x)
      camera.rotation.y += 0.04 * (target.x - camera.rotation.y)
      camera.position.x += 0.1 * ((1 - mouse.x) * 0.01 - camera.position.x)
      camera.position.y += 0.1 * ((1 - mouse.y) * 0.01 - camera.position.y)
      camera.lookAt(new Vector3())

      renderer.render(scene, camera)

      for (let line_index = 0; line_index < LINE_COUNT; line_index++) {
        va[2 * line_index] += 0.05
        va[2 * line_index + 1] += 0.025

        pa[6 * line_index + 2] += va[2 * line_index] ?? 0
        pa[6 * line_index + 5] += va[2 * line_index + 1] ?? 0

        if (pa[6 * line_index + 5] ?? 0 > 200) {
          const z = Math.random() * 200 - 100
          pa[6 * line_index + 2] = z
          pa[6 * line_index + 5] = z
          va[2 * line_index] = 0
          va[2 * line_index + 1] = 0
        }
      }
      pos.needsUpdate = true

      animateStars()
    }

    init()
    addSphere()
    addLines()
    render()

    addEventListener('resize', resize)
    addEventListener('mousemove', onMouseMove, false)
  }, [])

  return (
    <canvas
      className="fixed inset-0 pointer-events-none !h-[100vh] !w-[100vw]"
      ref={canvasEl}
    ></canvas>
  )
}

export default Threebg
