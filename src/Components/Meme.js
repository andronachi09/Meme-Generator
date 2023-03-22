import React, { useState } from "react"
import "../CSS/meme.css"
import memesData from "../memesData"

export default function Meme(){

    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1c1uej.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

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
            <img src={memeImage.randomImage} className="meme--image"></img>
        </main>
    )
}