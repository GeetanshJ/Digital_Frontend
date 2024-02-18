import axios from 'axios';
import React, { useEffect, useState } from "react";
import '../src/App.css';
import Header from './components/Header'
import img10 from './assets/team_fig1.jpg';
import img11 from './assets/team_fig2.jpg';
import img12 from './assets/team_fig3.jpg';
import img13 from './assets/team_fig4.jpg';
import img14 from './assets/team_fig5.jpg';
import img1 from './assets/header_fig1.png';
import img2 from './assets/header_fig2.jpg';
import img3 from './assets/header_fig3.jpg';
import Footer from './components/Footer';


const Teams = () => {
    
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const getTeam = async () => {
                const res = await axios.get('http://localhost:8000/listemp')
                console.log(res);
                setTeam(res.data);
        }
    
        getTeam();
    }, []);

    


    return (
        <div>
            <Header path="teams"/>

            <div className="teams" id="team-div">
                <div className="teams-h1">We are Perfect Teams</div>
                <div className="teams-text">Our teams are a perfect blend of experts who collaborate seamlessly to deliver exceptional results. Each team member brings unique skills and knowledge to the table, ensuring that we can tackle any challenge and provide you with the best solutions.</div>

                <div className="team-member-container">
                    {team.map((data) => {
                        return (
                            <div className="teams-members">
                                {data.emp_logo && <img src={data.emp_logo} alt="img" />}
                                <div className="team-name">{data.ename}</div>
                                <div className="team-role">{data.dname}</div>
                            </div>
                        );
                    })}

                </div>
            </div>





        <Footer/>
        </div>
    )
}

export default Teams
