// Components
import Footer from "../components/Footer";
import FaqAccordionItem from "../components/FaqAccordionItem";

// Data
import faqData from "../data/faqs.json";

// Styles
import "../css/pages/faq.css";

const Faq = () => {
    return(
        <>
        <div className="headerDiv">
            <div className="header">
                <h1>Faq</h1>
            </div>
        </div>
        <p className="question">
            If you don't find the answer to your question here, please feel free to contact 
            us directly. We're always happy to help!
        </p>
        <div className="questionsDiv">
            <div className="questions">
                {
                    faqData.map( faq => {
                        return(
                            <FaqAccordionItem question={ faq.question } answer={ faq.answer } key={faq.id} />
                        )
                    })
                }
            </div>
        </div>
        <div className="moreQuestionsContainer">
            <a href="/Contact">
                <button className="contactButton">Contact Us</button>
            </a>
        </div>
        <Footer />
        </>
    );
}

export default Faq;