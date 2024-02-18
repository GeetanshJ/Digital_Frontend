import axios from 'axios';
import React, { useEffect, useState } from "react";
import "../src/App.css";
import img9 from "./assets/service_fig1.jpg";
import Footer from "./components/Footer";
import Header from "./components/Header";
const Project = () => {
    const [price_read, setPriceRead] = useState("READ MORE");
    const [price, setPriceText] = useState(false);
    function prices() {
        if (price_read === "READ MORE") {
            setPriceRead("READ LESS");
            setPriceText(true);
        } else {
            setPriceRead("READ MORE");
            setPriceText(false);
        }
    }

    const [header_text, setHeaderText] = useState("READ MORE");
    const [read_head, setHeaderReadText] = useState(false);
    const [readVal, setreadVal]=useState();
    function header_read(id) {
        if (header_text === "READ MORE") {
            setreadVal(id);
            setHeaderText("READ LESS");
            setHeaderReadText(true);
            
        } else {
            setHeaderText("READ MORE");
            setHeaderReadText(false);
        }
    }












    const [service, setservice] = useState([]);

    useEffect(() => {
        const getService = async () => {
            const res = await axios.get('http://localhost:8000/listservices')
            setservice(res.data);
        }

        getService();
    },[])



    const [project, setproject] = useState([]);

    useEffect(() => {
        const getProject = async () => {
            const res = await axios.get('http://localhost:8000/listprojects')
            setproject(res.data);
        }

        getProject();
    },[])
    return (
        <div>
            <Header path="project" />
            <div class="serve" id="offer-div">
                <div class="serve-container1">
                    <h3 class="services-h3">Services We Provide</h3>
                    <div class="services-text">
                        Web Development and Design: We specialize in creating captivating
                        and functional websites tailored to your brand's identity. Our web
                        development and design services encompass everything from
                        user-friendly interfaces to responsive design, ensuring a seamless
                        and engaging online presence for your business.
                    </div>

                    <div className={"price_read_class " + (price ? " price_active" : "")}>
                        Web Development and Design: We specialize in creating captivating
                        and functional websites tailored to your brand's identity. Digital
                        Marketing: Our digital marketing services are designed to boost your
                        online visibility and reach your target audience effectively. From
                        search engine optimization (SEO) and social media management to
                        pay-per-click (PPC) advertising, we offer a comprehensive range of
                        digital marketing strategies to drive traffic and conversions.
                    </div>
                    <button class="services-btn" onClick={prices}>
                        {price_read}
                    </button>
                </div>

                <div class="serve-container2">
                    <img src={img9} alt="img" />
                </div>

                <div class="logo-six">

                        {
                            service.map((data) => {
                                return <div class="logo-branding">
                                    <i class={data.service_logo} aria-hidden="true"></i>

                                    <div>{data.service_name}</div>
                                </div>
                            })
                        }
                </div>
            </div>

            <section id="fact-div">
                <div class="header-fig">
                    
                    {
                        project.map((data)=>{
                            
                        return     <div class="header-fig-container">
                                <img src={data.project_logo} alt="img" />
                                <h3>{data.project_name}</h3>
                                <div class="header-fig-text">{data.project_description}</div>
                                <div className={"read_more_header " + (read_head && readVal==data.project_id ? "read_active_header" : "")}>
                                    {data.project_description_l}
                                </div>
                                <button class="header-fig-btn" onClick={()=>{header_read(data.project_id)}}>
                                    {header_text && readVal==data.project_id ? header_text:"READ MORE"}
                                </button>
                                    </div>
                                })
                    }
                    
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Project;
