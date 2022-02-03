<template>
  <canvas class="landing-page" id="bg">

  </canvas>
</template>

<script>

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

let scene, camera, renderer, torus

export default {
name: "LandingPage",
    props: [],
    methods: {
        convertRemToPixels(rem) {    
            return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
        },
        animate() {
            requestAnimationFrame(this.animate)

            torus.rotation.x += 0.01
            torus.rotation.y += 0.01
            torus.rotation.z += 0.09

            renderer.render(scene, camera)
        }
    },
    mounted() {
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(90, (window.innerWidth - this.convertRemToPixels(5)) / window.innerHeight, 0.1, 1000)
        renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg'),
            alpha: true
        }) 

        renderer.setPixelRatio(window.devicePixelRatio)

        renderer.setSize((window.innerWidth - this.convertRemToPixels(5)), window.innerHeight)
        camera.position.setZ(30)

        //Shit
        const torusgeometry = new THREE.TorusGeometry(10, 3, 16, 100)
        const chessboardMaterial = new THREE.MeshStandardMaterial({color: 0xFF6347})
        torus = new THREE.Mesh(torusgeometry, chessboardMaterial)
        torus.position.set(500, 500, 5000)
        scene.add(torus)

        //Light
        const ambientLight = new THREE.AmbientLight(0xffffff)
        scene.add(ambientLight)

        //Chessboard
        //TODO Vue not loading necessary files
        const gltfloader = new GLTFLoader()
        gltfloader.load('./src/assets/3d/chessboard/scene.gltf', function(gltf) {
            scene.add(gltf.scene)
        })

        this.animate()
    }
}

</script>

<style>

.landing-page {
    position: fixed;
    top: 0;
    left: 5rem;
}

/* Mobile */
@media only screen and (max-width: 600px) {
    .landing-page {
        left: 0;
        bottom: 5rem;
    }
}

</style>
