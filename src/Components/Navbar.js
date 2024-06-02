import "./NavbarStyles.css"
import mainLogo from '../Assets/logo.png'


function Navbar(){
    return(
        <>
        <nav>
            <div className="logo">
                <a href="/"><img src={mainLogo} alt="Blood Connect Logo" className="mainLogo"/></a>
                <h4 className="title"><a href="/">Blood Connect</a></h4> 
            </div>
            <ul className="navbuttons">
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Search Donors</a></li>
                <li><a href="/login">Login</a></li>
                <li><button id="register-button">Register</button></li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;