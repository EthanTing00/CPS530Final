import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav class="navbar-default">
            {/* <Link class="home" to='/'>Home</Link> */}
            <Link class="button" to='/page1'>1</Link>
            <Link class="button" to='/page2'>2</Link>
            <Link class="button" to='/page3'>3</Link>
            <Link class="button"to='/page4'>4</Link>
            <Link class="button"to='/page5'>5</Link>
            <Link class="button" to='/page6'>6</Link>
        </nav>
    )
    

}

export default Nav;