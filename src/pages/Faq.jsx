// Components
import Footer from "../components/Footer";

// Styles
import "../css/pages/faq.css";

const Faq = () => {
    return(
        <>
        <div className="header">
            <h1>Faq</h1>
        </div>
        <div className="moreQuestionsContainer">
            <p className="question">
                If you don't find the answer to your question here, please feel free to contact 
                us directly. We're always happy to help!
            </p>
            <a href="/Contact">
                <button className="contactButton">Book Appointmnet</button>
            </a>
        </div>
        <Footer />
        </>
    );
}

export default Faq;