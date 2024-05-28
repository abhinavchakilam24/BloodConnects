import "./NavbarStyles.css"
import mainLogo from './logo.png'


function Navbar(){
    return(
        <>
        <nav>
            <div className="logo">
                <a href="index.html"><img src={mainLogo} alt="Blood Connect Logo" className="mainLogo"/></a>
                <h4 className="title">Blood Connect</h4> 
            </div>
            <ul className="navbuttons">
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Search Donors</a></li>
                <li><a href="index.html">Login</a></li>
                <li><button id="register-button">Register</button></li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;