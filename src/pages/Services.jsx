import { useState } from "react";

// Components
import Footer from "../components/Footer";
import AccordionItem from "../components/AccordionItem";

// Data
import JeanniesServices from "../data/JeanniesServices.json";
import JanetsServices from "../data/JanetsServices.json";

// Styles and assets
import "../css/pages/services.css";

const Services = () => {
    const [ toggle, setToggle ] = useState(1);

    return(
        <>
        <div className="header">
            <h1>Services</h1>
        </div>

        <div className="servicesContent">
            <button className={ toggle === 1 ? "workerButton active" : "workerButton" } onClick={ () => setToggle(1) }>With Jeannie</button>
            <button className={ toggle === 2 ? "workerButton active" : "workerButton" } onClick={ () => setToggle(2) }>With Janet</button>
        </div>

        <div className={ toggle === 1 ? "show-content" : "content" }>
            <div className="serviceProvider">
                <p>
                    With over 20 years of experience in hair styling and training at Vidal Sassoon, Jeannie is a master in 
                    her field. She was one of the first eyelash extension technicians in Hawaii, with over 15 years of expertise. 
                    In 2015, Jeannie was a finalist for the best eyelash extensions, showcasing her exceptional skill and 
                    dedication to her craft. Whether it's hair or lashes, Jeannie's services ensure you look and feel your best. 
                </p>
            </div>

            {
                JeanniesServices.map( service => {
                    return (
                        <AccordionItem category={service.category} type={service.type} /> 
                    )
                })
            }  
        </div>
        <div className={ toggle === 2 ? "show-content" : "content" }>
            <div className="serviceProvider">
                <p>
                   Janet began her career as a cosmetologist in 1980 and quickly became one of Hawaii's pioneering cosmetic 
                   tattoo artists. As the founder of Mimo Beauty Wear, she has trained numerous artists and helped countless 
                   women and men enhance their beauty and confidence. With decades of experience, Janet continues to provide 
                   expert services that make her clients feel their best. 
                </p>
            </div>
            {
                JanetsServices.map( service => {
                    return (
                        <AccordionItem category={service.category} type={service.type} /> 
                    )
                })
            }  
        </div>

        <div className="bookAppointmentContainer">
            <a href="/Contact">
                <button className="bookButton">Book Appointmnet</button>
            </a>
        </div>
        <Footer />
        </>
    );
}

export default Services;