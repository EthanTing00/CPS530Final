import React from 'react'
import Nav from '../components/Nav';

import image1 from '../images/Installation5.jpg'
import Tutorial1 from '../images/Tutorial1.jpg'
import Tutorial2 from '../images/Tutorial2.jpg'
import Tutorial3 from '../images/Tutorial3.jpg'
import Tutorial4 from '../images/Tutorial4.jpg'
import Tutorial5 from '../images/Tutorial5.jpg'
import Tutorial6 from '../images/Tutorial6.jpg'
import Tutorial7 from '../images/Tutorial7.jpg'



function Page3() {
    return(
        <div>
            {/* <Nav /> */}
            <h1>hi</h1>
            <h1>Frontend Tutorial</h1>
            <p>Creating a good looking webpage with React</p>
            <a>In this tutorial we will be creating a portfolio email form with a navbar.</a>
            <img classname='tutorialimage' src={image1} height={500} width={1000} />
            <p>Creating a Navbar</p>
            <p>Creating a Components folder in src directory.</p>
            <img classname='tutorialimage' src={Tutorial1} height={500} width={1000} />
            <p>Create a Nav.js file and corresponding css file.</p>
            <img classname='tutorialimage' src={Tutorial2} height={500} width={1000} />
            <p>Within Nav.js use the link element to create links to pages</p>
            <img classname='tutorialimage' src={Tutorial3} height={500} width={1000} />
            <p>In App.js, import BroswerRouter, Routes and Route from react-router-dom</p>
            <img classname='tutorialimage' src={Tutorial4} height={500} width={1000} />
            <p>Use imports as so to link navbar items to corresponding links</p>
            <p>Call the Navbar in App.js as so.</p>
            <img classname='tutorialimage' src={Tutorial5} height={500} width={1000} />
            <p>Creating a stylized form.</p>
            <p>Use Html's form element to ask for appropriate information</p>
            <p>Be sure to include proper labels and input elements</p>
            <p>Add an input element with type='submit'</p>
            <img classname='tutorialimage' src={Tutorial6} height={500} width={1000} />
            <p>In App.css file add appropriate styling</p>
            <img classname='tutorialimage' src={Tutorial7} height={500} width={1000} />
        </div>
    );
}

export default Page3;