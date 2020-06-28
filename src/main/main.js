import React from 'react';

// Three.js Components


// Main Components
// import Nav from './nav';
import Header from './header';
// import About from './about';
// import Portfolio from './portfolio';
// import Writing from './writing';
// import Experience from './experience';
// import Contact from './contact';

class Main extends React.Component {
    render() {
        return (
            <div>
                {/* <Nav /> */}
                <Header />
                <main>
                    {/* <About />
                    <Portfolio />
                    <Writing />
                    <Experience />
                    <Contact /> */}
                    
                </main>  
            </div> 
        );
    }
}

export default Main;