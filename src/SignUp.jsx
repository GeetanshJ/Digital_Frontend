import React,{useState} from 'react'
import axios from 'axios';
import Header from './components/Header'
import Footer from './components/Footer';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const[first_name,setFirst] = useState("")
    const[last_name,setLast] = useState("")
    const[email,setEmail] = useState("")
    const[pass1,setPass1] = useState("")
    const[pass2,setPass2] = useState("")
    const[phone,setPhone] = useState("")

    const[userdata,setUserData] = useState({email:'',password:'',first_name:'',last_name_name:'',phone:''});

    const[show_text,setShow] = useState("SHOW DATA")

    let navigate = useNavigate();
    function showed(){
        if(show_text === "SHOW DATA"){
            setShow("HIDE DATA");
        }

        else{
            setShow("SHOW DATA");
        }

    }


    function signed(){

        
        if(pass1 !== pass2 ){
            alert("Password Not Matched");
        }

        else if(pass1 === "" || pass2 === "" || first_name === "" || last_name === "" || phone === "" || email === ""){
            alert("Fill Up")
        }

        else if(phone.length !== 10 || Number(phone) < 6000000000 ){
            alert("Invalid Phone Number")
        }

        
        else{
            axios.post("http://localhost:8000/signup_user",userdata).then(
                response=>{
                    if(response.status === 200) {
                    }
    
                    else{
                    }
                }
            );
            alert("Signed In");
            navigate("/login")
        }
    }


    
    return (

        <div>
            <Header path="signup" />

            <div class="contact_us_2">
                <div class="responsive-container-block big-container">
                    <div class="blueBG">
                    </div>
                    <div class="responsive-container-block container">
                        <form class="form-box">
                            <div class="container-block form-wrapper">
                                <p class="text-blk contactus-head">
                                    SIGN-UP
                                </p>
                                <p class="text-blk contactus-subhead">
                                Please fill in this form to create an account.
                                </p>
                                <div class="responsive-container-block">
                                <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            EMAIL*
                                        </p>
                                        <input class="input" id="ipmgh"onChange={(e)=>{setEmail(e.target.value); setUserData({...userdata,email:e.target.value})}} value={email} name="Email"  required placeholder="Please enter email..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            PASSWORD*
                                        </p>
                                        <input class="input" id="imgis" name="Password" onChange={(e)=>{setPass1(e.target.value); setUserData({...userdata,password:e.target.value})}} value={pass1} type='password' required placeholder="Please enter password..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            CONFIRM PASSWORD*
                                        </p>
                                        <input class="input" id="imgis" name="Password" type='password' onChange={(e)=>{setPass2(e.target.value)}} value={pass2} required placeholder="Please enter password..." />
                                    </div>
                                    <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                                        <p class="text-blk input-title">
                                            FIRST NAME*
                                        </p>
                                        <input class="input" id="ijowk" onChange={(e)=>{setFirst(e.target.value) ; setUserData({...userdata,first_name:e.target.value})}}  value={first_name} name="FirstName" required placeholder="Please enter first_name name..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            LAST NAME*
                                        </p>
                                        <input class="input" id="indfi" onChange={(e)=>{setLast(e.target.value) ; setUserData({...userdata,last_name:e.target.value})}} value={last_name} name="Last Name" required placeholder="Please enter last_name_name name..." />
                                    </div>

                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            Phone Number
                                        </p>
                                        <input class="input" id="imgis" name="phone" type="text" pattern="\d{10}" onChange={(e)=>{setPhone(e.target.value);; setUserData({...userdata,phone:e.target.value})}} value={phone} required placeholder="Please enter password..." />
                                    </div>
                                    
                                </div>

                                <div class="submit-btn1" onClick={showed}>{show_text}</div>

                                <button class="submit-btn" value={"send"} onClick={signed} target="home">SIGN UP</button>
                            </div>
                            
                            <div style={{textAlign:'center',marginTop:'1rem',fontSize:'1.3rem'}}> Already a Member?</div>
                            <div  style={{textAlign:'center',marginTop:'0.5em'}}><Link to="/login" style={{textAlign:'center',fontSize:'1.3rem',textDecoration:'none',color:'Orange'}}>LOGIN</Link></div>

                        </form>

                        </div>
                </div>
            </div>
            <div className="actual_p">


            <div className = {(show_text === "HIDE DATA" ? " actual " : " demo ")}>
                <p className={"data"}>First Name: {first_name}</p>
                <p className={"data"}>Last Name: {last_name}</p>
                <p className={"data"}>Email: {email}</p>
                <p className={"data"}>Password: {pass1}</p>
                <p className={"data"}>Phone Number: {phone}</p>

            </div>
            </div>
            <Footer />
        </div>
                        )
}

export default SignUp