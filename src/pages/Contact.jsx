// Componets
import Footer from "../components/Footer";

// Styles
import "../css/pages/contact.css";

const Contact = () => {
    return(
        <>
        <div className="header">
            <h1>Contact</h1>
        </div>
        <p className="information">
            We're here to help you look and feel your best. If you have any questions, need to 
            book an appointment, or want to learn more about our services, please give us a call. 
            Please note that all bookings are by appointment only.
        </p>
        <p>
            Phone: (808) 955-0029
        </p>
        <Footer />
        </>
    );
}

export default Contact;