import React,{useState,useEffect} from 'react'
import axios from 'axios';

import Header from './components/Header'
import img1 from './assets/header_fig1.png';
import img2 from './assets/header_fig2.jpg';
import img3 from './assets/header_fig3.jpg';
import Footer from './components/Footer'
const Facts = () => {
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



    const [fact, setfact] = useState([]);

    useEffect(() => {
        const getProject = async () => {
            const res = await axios.get('http://localhost:8000/listfacts')
            setfact(res.data);
        }

        getProject();
    },[])


    return (
        <div>
            <Header path="facts"/>
            <section id="fact-div" className="bg-red-500">
                <div class="header-fig">
                    {
                        fact.map((data) => {
                            return (
                                <div className="header-fig-container" key={data.fact_id}>
                                    <img src={data.fact_logo} alt="img" />
                                    <h3>{data.fact_name}</h3>
                                    <div className="header-fig-text">{data.fact_brief}</div>
                                    <div className={"read_more_header " + (read_head && readVal === data.fact_id ? "read_active_header" : "")}>
                                        {data.fact_description}
                                    </div>
                                    <button className="header-fig-btn" onClick={() => { header_read(data.fact_id) }}>
                                        {header_text && readVal === data.fact_id ? header_text : "READ MORE"}
                                    </button>
                                </div>
                            );
                        })
                    }

                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default Facts
