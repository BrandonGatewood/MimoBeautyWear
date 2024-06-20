// Components
import Footer from "../components/Footer";
import Slider from "../components/carousel/Slider";

// Styles and assets
import "../css/pages/home.css";
import fakeImgMobile from "../assets/stockImages/landingSectionMobile.jpg";
import fakeImgDesktop from "../assets/stockImages/landingSectionDesktop.jpg";
import { useState, useEffect } from "react";

const Home = () => {
    const data = ["1", "2", "3", "4", "5"];
    const [ curr, setCurr] = useState(0);
    const scroll = () => {
        if(curr == data.length - 1) {
            return setCurr(0);
        }

        return setCurr(curr + 1);
    }

    useEffect( () => {
        const interval = setInterval( () => {scroll()}, 3000);
        
        return () => clearInterval(interval);
    });

    return (
        <>
            <div className="ctaSection">
                <div className="cta">
                    <div className="ctaContent">
                        <h1>Discover a</h1>
                        <h1>New Look and Feel</h1>
                        <div className="desktopButtonSection">
                            <a href="/Services">
                                <button to='/Services' className="ctaButton">Find Your Perfect Fit</button>
                            </a>
                        </div>
                    </div>
                    <div className="ctaImg">
                        <img src={ fakeImgMobile } className="imageMobile" alt="img of a lady performing cosmetic tattoo" />
                        <img src={ fakeImgDesktop } className="imageDesktop" alt="img of a lady performing cosmetic tattoo" />
                    </div>
                </div>
                <div className="mobileButtonSection">
                    <a href="./Services">
                        <button className="ctaButton">Find Your Perfect Fit</button>
                    </a>
                </div>
            </div> 
            <div className="aboutUs">
                <h1>About Us</h1>
                <p className="aboutUsBody">
                    Welcome to Mimo Beauty Wear, where beauty meets precision since 1990. Located in Hawaii, 
                    our salon offers cosmetic tattoos, expert hair styling, rejuvenating skin treatments, 
                    and luxurious eyelash extensions. Our dedication to quality has earned us multiple "Hawaii's 
                    Best" awards, including second place in 2015 for Eyelash Extension Services and finalist 
                    recognition in 2020 and 2021 for Hair Salon services.
                </p>
            </div>
            <Slider />
            <Footer />
        </>
    )
}

export default Home;