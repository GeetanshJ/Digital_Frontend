import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clients from "./Clients";
import Contact from "./Contact";
import Feature from "./Feature";
import Home from "./Home";
import Prices from "./Prices";
import Teams from "./Teams";
import Project from "./Project";
import SignUp from "./SignUp";
import Login from "./Login";
import Offers from "./Offers";
import Facts from "./Facts";

function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<Home/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="teams" element={<Teams/>} />
                    <Route path="prices" element={<Prices/>} />
                    <Route path="clients" element={<Clients/>} />
                    <Route path="feature" element={<Feature/>} />
                    <Route path="project" element={<Project/>} />
                    <Route path="signup" element={<SignUp/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="offer" element={<Offers/>} />
                    <Route path="facts" element={<Facts/>} />
                </Route>
            </Routes>
        </BrowserRouter>
        
            
    );
}

export default App;
