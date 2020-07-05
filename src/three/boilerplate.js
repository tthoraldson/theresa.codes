// import * as THREE from 'three';
import React from 'react'
import { Canvas } from 'react-three-fiber'

import ThreeScene from './views/scene'
import Controls from './components/controls'
import scriptLoader from 'react-async-script-loader';

class Three extends React.Component {
    render(){
        return (
            <Canvas>
                {/* <ThreeScene /> */}
            </Canvas>
        )
    }
}

export default scriptLoader(
    ['https://cdnjs.cloudflare.com/ajax/libs/three.js/r99/three.min.js']
)(Three);