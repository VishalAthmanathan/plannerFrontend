import react, { useState } from "react";
import axios from "axios";
import "./component_CSS/login.css";
import usericon from "./assets/person.png";
import emailicon from "./assets/email.png";
import passicon from "./assets/password.png";


function loginSignup() {

    const [page, setPage] = useState("Login")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async() => {
        axios.post('/userReg', {
          username: name,
          mail: email,
          password: password
        }).then((response)=>{
          console.log(response);
        });
      }

    return (
        <div className="login_container">
            <div className="login_container_header">
                <div className="login_container_header_text">
                    {page}
                </div>
                <div className="login_container_underline"></div>
            </div>
            <form>
                <div className="login_container_inputs">
                    {page === "Login" ? <div></div> : <div className="login_container_inputs_input">
                        <img src={usericon} alt=""></img>
                        <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
                    </div>}

                    <div className="login_container_inputs_input">
                        <img src={emailicon} alt=""></img>
                        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="login_container_inputs_input">
                        <img src={passicon} alt=""></img>
                        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                </div>
                {/* {action==="Sign Up"?<div></div>:<div className="container_forgotPassword">Lost Password? <span>Click Here !</span></div>} */}
                <div className="login_container_inputs_submitContainer">
                <div className={page === "Login" ? "login_container_inputs_submitContainer_submit gray" : "login_container_inputs_submitContainer_submit"} onClick={() => { setPage("Sign Up"); register(); }}>Sign Up</div>
                    <div className={page === "Sign Up" ? "login_container_inputs_submitContainer_submit gray" : "login_container_inputs_submitContainer_submit"} onClick={() => { setPage("Login") }} >Log In</div>
                </div>
            </form>
        </div>
    )
}
export default loginSignup