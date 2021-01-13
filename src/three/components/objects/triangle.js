import React, { useRef, useState } from "react"
import { useFrame} from "react-three-fiber"

function Triangle(props) {
    const mesh = useRef()
    console.log(props.test);
    return (
        <mesh>
        <geometry attach="geometry">
        <vector3 attachArray="vertices" args={[0, 0, 0]}></vector3>
        <vector3 attachArray="vertices" args={[-5, 0, 0]}></vector3>
        <vector3 attachArray="vertices" args={[1, 1, 0]}></vector3>
        <face3 attachArray="faces" args={[0, 1, 2]}></face3>
        </geometry>
        <meshBasicMaterial wireframe attach="material" color="white" />
        </mesh>
    )
}  

export default Triangle;