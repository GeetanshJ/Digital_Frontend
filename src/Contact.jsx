import React, { useState } from 'react'
import axios from 'axios'
import Footer from './components/Footer'
import Header from './components/Header'
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    const[first_name,setFirst] = useState("")
    const[last_name,setLast] = useState("")
    const[email,setEmail] = useState("")
    const[phone,setPhone] = useState("")
    const[doubt,setDoubt] = useState("")
    // const[all,setAll] = useState(false)
    const[show_text,setShow] = useState("SHOW DATA")
    const[userdata,setUserData] = useState({first_name:'',last_name_name:'',email:'',phone:'',doubt:''});

    let navigate = useNavigate();
    


    function showed(){
        if(show_text === "SHOW DATA" ){
            setShow("HIDE DATA");
        }

        else{
            setShow("SHOW DATA");
        }
    }
    
    function Contact(){
        if(first_name === "" || last_name === "" || email === "" || phone ==="" || doubt === ""){
            alert("Fill Up")
        }

        else if(phone.length !== 10 || Number(phone) < 6000000000 ){
            alert("Invalid Phone Number")
        }

        

        else{
            axios.post("http://localhost:8000/contact_user",userdata).then(
                response=>{
                    if(response.status === 200) {
                    }

                    else{
                    }
                }
            );
            alert("We will contact you on " + phone + " Thank you for contacting us")
            navigate("/")
        }
    }
    return (
        <div>
        <Header path="contact"/>
            <div class="contact_us_2">
                <div class="responsive-container-block big-container">
                    <div class="blueBG">
                    </div>
                    <div class="responsive-container-block container">
                        <form class="form-box">
                            <div class="container-block form-wrapper">
                                <p class="text-blk contactus-head">
                                    Get in Touch
                                </p>

                                <div class="responsive-container-block">
                                    <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                                        <p class="text-blk input-title">
                                            FIRST NAME*
                                        </p>
                                        <input class="input" type="text" onChange={(e)=>{setFirst(e.target.value) ; setUserData({...userdata,first_name:e.target.value})}}  id="ijowk" value={first_name} name="FirstName" required placeholder="Please enter first name..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            LAST NAME*
                                        </p>
                                        <input class="input" type="text" id="indfi" onChange={(e)=>{setLast(e.target.value) ; setUserData({...userdata,last_name:e.target.value})}} value={last_name} name="Last Name" required placeholder="Please enter last name..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            EMAIL*
                                        </p>
                                        <input class="input" type="email" id="ipmgh" onChange={(e)=>{setEmail(e.target.value); setUserData({...userdata,email:e.target.value})}} value={email} name="Email"  required placeholder="Please enter email..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            PHONE NUMBER*
                                        </p>
                                        <input class="input" type="text" pattern="\d{10}" id="imgis"onChange={(e)=>{setPhone(e.target.value) ; setUserData({...userdata,phone:e.target.value})}} value={phone} name="PhoneNumber" required placeholder="Please enter phone number..." />
                                    </div>
                                    <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                                        <p class="text-blk input-title">
                                            WHAT DO YOU HAVE IN MIND*
                                        </p>
                                        <textarea class="textinput"onChange={(e)=>{setDoubt(e.target.value) ; setUserData({...userdata,doubt:e.target.value})}} value={doubt} id="i5vyy" required placeholder="Please enter query..."></textarea>
                                    </div>
                                </div>

                                <div class="submit-btn1" onClick={showed}  >
                                    {show_text}
                                </div>
                                <button class="submit-btn" onClick={Contact}>
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>

            <div className="actual_p">
            <div className = {(show_text === "HIDE DATA"  ? " actual " : " demo ")}>
                        <p className={"data"}>First Name: {first_name}</p>
                        <p className={"data"}>Last Name: {last_name}</p>
                        <p className={"data"}>Email: {email}</p>
                        <p className={"data"}>Phone Number: {phone}</p>
                        <p className={"data"}>Query: {doubt}</p>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
