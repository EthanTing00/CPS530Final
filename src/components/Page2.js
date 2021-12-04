import React from 'react'
import Nav from '../components/Nav';

import image1 from '../images/Installation1.jpg'
import image2 from '../images/Installation2.jpg'
import image3 from '../images/Installation3.jpg'
import image4 from '../images/Installation4.jpg'
import image5 from '../images/Installation5.jpg'

function Page2() {
    return(
        <div>
            {/* <Nav /> */}
            <h1>hi</h1>
            <h1>Installation Steps</h1>
            <p>Download Node.js and run default installation</p>
            <img classname='tutorialimage' src={image1} height={500} width={1000} />
            <p>Create a new folder to store your React app.</p>
            <img classname='tutorialimage' src={image2} height={500} width={1000} />
            <p>Enter folder in command prompt and run 'npx create-react-app (name)'</p>
            <img classname='tutorialimage' src={image3} height={500} width={1000} />
            <p>Enter into newly created folder and run 'npm start'</p>
            <img classname='tutorialimage' src={image4} height={500} width={1000} />
            <img classname='tutorialimage' src={image5} height={500} width={1000} />


            

        </div>
    );
}

export default Page2;