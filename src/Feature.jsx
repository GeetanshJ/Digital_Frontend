import React, { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import img4 from './assets/feature_fig1.jpg';
import img5 from './assets/feature_fig2.jpg';
import img6 from './assets/feature_fig3.jpg';
import img7 from './assets/feature_fig4.jpg';
import '../src/App.css';

const Features = () => {
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
    return (
        <div>
        <Header path = "feature"/>
        <div class="features" id="feature-div">
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

        </div>
        <Footer/>
        </div>
    )
}

export default Features
