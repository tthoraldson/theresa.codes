import React, { useRef, useState } from "react"
import { mesh, useFrame } from 'react-three-fiber'

import { randomHeight } from '../../utils/random'

function Triangle(props) {
    const mesh = useRef()
    
    return (
    <mesh>
        ref={mesh}
        <geometry args={[1, 1, 1]}/>
    </mesh>
    )
    
}

export default Triangle;