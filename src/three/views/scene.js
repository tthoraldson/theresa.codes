import React from 'react';
//import { useThree, render } from 'react-three-fiber';

import ThreeTriangle from '../components/objects/triangle';

class ThreeScene extends React.Component {
  render(){
    console.log('render hit');
    return(
      <div>
        {/* <ThreeTriangle/> */}
      </div>
    );
  } 
}


export default ThreeScene;