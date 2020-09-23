import React from 'react';
import { Canvas } from 'react-three-fiber';

import ThreeTriangle from '../components/objects/triangle';

class ThreeScene extends React.Component {
  render(){
    console.log('render hit');
    return(
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ThreeTriangle position={[0, 0, -1]} />
      </Canvas>
    );
  } 
}


export default ThreeScene;