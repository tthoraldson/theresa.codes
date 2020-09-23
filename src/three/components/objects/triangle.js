import React, { useRef, useState } from "react"
import { useFrame} from "react-three-fiber"

function Triangle(props) {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    //const [active, setActive] = useState(false)
    
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

    return (
        <mesh
            {...props}
            ref={mesh}
            //scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e) => console.log('hello') }
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            <meshStandardMaterial wireframe attach="material" color={hovered ? 'white' : 'white'} />
        </mesh>
    )
}  

export default Triangle;