import "./NavbarStyles.css"
import mainLogo from '../Assets/logo.png'
import { Button, SHAPE } from "baseui/button";
import { useNavigate, Link} from "react-router-dom";


function Navbar(){
    const navigate = useNavigate();
    const gotToRegisterPage=()=>{
        navigate("/register");
      };

    return(
        <>
        <nav>
            <div className="logo">
                <a href="/"><img src={mainLogo} alt="Blood Connect Logo" className="mainLogo"/></a>
                <h4 className="title"><a href="/">Blood Connect</a></h4> 
            </div>
            <ul className="navbuttons">
                    <li><Link to="/about" className="navbuttons-links">About</Link></li>
                    <li><Link to="/search" className="navbuttons-links">Find Donors</Link></li>
                    <li><Link to="/login" className="navbuttons-links">Login</Link></li>
                    <li><Button 
      onClick={() => gotToRegisterPage()}
      shape={SHAPE.pill}
    >
      Register
    </Button></li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;