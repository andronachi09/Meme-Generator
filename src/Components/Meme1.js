import React, {useState} from "react"
import "../CSS/meme.css"
import memesData from "../memesData"

export default function Meme1() {
    
    // const [meme, setMeme] = useState("")
    const[meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="meme--form">
                <input
                    type = "text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type = "text"
                    placeholder = "Bottom text"
                    className="fomr--input"
                />
                <button className="form--button" onClick={getImage}> Get a new image! </button>
            </div>
            <img src={meme.randomImage} className="meme--image"></img>
        </main>
    )
}