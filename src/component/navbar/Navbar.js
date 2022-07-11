import React,{useState} from 'react';
import "./Navbar.css";
import { ImMenu } from 'react-icons/im';
import { FaUserCircle } from 'react-icons/fa';
import { ImUserTie } from 'react-icons/im';
import { AiTwotoneSetting } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import {useNavigate} from "react-router-dom";
 
export default function Navbar(props) {
const navigate = useNavigate();

    function handleClickProfile(){
        navigate("/profile")
    }
    function handleClickDashboard(){
        navigate("/dashboard")
    }
    function handleClickSetting(){

    }

    const [click,setClick]= useState(false);
    function handleClickShow() {
        if(!click){
            setClick(true);
            document.getElementById("mySidenav").style.marginLeft = "200px";
        }else{
            setClick(false)
            document.getElementById("mySidenav").style.marginLeft = "0px";
        }
    }

    const [showUser,setShowUser]= useState(false);
    function clickshowUser(){
        if(!showUser){
            setShowUser(true);
        }else{
            setShowUser(false);
        }
    }
    function logout(){
        navigate("/")
        props.setAuth(false)
    }

    return (
        <div>
            <div className='flex'>
                <div className='menu'>
                    <ImMenu className='icn' onClick={handleClickShow} />
                    <span>LOGO</span>
                </div>
                <div>
                    <FaUserCircle className='icn' onClick={clickshowUser}/>
                   {showUser &&
                       <div className='show-user'>
                        <h5>Saurabh</h5>
                        <h5 onClick={logout}>Logout</h5>
                    </div>
                    }
                </div>
            </div>
            
            { click &&
            <div className='side-bar'>
                <div className='user-img'>
                    <div>
                        <img src="https://source.unsplash.com/c_GmwfHBDzk/200x200" alt="" />
                        <p className='name'>John Smith</p>
                        <div className='navbar-btn' onClick={handleClickProfile}>
                            <ImUserTie className='icn'/> <span>Profile</span>
                        </div>
                        <div className='navbar-btn' onClick={handleClickDashboard}>
                            <MdDashboard className='icn'/> <span>Dashboard</span>
                        </div>
                        <div className='navbar-btn' onClick={handleClickSetting}>
                            <AiTwotoneSetting className='icn'/> <span>Setting</span>
                        </div>
                     </div>
                </div>
                
            </div>
            }
        </div>
    )
}
