import React from "react";
import "../login/Login.css";
import {useNavigate} from "react-router-dom";

export default function Signin() {
    const navigate = useNavigate()
    function login(){
        navigate("/")
    }
    function signup(){
        navigate("/")
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
                        <h2>SIGNUP</h2>
                        <div className="login-form">
                            <input type="text" placeholder="Full Name" />
                            <br />
                            <br />
                            <input type="text" placeholder="Email" />
                            <br />
                            <br />
                            <input type="text" placeholder="Password" />
                        </div>
                        <div className="btn">
                            <button onClick={signup}>Signup</button>
                        </div>
                        <div className="new-user">
                            <span>Already a User?</span><a onClick={login}>Login</a>
                        </div>
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    );
}
