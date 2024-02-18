import React from 'react';
import '../src/App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import img15 from './assets/member_fig1.jpg';
import img16 from './assets/member_fig2.jpg';
import img17 from './assets/member_fig3.jpg';
import Footer from './components/Footer';
import Header from './components/Header';

const Clients = () => {
    const [client_name, setClient] = useState("")
    const [creativity, setCreativity] = useState("")
    const [designing, setDesigning] = useState("")
    const [team_work, setTeamWork] = useState("")
    const [feedback, setFeedback] = useState("")
    const [service_id, setServiceUsed] = useState("")
    const [show_text, setShow] = useState("SHOW DATA")
    const [userdata, setUserData] = useState({ client_name: '', creativity: '', designing: '', team_work: '', feedback: '', service_id: '' });

    const [feed, setFeed] = useState([]);
    const [service, setService] = useState([]);

    useEffect(() => {
        const getFeed = async () => {
            const res = await axios.get('http://localhost:8000/listfeedbacks')
            setFeed(res.data);
        }

        getFeed();
    }, [])


    useEffect(() => {
        const getService = async () => {
            const res = await axios.get('http://localhost:8000/listservices')
            setService(res.data);
        }

        getService();
    }, [])
    const calculateBarWidth1 = (designing) => {
        return `${(designing * 10 )}%`;
    };

    const calculateBarWidth2 = (team_work) => {
        return `${team_work * 10 }%`;
    };

    const calculateBarWidth = (creativity) => {
        return `${(creativity * 10 )}%`;
    };

    function showed() {
        if (show_text === "SHOW DATA") {
            setShow("HIDE DATA");
        }

        else {
            setShow("SHOW DATA");
        }
    }

    function Submit() {
        if (client_name === "" || feedback === "" || service_id === "") {
            alert("Fill Up")
        }

        else if ((creativity < 1 || creativity > 10) || (designing < 1 || designing > 10) || (team_work < 1 || team_work > 10)) {
            alert("Enter Number Between 1 to 10")
        }



        else {
            axios.post("http://localhost:8000/feedback_user", userdata).then(
                response => {
                    if (response.status === 200) {
                    }

                    else {
                    }
                }
            );
        }
    }
    return (
        <div>
            <Header path="clients" />
            <div class="contact_us_2">
                <div class="responsive-container-block big-container">
                    <div class="blueBG">
                    </div>
                    <div class="responsive-container-block container">
                        <form class="form-box">
                            <div class="container-block form-wrapper">
                                <p class="text-blk contactus-head">
                                    Submit Feedback
                                </p>

                                <div class="responsive-container-block">
                                    <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                                        <p class="text-blk input-title">
                                            CLIENT NAME*
                                        </p>
                                        <input class="input" type="text" onChange={(e) => { setClient(e.target.value); setUserData({ ...userdata, client_name: e.target.value }) }} id="ijowk" value={client_name} name="client_name" required placeholder="Please enter your name..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            CREATIVITY *
                                        </p>
                                        <input class="input" type="number" id="indfi" onChange={(e) => { setCreativity(e.target.value); setUserData({ ...userdata, creativity: e.target.value }) }} value={creativity} name="creativity" required placeholder="Please enter number between 1-10 for the Creativity..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            DESIGNING*
                                        </p>
                                        <input class="input" type="number" id="ipmgh" onChange={(e) => { setDesigning(e.target.value); setUserData({ ...userdata, designing: e.target.value }) }} value={designing} name="designing" required placeholder="Please enter number between 1-10 for the Designing..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            TEAM COORDINATION*
                                        </p>
                                        <input class="input" type="number" pattern="\d{2}" id="imgis" onChange={(e) => { setTeamWork(e.target.value); setUserData({ ...userdata, team_work: e.target.value }) }} value={team_work} name="PhoneNumber" required placeholder="Please enter number between 1-10 for the Team Coordination..." />
                                    </div>
                                    <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                                        <p class="text-blk input-title">
                                            FEEDBACK*
                                        </p>
                                        <textarea class="textinput" onChange={(e) => { setFeedback(e.target.value); setUserData({ ...userdata, feedback: e.target.value }) }} value={feedback} id="i5vyy" required placeholder="Please write the Feedback..."></textarea>
                                    </div>

                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            SERVICE USED*
                                        </p>
                                        <select onChange={(e) => { setServiceUsed(e.target.value); setUserData({ ...userdata, service_id: e.target.value }) }} value={service_id} id="i5vyy" required placeholder="Please select the service used...">
                                            {service.map((data) => (
                                                <option key={data.service_id} value={data.service_id}>
                                                    {data.service_name}
                                                </option>
                                            ))}
                                        </select>





                                    </div>
                                </div>

                                <div class="submit-btn1" onClick={showed}  >
                                    {show_text}
                                </div>
                                <button class="submit-btn" onClick={Submit}>
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
            <div className="actual_p">
                <div className={(show_text === "HIDE DATA" ? " actual " : " demo ")}>
                    <p className={"data"}>Client Name: {client_name}</p>
                    <p className={"data"}>Creativity: {creativity}</p>
                    <p className={"data"}>Designing: {designing}</p>
                    <p className={"data"}>Team Work: {team_work}</p>
                    <p className={"data"}>Feedback: {feedback}</p>
                    <p className={"data"}>Service Used: {service_id}</p>
                </div>
            </div>





            {
                feed.map((data) => {

                    return <div class="member" id="client-div">

                        <div class="member-container1">
                            <h2 class="member-container1-h2">{data.client_name}</h2>

                            <div class="member-ranges">
                                <div class="member-ranges-text">Creativity</div>
                                <span style={{ width: calculateBarWidth(data.creativity), float: "left", height: "0.8rem", borderRadius: "1rem", background:"linear-gradient(90deg, rgb(255, 124, 2), rgb(0, 76, 255))" }}></span>
                                <span class="member-ranges-text1">{data.creativity}</span>
                                <div class="member-ranges-bar1"></div>
                            </div>


                            <div class="member-ranges">
                                <div class="member-ranges-text">Designing</div>
                                <span style={{ width: calculateBarWidth1(data.designing), float: "left", height: "0.8rem", borderRadius: "1rem", background: "linear-gradient(90deg, rgb(255, 124, 2), rgb(0, 76, 255))" }}></span>
                                <span class="member-ranges-text1">{data.designing}</span>
                                <div class="member-ranges-bar1"></div>
                            </div>

                            <div class="member-ranges">
                                <div class="member-ranges-text">Team Work</div>
                                <span style={{ width: calculateBarWidth2(data.team_work), float: "left", height: "0.8rem", borderRadius: "1rem", background: "linear-gradient(90deg, rgb(255, 124, 2), rgb(0, 76, 255))" }}></span>
                                <span class="member-ranges-text1">{data.team_work}</span>
                                <div class="member-ranges-bar1"></div>
                            </div>
                        </div>


                        <div class="member-container2">
                            <img src={img17} alt="img" />
                        </div>

                        <div class="member-container3">
                            <div class="member-container3-text">{data.feedback}</div>
                            <div class="member-container3-logos">
                                <a href="https://www.facebook.com/Geetansh_Jain" style={{ color: "white" }} target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="https://www.google.com" style={{ color: "white" }} target="_blank"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
                                <a href="https://www.google.com/" style={{ color: "white" }} target="_blank"><i class="fa fa-google-wallet" aria-hidden="true"></i></a>
                                <a href="https://www.youtube.com/" style={{ color: "white" }} target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                })
            }



            <Footer />
        </div>
    )
}

export default Clients
