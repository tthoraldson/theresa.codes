import React, { useRef, useState } from "react"
import { useFrame} from "react-three-fiber"

function Triangle(props) {
    const mesh = useRef()
    // const [hovered, setHover] = useState(false)
    //const [active, setActive] = useState(false)

    console.log(window.innerWidth)
    console.log(window.innerHeight)
    console.log(props.test)
    
    // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

    return (
        // <mesh
        //     {...props}
        //     ref={mesh}
        //     //scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        //     onClick={(e) => console.log('hello') }
        //     onPointerOver={(e) => setHover(true)}
        //     onPointerOut={(e) => setHover(false)}>
        //     <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
        //     <meshStandardMaterial wireframe attach="material" color={hovered ? 'white' : 'white'} />
        // </mesh>

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