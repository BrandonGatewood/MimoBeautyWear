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
            {
                JeanniesServices.map( service => {
                    return (
                        <AccordionItem category={service.category} type={service.type} /> 
                    )
                })
            }  
        </div>
        <div className={ toggle === 2 ? "show-content" : "content" }>
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