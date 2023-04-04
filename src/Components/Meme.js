import React, { useState, useEffect } from "react"
import "../CSS/meme.css"

export default function Meme(){

    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1c1uej.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
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