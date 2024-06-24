import { useState } from "react";

// Components
import Footer from "../components/Footer";
import ServicesAccordionItem from "../components/ServicesAccordionItem";

// Data
import JeanniesServices from "../data/JeanniesServices.json";
import JanetsServices from "../data/JanetsServices.json";
import fakePortrait from "../assets/stockImages/fakePortrait.jpg";
import afterCare from "../assets/afterCare.pdf";

// Styles and assets
import "../css/pages/services.css";

const Services = () => {
    const [ toggle, setToggle ] = useState(1);

    return(
        <>
        <div className="headerDiv">
            <div className="header">
                <h1>Services</h1>
            </div>
        </div>

        <div className="serviceContentDiv">
        <div className="servicesContent">
            <button className={ toggle === 1 ? "workerButton workerButtonLeft active" : "workerButton workerButtonLeft" } onClick={ () => setToggle(1) }>With Jeannie</button>
            <button className={ toggle === 2 ? "workerButton workerButtonRight active" : "workerButton workerButtonRight" } onClick={ () => setToggle(2) }>With Janet</button>
        </div>

        </div>

        <div className="contentDiv">
            <div className={ toggle === 1 ? "show-content" : "content" }>
                <div className="serviceProvider">
                    <div className="portraitContainer">
                        <img className="portrait" src={ fakePortrait }>
                        </img>
                    </div>
                    <p className="serviceProviderDescription">
                        With over 20 years of experience in hair styling and training at Vidal Sassoon, Jeannie is a master in 
                        her field. She was one of the first eyelash extension technicians in Hawaii, with over 15 years of expertise. 
                        In 2015, Jeannie was a finalist for the best eyelash extensions, showcasing her exceptional skill and 
                        dedication to her craft. Whether it's hair or lashes, Jeannie's services ensure you look and feel your best. 
                    </p>
                </div>

                {
                    JeanniesServices.map( service => {
                        return (
                            <ServicesAccordionItem category={service.category} type={service.type} key={service.category} /> 
                        )
                    })
                }  
            </div>
            <div className={ toggle === 2 ? "show-content" : "content" }>
                <div className="serviceProvider">
                    <div className="portraitContainer">
                        <img className="portrait" src={ fakePortrait }>
                        </img>
                    </div>
                    <p className="serviceProviderDescription">
                    Janet began her career as a cosmetologist in 1980 and quickly became one of Hawaii's pioneering cosmetic 
                    tattoo artists. As the founder of Mimo Beauty Wear, she has trained numerous artists and helped countless 
                    women and men enhance their beauty and confidence. With decades of experience, Janet continues to provide 
                    expert services that make her clients feel their best. 
                    </p>
                </div>
                {
                    JanetsServices.map( service => {
                        return (
                            <ServicesAccordionItem category={service.category} type={service.type} key={service.category} /> 
                        )
                    })
                }  
                <div className="afterCare">
                        <a href={afterCare} download="afterCare.pdf" className="afterCareTag">
                            Download After Care PDF
                        </a>
                </div>
            </div>
        </div>
        <div className="bookAppointmentContainer">
            <p className="pricing">For pricing information, please contact us directly.</p>
            <a href="/Contact">
                <button className="bookButton">Book Appointmnet</button>
            </a>
        </div>
        <Footer />
        </>
    );
}

export default Services;