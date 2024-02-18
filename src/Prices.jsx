import React, { useState} from "react";
import Header from './components/Header'
import Footer from './components/Footer'

const Prices = () => {




    
    const [proff_read, setProffRead] = useState("READ MORE");
    const [proff_text, setProffText] = useState(false);
    function proffessionals() {
        if (proff_read === "READ MORE") {
            setProffRead("READ LESS");
            setProffText(true);
        }
        
        else {
            setProffRead("READ MORE");
            setProffText(false);
        }
    }
    return (
        <div>
            <Header path="prices"/>
            <div class="proffesional" id="pricing-div">
                <div class="proffesional-1"></div>
                <div class="proffesional-2">
                    <div class="proffesional-2-1">
                        <span class="p-heading">
                            <h1>Professional</h1>
                            <p>Website Design</p>
                        </span>

                        <span class="p-price">
                            <p>
                                $<span>49</span>.99
                            </p>
                        </span>

                        <span class="p-overview">
                            <h2>Overview</h2>
                            <p
                                style={{
                                    fontFamily: "arial",
                                }}
                            >
                                Geetansh's website design services are exceptional. He combines creativity and technical expertise to create user-friendly, visually appealing websites that align perfectly with the brand's identity and goals, all while staying up-to-date with the latest design trends.

                            </p>
                        </span>
                    </div>
                    <div class="proffesional-2-2">
                        <div class="p-heading2">
                            <h1>Our Best</h1>
                            <p>Feature</p>
                        </div>
                        <ul class="p-list">
                        <li>Geetansh crafts unique website designs tailored to your brand.</li>
                            <li>His layouts prioritize easy navigation and a great user experience.</li>
                            <li>Websites work flawlessly on any device, enhancing accessibility.</li>

                        </ul>

                        <ul className={
                            "prof_more_header " +
                            (proff_text ? "prof_active_header" : "")
                        }>
                            <li>Geetansh crafts unique website designs tailored to your brand.</li>
                            <li>His layouts prioritize easy navigation and a great user experience.</li>
                            <li>Websites work flawlessly on any device, enhancing accessibility.</li>
                            <li> Every aspect, from fonts to imagery, receives meticulous attention.</li>
                        </ul>
                        <div class="p-btn-container">
                            <button class="p-btn"onClick={proffessionals}>
                        {proff_read}</button>
                        </div>
                    </div>
                </div>
                <div class="proffesional-3">
                    <div class="p3-container">
                    <h1 class="p3-h1">Take Your Website To The Next Level</h1>
                        <p class="p3-p1">
                        Taking your website to the next level requires a strategic focus on user experience, design, and communication to ensure it aligns with your brand's identity and objectives.
                        </p>
                        <p class="p3-p2">
                        Enhancing your website involves staying up-to-date with the latest technologies and design trends to remain competitive in the ever-evolving digital landscape.
                        </p>
                    </div>
                </div>
            </div>
                <Footer/>
        </div>
    )
}

export default Prices
