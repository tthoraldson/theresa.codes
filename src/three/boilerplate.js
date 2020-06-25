// import * as THREE from 'three';
import React from 'react'
import { Canvas } from 'react-three-fiber'

import Scene from './views/scene'
import Controls from './components/controls'

class Three extends React.Component {

    render(){
        return (
            <Canvas>
                <Controls />
                <Scene />
            </Canvas>
        )
    }


}

export default Three;