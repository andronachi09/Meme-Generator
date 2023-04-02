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

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setMemeImage(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return(
        <main>
            <div className="meme--form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handleChange}
                />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={memeImage.randomImage} className="meme--image"></img>
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>     
        </main>
    )
}