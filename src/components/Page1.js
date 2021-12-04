import React from 'react'
import Nav from '../components/Nav';

function Page1() {
    return(
        <div classname="info">
            <Nav />
            <h1>hi</h1>
            <h1>Summary Snapshot</h1>
            <h3>Frontend Framework: React</h3>
            <p>The React framework is one of the most widely used front-end frameworks in the industry. Over the last five years, usage of React has skyrocketed and it continues to trend upwards going into 2022. Some of the upsides of using React is the ease of use and the reusability of its components to speed up the development process. One of the downsides of React could be the reliance on JSX, a modified language that has little carry over to anything else. React is used by frontend developers at Facebook, Netflix and Salesforce.</p>
            
            <h3>Backend Framework: Node.js</h3>
            <p>Node.js has become increasingly popular over the last 5 years and is one of the most popular backend frameworks in the industry. One of the upsides of using Node.js is its ability to handle multiple concurrent requests while also being light and fast. The downsides of Node.js are the learning curve and possible performance issues.</p>

        </div>
    );
}

export default Page1;