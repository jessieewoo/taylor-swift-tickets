import React from 'react';
import "./App.css"
// import {Link} from 'react-router-dom';
//what is usestate?
//added react-router-dom

function Navbar() {
  return (
    <> 
    <nav className="nav">
    <a href="/"classname="site-title"> Taylor Swift
    </a>
    <ul>
        <li>
            <a href="/merch">Merch</a>
        </li>
    </ul>
    </nav>
    </>
  )
}

export default Navbar