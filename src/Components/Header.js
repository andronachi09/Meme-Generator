import React from "react"
import "../CSS/header.css"
import Trollface from "../images/trollface.png"

export default function Header() {
    return(
        <header className="header">
            <img className="header--image" src={Trollface} alt="Logo"></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--h4">React Course - Project 3</h4>
        </header>
    )
}