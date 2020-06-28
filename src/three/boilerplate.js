// import * as THREE from 'three';
import React from 'react'
import { Canvas } from 'react-three-fiber'

import ThreeScene from './views/scene'
import Controls from './components/controls'

class Three extends React.Component {

    render(){
        return (
            <Canvas>
                <Controls />
                <ThreeScene />
            </Canvas>
        )
    }
}

export default Three;