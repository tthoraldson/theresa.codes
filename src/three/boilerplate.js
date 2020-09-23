import React from 'react'

import Scene from './views/scene'
// import scriptLoader from 'react-async-script-loader';

class Three extends React.Component {
    render(){
        return (
            <div>
                <Scene />
            </div>
        )
    }
}

// export default scriptLoader(
//     //['https://cdnjs.cloudflare.com/ajax/libs/three.js/r99/three.min.js']
// )(Three);

export default Three;