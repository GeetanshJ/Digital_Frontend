import React,{useState,useEffect} from 'react'
import axios from 'axios';import { Link } from "react-router-dom";
import "../src/App.css";
import img8 from "./assets/A.png";
import img4 from "./assets/feature_fig1.jpg";
import img5 from "./assets/feature_fig2.jpg";
import img6 from "./assets/feature_fig3.jpg";
import img7 from "./assets/feature_fig4.jpg";
import img1 from "./assets/header_fig1.png";
import img2 from "./assets/header_fig2.jpg";
import img3 from "./assets/header_fig3.jpg";
import img15 from "./assets/member_fig1.jpg";
import img9 from "./assets/service_fig1.jpg";
import img10 from "./assets/team_fig1.jpg";
import img11 from "./assets/team_fig2.jpg";
import img12 from "./assets/team_fig3.jpg";
import img13 from "./assets/team_fig4.jpg";
import img14 from "./assets/team_fig5.jpg";

const Home = () => {


    
        const [team, setTeam] = useState([]);
    
        useEffect(() => {
            const getTeam = async () => {
                    const res = await axios.get('http://localhost:8000/listemp')
                    console.log(res);
                    setTeam(res.data);
            }
        
            getTeam();
        }, []);

    const [ham, setHam] = useState(false);

    function handleHam() {
        if (ham === true) {
            setHam(false);
        } else {
            setHam(true);
        }
    }

    const [read, setReadMore] = useState(false);
    const [text, setText] = useState("READ MORE");
    function readMore() {
        if (read === true) {
            setReadMore(false);
        } else if (read === false) {
            setReadMore(true);
        }

        if (text === "READ MORE") {
            setText("READ LESS");
        } else if (text === "READ LESS") {
            setText("READ MORE");
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



    const [read_more_creative, setCreativeRead] = useState("READ MORE");
    const [text_creative, setCreativeText] = useState(false);
    function creative() {
        if (read_more_creative === "READ MORE") {
            setCreativeRead("READ LESS");
            setCreativeText(true);
        } else {
            setCreativeRead("READ MORE");
            setCreativeText(false);
        }
    }

    const [features_read, setFeatureRead] = useState("READ MORE");
    const [feat, setFeatureText] = useState(false);
    function Features() {
        if (features_read === "READ MORE") {
            setFeatureRead("READ LESS");
            setFeatureText(true);
        } else {
            setFeatureRead("READ MORE");
            setFeatureText(false);
        }
    }


    const [price_read, setPriceRead] = useState("READ MORE");
    const [price, setPriceText] = useState(false);
    function prices() {
        if (price_read === "READ MORE") {
            setPriceRead("READ LESS");
            setPriceText(true);
        }

        else {
            setPriceRead("READ MORE");
            setPriceText(false);
        }
    }

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



    const [fact, setfact] = useState([]);

    useEffect(() => {
        const getProject = async () => {
            const res = await axios.get('http://localhost:8000/listfacts')
            setfact(res.data);
        }

        getProject();
    },[])

    
    const [service, setservice] = useState([]);

    useEffect(() => {
        const getService = async () => {
            const res = await axios.get('http://localhost:8000/listservices')
            setservice(res.data);
        }

        getService();
    },[])


    return (
        <div>
            <header id="project-div" class="header-1">
                <div class="nav-bar">
                    <div class="logo">digital</div>

                    <div class="nav-bar-ham" onClick={handleHam}>
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <ul className={"listing " + (ham ? "active" : "")}>
                        <li>
                            <Link to="feature">FEATURES</Link>
                        </li>
                        <li>
                            <Link to="offer">OFFER</Link>
                        </li>
                        <li>
                            <Link to="prices">PRICING</Link>
                        </li>
                        <li>
                            <Link to="clients">CLIENTS</Link>
                        </li>
                        <li>
                            <Link to="facts">FACTS</Link>
                        </li>
                        <li>
                            <Link to="project">PROJECTS</Link>
                        </li>
                        <li>
                            <Link to="teams">TEAMS</Link>
                        </li>
                        <li>
                            <Link to="contact">CONTACTS</Link>
                        </li>
                        <li>
                            <Link to="signup">SIGNUP</Link>
                        </li>
                        <li>
                            <Link to="login">LOGIN</Link>
                        </li>
                    </ul>
                </div>

                <h1>Simply the Best</h1>
                <p>Reasons for Choosing Us</p>
                <div class="content-header">
                    Quality and Expertise: Choosing us means you benefit from our unmatched quality and expertise.
                </div>
                <div class="content-header-1">
                    Customer-Centric Approach: We prioritize our customers' needs and satisfaction above all else.
                </div>

                <button className="btn" onClick={readMore}>
                    {text}
                </button>
                <div className={"read_more " + (read ? "read_active" : "")}>
                    Quality and Reliability: We are committed to delivering products/services that meet the highest quality standards. Our track record of reliability and consistency ensures that you can trust us to meet your expectations every time. You can count on us for a dependable and durable solution.

                    Competitive Pricing: We offer competitive pricing without compromising on quality. We understand the importance of value for your money, and our cost-effective solutions make choosing us a smart financial decision.

                    Exceptional Customer Support: Your satisfaction is our priority. We provide exceptional customer support throughout your journey with us. Our responsive and knowledgeable support team is always available to address your concerns and provide assistance, ensuring a smooth and hassle-free experience.
                    Quality and Reliability: We are committed to delivering products/services that meet the highest quality standards. Our track record of reliability and consistency ensures that you can trust us to meet your expectations every time. You can count on us for a dependable and durable solution.

                </div>
            </header>




















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



















            <section>
                <div class="about-us-container">
                    <p class="about-us-h1">We are Creative Agency</p>
                    <p class="about-us-text">
                    As a creative agency, we specialize in delivering innovative and cutting-edge solutions for our clients. We take a fresh and imaginative approach to every project, utilizing the latest design, marketing, and technology trends to create unique and attention-grabbing campaigns that set our clients apart in their respective industries.
                    We understand that each client is unique, and we take a tailored and strategic approach to meet their specific goals and challenges. Our team works closely with clients to understand their brand, target audience, and objectives, ensuring that every creative solution we provide is not only visually appealing but also strategically aligned to drive results.
                    </p>

                    <div
                        className={
                            "creative_more_header " +
                            (text_creative ? "creative_active_header" : "")
                        }
                    >
                        Diverse Creative Talents: Our creative agency boasts a diverse team of talented professionals with expertise in various creative disciplines, including graphic design, web development, content creation, and digital marketing. This diversity allows us to offer comprehensive and integrated solutions that cater to all your creative needs.

Proven Track Record: We have a solid track record of delivering successful and award-winning creative projects for a wide range of clients. Our portfolio showcases our ability to bring creativity to life while achieving measurable results. When you choose us, you're partnering with a proven creative agency.

Client-Centric Collaboration: We value collaboration with our clients. Our client-centric approach ensures that we work closely with you to understand your vision and objectives. Your input and feedback are integral to our creative process, resulting in solutions that align perfectly with your brand and goals.

Innovative Problem Solvers: We are not just creative; we're also innovative problem solvers. We thrive on finding unique solutions to your challenges, whether it's enhancing your brand's visibility, improving user engagement, or boosting conversions. Our ability to think outside the box sets us apart in the creative industry.






                    </div>
                    <button class="about-us-btn" onClick={creative}>
                        {read_more_creative}
                    </button>
                </div>

                <div class="about-us-container">
                    <img src={img8} alt="img" />
                </div>

                <div class="about-us-container">
                    <p class="about-us-h2">''</p>

                    <p class="about-us-text2">
                    "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."
                    </p>

                    <p class="about-us-h1">Geetansh Jain</p>
                </div>
            </section>















            <section class="features" id="feature-div">
                <div class="feature-div">
                    <img src={img4} alt="img" />
                    <img src={img5} alt="img" />
                </div>

                <div class="feature-div">
                    <img src={img6} alt="img" />
                    <img src={img7} alt="img" />
                </div>

                <div class="features-amazingFeatures">
                    <h3 class="features-h1">Amazing Features</h3>
                    <p class="features-text">
                    User-Friendly Interface: Our product/service offers an intuitive and user-friendly interface, making it easy for anyone to use. Whether you're a tech-savvy professional or a beginner, you'll appreciate the simplicity and efficiency of our interface.

                    </p>

                    <div
                        className={"feature_read_class" + (feat ? " feature_active" : "")}
                    >
                        User-Friendly Interface: Our product/service offers an intuitive and user-friendly interface, making it easy for anyone to use. Whether you're a tech-savvy professional or a beginner, you'll appreciate the simplicity and efficiency of our interface.

Advanced Technology Integration: We've harnessed the power of cutting-edge technology to provide you with advanced features and capabilities. From AI-driven recommendations to seamless IoT integration, our solution is at the forefront of technological innovation.

Customization and Personalization: One of the most amazing features is the level of customization and personalization we offer. Tailor the product/service to suit your specific needs and preferences, ensuring that it aligns perfectly with your unique requirements and objectives.
                    </div>

                    <button class="features-btn" onClick={Features}>
                        {features_read}
                    </button>
                </div>
            </section>












            <div class="serve" id="offer-div">
                <div class="serve-container1">
                    <h3 class="services-h3">Services We Provide</h3>
                    <div class="services-text">
                    Web Development and Design: We specialize in creating captivating and functional websites tailored to your brand's identity. Our web development and design services encompass everything from user-friendly interfaces to responsive design, ensuring a seamless and engaging online presence for your business.
                    </div>

                    <div className={"price_read_class " + (price ? " price_active" : "")}>
                    Web Development and Design: We specialize in creating captivating and functional websites tailored to your brand's identity.
Digital Marketing: Our digital marketing services are designed to boost your online visibility and reach your target audience effectively. From search engine optimization (SEO) and social media management to pay-per-click (PPC) advertising, we offer a comprehensive range of digital marketing strategies to drive traffic and conversions.

                    </div>
                    <button class="services-btn" onClick={prices}>{price_read}</button>
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









            <div class="teams" id="team-div">
                <div class="teams-h1">We are Perfect Teams</div>
                <div class="teams-text">
                Our teams are a perfect blend of experts who collaborate seamlessly to deliver exceptional results. Each team member brings unique skills and knowledge to the table, ensuring that we can tackle any challenge and provide you with the best solutions.
                </div>


                <div class="team-member-container">
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






            <div class="member" id="client-div">
                <div class="member-container1">
                    <h2 class="member-container1-h2">Anita Allen</h2>
                    <h3 class="member-container1-h3">Graphic Designer</h3>
                    <div class="member-container1-text">
                    I recently had the pleasure of working with Geetansh on the design of my website, and I must say that the experience was truly exceptional. Geetansh is a highly skilled and creative web designer who has transformed my online presence with a stunning and user-friendly website.

From our initial discussions, it was clear that Geetansh had a deep understanding of web design principles and a keen eye for detail. He took the time to understand my brand, its values, and the objectives I had for the website. This understanding was evident in the design concepts he presented.
                    </div>

                    <div class="member-ranges">
                        <div class="member-ranges-text">Creativity</div>
                        <span class="member-ranges-bar"></span>
                        <span class="member-ranges-text1">80%</span>
                        <div class="member-ranges-bar1"></div>
                    </div>

                    <div class="member-ranges">
                        <div class="member-ranges-text">Team Work</div>
                        <span class="member-ranges-bar"></span>
                        <span class="member-ranges-text1">80%</span>
                        <div class="member-ranges-bar1"></div>
                    </div>

                    <div class="member-ranges">
                        <div class="member-ranges-text">Desiging</div>
                        <span class="member-ranges-bar"></span>
                        <span class="member-ranges-text1">80%</span>
                        <div class="member-ranges-bar1"></div>
                    </div>
                </div>

                <div class="member-container2">
                    <img src={img15} alt="img" />
                </div>

                <div class="member-container3">
                    <div class="member-container3-text">
                    I recently experienced this product, and I must say, it exceeded my expectations. The quality and performance are exceptional, and it's been a game-changer for me. I highly recommend it to anyone seeking top-notch results.
                    </div>
                    <div class="member-container3-logos">
                        <a href="https://www.facebook.com/Geetansh_Jain" style={{ color: "white" }} target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://www.google.com" style={{ color: "white" }} target="_blank"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
                        <a href="https://www.google.com/" style={{ color: "white" }} target="_blank"><i class="fa fa-google-wallet" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>







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
Geetansh's website design services are exceptional. He combines creativity and technical expertise to create user-friendly, visually appealing websites that align perfectly with the brand's identity and goals, all while staying up-to-date with the latest design trends and technologies.
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
                            <button class="p-btn" onClick={proffessionals}>
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










            <div>
                <div class="touch" id="contact-div">
                    <div class="touch-h1">GetinTouch</div>
                    <div class="touch-logos">
                        <a href="https://www.facebook.com/Geetansh_Jain" style={{ color: "white" }} target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://www.google.com" style={{ color: "white" }} target="_blank"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
                        <a href="https://www.google.com/" style={{ color: "white" }} target="_blank"><i class="fa fa-google-wallet" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com/" style={{ color: "white" }} target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/geetansh-jain-81995322a/" style={{ color: "white" }} target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        <a href="https://digg.com/" style={{ color: "white" }} target="_blank"><i class="fa fa-digg" aria-hidden="true"></i></a>
                    </div>
                </div>

                <footer class="footer">
                    <div class="footer-container">
                        <div class="footer-text">
                            <a href="mailto:jaingeetansh@gmail.com">Email Us</a>
                        </div>
                        <div class="footer-logo">
                            <i class="fa fa-envelope-o" aria-hidden="true" aria-required></i>
                        </div>
                    </div>

                    <div class="footer-container">
                        <div class="footer-text">
                            <a href="tel:+917082722250">Call Us</a>
                        </div>
                        <div class="footer-logo">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div class="footer-container">
                        <div class="footer-text">Address:123 model town</div>
                        <div class="footer-logo">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                    </div>
                </footer>

                <p>Designed By Geetansh Jain 2110990513</p>
            </div>
        </div>
    );
};

export default Home;
