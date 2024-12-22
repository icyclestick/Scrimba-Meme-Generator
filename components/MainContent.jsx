import { useEffect, useState } from "react"

export default function MainContent() {

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [newMeme, setNewMeme] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setNewMeme(data.data.memes))
    }, [])

    function getRandMeme() {
        const randNum = Math.floor(Math.random() * newMeme.length)
        const randMeme = newMeme[randNum].url
        setMeme(prevMeme => {
            return { ...prevMeme, imageUrl: randMeme }
        })
    }


    function handleChange(event) {
        const { value, name } = event.currentTarget;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getRandMeme}>Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} alt="" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}