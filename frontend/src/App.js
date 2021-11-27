import React from "react";
import Login from "./Login/index";
import Register from "./Login/register";
import "./components/header/header.css";
import "./Login/log.css";
import "./components/main/main.css";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Main from "./components/main/index";
import Main2 from "./components/main/main2"
import Dashboard from "./components/dashboard";
import "./components/footer/footer.css";
import "./components/dashboard/dashboard.css";
import {  Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Header />
      
      <Routes>

     <Route path="/" element={<Main/>}/>
     <Route path="register" element={<Register/>}/>
     <Route path="login" element={<Login/>}/>
      <Route path="home" element={<Main2/>}/>
      <Route path="dash" element ={<Dashboard/>}/>
     
      

      </Routes>
    

    
      <Footer />
    </div>
  );
};

export default App;
