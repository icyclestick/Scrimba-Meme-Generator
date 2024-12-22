import trollFace from "../src/assets/troll-face-76-1.png"

export default function Header() {
    return (
        <header className="header">
            <img
                src={trollFace}
            />
            <h1>Meme Generator</h1>
        </header>
    )
}