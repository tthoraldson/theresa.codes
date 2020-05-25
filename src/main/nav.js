import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div id="navbar">
                <a href=".about">About</a>
                <a href=".portfolio">Portfolio</a>
                <a href=".publications">Publications</a>
                <a href=".experience">Experience</a>
                <a href=".contact">Contact</a>
            </div>
        );
    }
}

// TODO:
//Sticky Header Logic - Subject to being moved/removed
// window.onscroll = function() {myFunction()};

// var header = document.getElementById("navbar");
// var sticky = window.innerHeight;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.remove("not-sticky");
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//     header.classList.add("not-sticky");
//   }
// }

export default Nav;