// This page is made by Rasmus

import { useState } from "react"

export default function PreferenceCard(props) {
    
    const [toggle, setToggle] = useState(false)
    function toggleFunction() {
        setToggle(!toggle)
        console.log('clicked')
        console.log(toggle);
    }


    return (
        // When clicked, useState changes, css class added, and reverse.
        <div className={"preferenceCard " + (toggle ? "clicked" : null)} onClick={toggleFunction}>
            <h3>{props.name}</h3>
        </div>
    )
}