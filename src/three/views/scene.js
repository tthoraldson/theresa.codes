import React from 'react';
//import { useThree, render } from 'react-three-fiber';

import ThreeTriangle from '../components/objects/triangle';

class ThreeScene extends React.Component {
  render(){
    console.log('render hit');
    return(
      <div>
          <mesh>
              <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
              <meshNormalMaterial attach='material' />
          </mesh>
        <ThreeTriangle/>
      </div>
    );
  } 
}


export default ThreeScene;