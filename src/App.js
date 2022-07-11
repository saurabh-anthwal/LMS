import React,{useState} from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Dashboard from './component/dashboard/Dashboard';
import Profile from './component/profile/Profile';
import Login from './component/login/Login';
import Signin from './component/signin/Signin';

// import react router dom//
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom"

export default function App (){
  const [auth,setAuth]= useState(false)
    return (
      <BrowserRouter>
      <div className="App">
           
      {auth && <Navbar auth={auth} setAuth={setAuth}/>}
      
        <div id='mySidenav'>
          <Routes>

      <Route path="/" element={<Login setAuth={setAuth}/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/profile" element={<Profile/>}/>
          
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    );
  }
