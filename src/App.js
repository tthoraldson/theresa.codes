import React from 'react';

import './vendor/reset.css';
import './App.css';
import Main from './main/main';
import Three from './three/boilerplate';


function App() {
  return (
    <div>
      <Three />
      <Main className="Content"/>
    </div>
  );
}

export default App;
