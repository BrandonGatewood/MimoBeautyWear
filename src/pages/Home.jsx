import Footer from "../components/Footer";

// Styles and assets
import "../css/pages/home.css";
import fakeImg from "../assets/fakeimg.png";
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
                        <img src={ fakeImg } className="fakeImg" alt="img of a lady performing cosmetic tattoo" />
                    </div>
                </div>
                <div className="mobileButtonSection">
                    <button className="ctaButton">Find Your Perfect Fit</button>
                </div>
            </div> 
            <div className="carouselContainer">
                {
                    data.map( (item, index) => {
                        return <h1 className="carouselItem" style={{transform: `translate(-${curr * 100}%)`}}>

                        </h1>
                    })
                } 
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
            <div className="gallery">
            </div>
            <Footer />
        </>
    )
}

export default Home;