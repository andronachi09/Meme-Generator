import React, { useState } from "react"
import "../CSS/meme.css"
import memesData from "../memesData"

export default function Meme(){

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    // function getMemeImage() {
    //     const memesArray = memesData.data.memes
    //     const  randomNumber = Math.floor(Math.random() * memesArray.length)
    //     const url = memesArray[randomNumber].url
    //     console.log(url)
    // }

    return(
        <main>
            <div className="meme--form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"/>
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <img src={memeImage} className="meme--image"></img>
        </main>
    )
}