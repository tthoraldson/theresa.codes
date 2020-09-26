import React from 'react';
import { Canvas } from 'react-three-fiber';

import ThreeTriangle from '../components/objects/triangle';

class Scene extends React.Component {
  render(){
    console.log('render hit');
    return(
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ThreeTriangle position={[0, 0, 0]} test="hello" />
      </Canvas>
    );
  } 
}


export default Scene;