import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
// import Home from './Home'
import {  Link, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [show_text, setShow] = useState("SHOW DATA")
    const navigate = useNavigate();

    function showed() {

        if (show_text === "SHOW DATA") {
            setShow("HIDE DATA");
        }

        else {
            setShow("SHOW DATA");
        }

    }

    async function logged(e) {
            e.preventDefault()
            if (email === "" || password === "") {
                alert("Enter details first");
                return;
            }
    
            const res = await axios.post(
                "http://localhost:8000/login",
                {
                    email: email,
                    password: password,
                }
            );
    
            if (res.data.message === "success") {
                navigate("/");
            }
            else {
                alert("Password or username invalid");
            }
        
    }
    

    return (

        <div>
            <Header path="login" />
            <div class="contact_us_2">
                <div class="responsive-container-block big-container">
                    <div class="blueBG">
                    </div>
                    <div class="responsive-container-block container">
                        <form  class="form-box">
                            <div class="container-block form-wrapper">
                                <p class="text-blk contactus-head">Login</p>

                                <div class="responsive-container-block">

                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            EMAIL*
                                        </p>
                                        <input class="input" id="ipmgh" name="Email" onChange={(e) => { setEmail(e.target.value) }} value={email} required placeholder="Please enter email..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            PASSWORD*
                                        </p>
                                        <input class="input" id="imgis" name="Password" onChange={(e) => { setPass(e.target.value)}} value={password} type='password' required placeholder="Please enter password..." />
                                    </div>
                                </div>
                                <div class="submit-btn1" onClick={showed} >
                                    {show_text}
                                </div>

                                <button class="submit-btn" onClick={(e)=>{logged(e)}}>LOGIN</button>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '1.3rem' }}>Want To SIGNUP?</div>
                            <div style={{ textAlign: 'center', marginTop: '0.5em' }}><Link to="/signup" style={{ textAlign: 'center', fontSize: '1.3rem', textDecoration: 'none', color: 'Orange' }}>SIGNUP</Link></div>


                        </form>
                    </div>
                </div>
                <div className="actual_p">

                    <div className={(show_text === "HIDE DATA" ? " actual " : " demo ")}>
                        <p className={"data"}>Email: {email}</p>
                        <p className={"data"}>Password: {password}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
