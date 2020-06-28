import React from 'react';

import Footer from './footer'

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <h1>Theresa Thoraldson</h1>
                <h2>Machine Learning Engineer</h2>
                <Footer/>
            </div>
        );
    }
}

export default Header;