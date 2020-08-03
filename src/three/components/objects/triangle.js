import React, { useRef, useState } from 'react'
import { mesh, Geometry, useFrame } from 'react-three-fiber'

import { randomHeight } from '../../utils/random'

function triangle(props) {
    const mesh = useRef()
    
    return (
    <mesh>
        {...props}
        ref={mesh}
        <Geometry args={[1, 1, 1]}/>
    </mesh>
    )
    
}

export default triangle;