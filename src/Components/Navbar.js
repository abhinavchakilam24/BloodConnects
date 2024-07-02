import "./NavbarStyles.css"
import mainLogo from '../Assets/logo.png'
import { Button, SHAPE } from "baseui/button";
import { useNavigate,  NavLink} from "react-router-dom";


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
                    <li><NavLink to="/about" className="navbuttons-links">About</NavLink></li>
                    <li><NavLink to="/find" className="navbuttons-links">Find Donors</NavLink></li>
                    <li><NavLink to="/login" className="navbuttons-links">Login</NavLink></li>
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