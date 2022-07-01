<template>
  <div>
    <a @click="$emit('switchPage', 'Info')" class="info-button">{{ $t('general.learn_more') }}</a>
    <canvas class="landing-page" id="bg"/>
  </div>
</template>

<script>

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let scene, camera, renderer, controls

export default {
name: "LandingPage",
    props: [],
    methods: {
        convertRemToPixels(rem) {    
            return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
        },
        animate() {
            requestAnimationFrame(this.animate)

            controls.update()

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
        camera.position.set(20, 18, -40)

        //Controls
        controls = new OrbitControls(camera, renderer.domElement)

        //Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff)
        scene.add(ambientLight)


        //Symmetry 1
        //===============================================================================//

        const sym1plane1 = new THREE.Mesh(
            new THREE.PlaneGeometry(4, 4),
            new THREE.MeshBasicMaterial({color: 0x50036f, side: THREE.DoubleSide})
        )
        sym1plane1.position.set(0, 10, 0)

        const sym1cone1 = new THREE.Mesh(
            new THREE.ConeGeometry(1, 4, 10),
            new THREE.MeshToonMaterial({color: 0x005b76, side: THREE.FrontSide})
        )
        sym1cone1.position.set(0, 10, -3)

        const sym1cone2 = new THREE.Mesh(
            new THREE.ConeGeometry(1, 4, 10),
            new THREE.MeshBasicMaterial({color: 0x005b76, side: THREE.FrontSide})
        )
        sym1cone2.position.set(0, 10, 3)

        scene.add(sym1plane1, sym1cone1, sym1cone2)
        //===============================================================================//



        //Symmetry 2
        //===============================================================================//

        const sym2box1 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 0.1, 0.1),
            new THREE.MeshBasicMaterial({color: 0x50036f, side: THREE.DoubleSide}) 
        )
        sym2box1.position.set(0, 10, -16)
        //sym2box1.rotation.set(0, 1.570796, 0)

        const sym2box2 = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2, 2),
            new THREE.MeshBasicMaterial({color: 0x005b76, side: THREE.DoubleSide}) 
        )
        sym2box2.position.set(0, 10, -13)

        const sym2box3 = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2, 2),
            new THREE.MeshBasicMaterial({color: 0x005b76, side: THREE.DoubleSide}) 
        )
        sym2box3.position.set(0, 10, -19)

        scene.add(sym2box1, sym2box2,sym2box3)
        //===============================================================================//



        //Symmetry 3
        //===============================================================================//

        const sym3cyl1 = new THREE.Mesh(
            new THREE.CylinderGeometry(2, 2, 5, 32),
            new THREE.MeshBasicMaterial({color: 0x005b76, side: THREE.DoubleSide}) 
        )
        sym3cyl1.position.set(0, 10, -30)

        const sym3box1 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 0.4, 0.4),
            new THREE.MeshBasicMaterial({color: 0x50036f, side: THREE.DoubleSide}) 
        )
        sym3box1.position.set(0, 10, -30)
        sym3box1.rotation.set(0, 0, 1.570796)


        scene.add(sym3cyl1, sym3box1)
        //===============================================================================//



        //Symmetry 4
        //===============================================================================//

        const sym4octa1 = new THREE.Mesh(
            new THREE.OctahedronGeometry(2, 0),
            new THREE.MeshBasicMaterial({color: 0x005b76, side: THREE.DoubleSide}) 
        )
        sym4octa1.position.set(0, 10, -45)

        const sym4box1 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 0.1, 0.1),
            new THREE.MeshBasicMaterial({color: 0x50036f, side: THREE.DoubleSide}) 
        )
        sym4box1.position.set(0, 10, -45)
        sym4box1.rotation.set(0, 0, 1.570796)

        const sym4box2 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 0.1, 0.1),
            new THREE.MeshBasicMaterial({color: 0x50036f, side: THREE.DoubleSide}) 
        )
        sym4box2.position.set(0, 10, -45)
        sym4box2.rotation.set(1.570796, 0, 0)

        const sym4box3 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 0.1, 0.1),
            new THREE.MeshBasicMaterial({color: 0x50036f, side: THREE.DoubleSide}) 
        )
        sym4box3.position.set(0, 10, -45)
        sym4box3.rotation.set(0, 1.570796, 0)

        scene.add(sym4octa1, sym4box1, sym4box2, sym4box3)
        //===============================================================================//

        //Listen for window resize
        window.addEventListener('resize', () => {
            renderer.setSize((window.innerWidth - this.convertRemToPixels(5)), window.innerHeight)
            renderer.setPixelRatio(window.devicePixelRatio)
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
    margin: 0;
    height: 100vh;
    display: block;
}

.info-button {
    position: absolute;
    right: 2rem;
    top: 2rem;
    z-index: 10;
    font-size: 1rem;
    font-weight: 400;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: var(--accent-color);
    padding: 0.25rem 1rem;
    border: var(--accent-color) 0.15rem solid;
    border-radius: 0.5rem;
    margin-right: 1rem;
    margin-top: 1rem;
    transition: var(--transition-speed);
    background: none;
}

.info-button:hover {
    transform: scale(1.03);
    color: var(--accent-color-focus);
}

/* Mobile */
@media only screen and (max-width: 600px) {
    .landing-page {
        left: 0;
        bottom: 5rem;
    }
}

</style>
