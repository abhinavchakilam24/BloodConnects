import Navbar from "../Components/Navbar";
import { Input } from "baseui/input";
import { Button, SHAPE } from "baseui/button";
import React from "react";
import loginImage from '../Assets/doctor-login-logo.png'
import './LoginStyles.css'


function Login(){
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    return(
        <>
            <Navbar></Navbar>
            <div className="wrapper">
                <div className="image-container">
                    <img src={loginImage} height={600} width={600} alt="a doctor smiling"/>
                </div>
                <div className="login-container">
    <form>
        <h1 className="login-heading">Login</h1>
        <div className="email-box">
            <p className="login-label">Email</p>
            <Input
      value={email}
      onChange={e => setEmail(e.target.value)}
      placeholder="name@example.com"
      clearOnEscape
    />
        </div>
        <div className="password-container">
            <p className="login-label">Password</p>
            <Input
      value={password}
      type="password"
      onChange={e => setPassword(e.target.value)}
    />
        </div>
        <div className="forgot-password"><p>Forgot Password? <span>Click Here</span></p></div>
            <div className="submit-box">
            <Button
      onClick={() => alert("click")}
      shape={SHAPE.pill}
    >
      Submit
    </Button>
        </div>
    </form>
</div>
            </div>

        </>
    )
}
export default Login;