import React, { useState , useEffect, useRef } from 'react'
import "./Accord.css"
import Chevron from "./chevron-double-down.svg"
export default function Accord() {
    
    const [toggle , setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState()
    const toggleState = ()=>{
        setToggle(!toggle);
    }

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])
    return (
        <div className="accord">
            <div
            onClick={toggleState}
            className="accord-visible">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={Chevron} alt="chevron down" />
            </div>

            <div ref={refHeight} 
            className={toggle ? 'accord-toggle animated' : "accord-toggle"}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            >
                <p
                aria-hidden={toggle ? "true" : "false"}
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum reprehenderit dolorum voluptate! Labore enim, deserunt excepturi, minima rem ab dignissimos pariatur recusandae quod architecto ducimus? Id laborum expedita minima nemo!</p>
            </div>
        </div>
    )
}
