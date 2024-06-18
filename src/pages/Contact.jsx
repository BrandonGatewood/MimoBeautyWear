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
        <div className="information">
            <p>
                We're here to help you look and feel your best. If you have any questions, need to 
                book an appointment, or want to learn more about our services, please give us a call. 
                Please note that all bookings are by appointment only.
            </p>
        </div>
        <div className="phoneNumber">
            <p>
                Phone: (808) 955-0029
            </p>
        </div>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.415837692559!2d-157.8297642874124!3d21.29457898034031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006d916283b591%3A0x744aea77c6608496!2sMimo%20Beauty%20Wear!5e0!3m2!1sen!2sus!4v1718559413310!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Footer />
        </>
    );
}

export default Contact;