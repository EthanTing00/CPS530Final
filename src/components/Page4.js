import React from 'react'
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';


function Page4() {
    return(
        <div>
            {/* <Sidebar /> */}
            <h1>Page4 :D</h1>
            <h1 class="Hero">Hi! Welcome to my Portfolio Website!</h1>
            <h2>Send a Message:</h2>
            <form>
                <div>
                <label>Your Name:</label>
                <input></input>

                <label>Email Address:</label>
                <input></input>

                <label>Phone Number:</label>
                <input></input>

                <label>Message:</label>
                <input type="Message"></input>

                </div>
                <input type="Submit"></input>
            </form>
        </div>
    );
}

export default Page4;