import { useState } from "react";

// styles and assets
import "../css/components/faqAccordionItem.css";
import Open from "../assets/plus.svg?react";
import Close from "../assets/closeService.svg?react";

const FaqAccordionItem = ({ question, answer }) => {
    const [open, setOpen ] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
        <button className="faqSection" onClick={ handleOpen }>
                <div className="faqHeader">
                    <h3>{ question }</h3>
                    {
                        !open && <Open /> 
                    }
                    {
                        open && <Close />
                    }
                </div>
                {
                    open && 
                    <div className="faqBody">
                        <div className="aType">
                            <p>{ answer }</p>
                        </div>
                    </div>
                }
            </button>
        </>
    );
}

export default FaqAccordionItem;