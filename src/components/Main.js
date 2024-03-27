import React from "react";
import reactlogo from "../images/logo512.png"

export default function Navbar(){
    return (
        <main>
            <h1 className="main--title">Fun Facts about React</h1>
            <ul className="main-facts">
                <li>Was first released in 2013</li>
                <li>Was originaly created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
            </ul>
            {/* <img src={reactlogo} className="main--icon"/> */}
        </main>
    )
}