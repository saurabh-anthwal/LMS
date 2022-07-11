import React from "react";
import "./Login.css";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { GrTwitter } from "react-icons/gr";
import {useNavigate} from "react-router-dom";

export default function Login(props) {
    const navigate = useNavigate()
    function login(){
        navigate("/profile")
        props.setAuth(true)
    }

    function signup(){
        navigate("/signin")
    }
    return (
        <div className="login-bg">
            <div className="grid">
                <div className="left-side">
                    <div class="content-wrapper">
                        <h3>
                            <span>Lead</span> Management System
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do</p>
                    </div>
                </div>

                <div className="right-side">
                    <div className="login-box">
                        <h2>LOGIN</h2>
                        <div className="login-form">
                            <input type="text" placeholder="username" />
                            <br />
                            <br />
                            <input type="text" placeholder="password" />
                        </div>
                        <div className="btn">
                            <button onClick={login}>Login</button>
                        </div>
                        <div className="forget-password">
                            <a href="">Forget Password?</a>
                        </div>

                        <div className="login-icons">
                            <BsFacebook className="icn" />  
                            <GrTwitter className="icn" />
                            <FcGoogle className="icn" /> 
                        </div>
                        <div className="new-user">
                            <span>New User?</span><a onClick={signup}>SIGNUP</a>
                        </div>
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    );
}
