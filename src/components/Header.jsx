import globeLogo from "../assets/globe.png"

export default function Header() {
    return (
        <header> 
            <img src = {globeLogo} alt = "globe icon"/> 
            <h1>Samson's Travel Journal </h1>
        </header>
    )
}