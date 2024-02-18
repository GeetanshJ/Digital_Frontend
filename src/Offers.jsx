import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import img20 from "./assets/offer.jpg";
import {useNavigate } from "react-router-dom";
const Offers = () => {
    // const[cnt,setCnt] = useState(100);
    const nav = useNavigate();

    function navigate(){
        nav('/prices');
    }

    return (
        <div>
            <Header path="offer" />
            

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "7rem",
                    flexWrap: "wrap",
                }}
            >
                <img src={img20} />
                <span
                    style={{
                        fontSize: "1.2rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        padding: "2rem",
                        fontFamily: "cursive",
                    }}
                >
                    20% disscount only for first 100 users
                </span>
            </div>

            <div>
                <button class="p-btn"
                style={{display:"flex",margin:"2rem auto",cursor:"pointer"}} onClick={navigate}>Claim Offer</button>

                {/* <div>Hurry Up Only {cnt} left</div> */}
            </div>
            <Footer />
        </div>
    );
};

export default Offers;
