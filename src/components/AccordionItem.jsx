import { useState } from "react";

// Styles and assets
import "../css/components/accordionItem.css";
import Open from "../assets/plus.svg?react";
import Close from "../assets/closeService.svg?react";

const AccordionItem = ({ category, type }) => {
    const [ open, setOpen ] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
        return(
            <>
            <div className="serviceSection">
                <div className="serviceHeader">
                    <h3>{ category }</h3>
                    {
                        !open && 
                        <button className="serviceButton" onClick={ handleOpen }>
                            <Open /> 
                        </button>
                    }
                    {
                        open && 
                        <button className="serviceButton" onClick={ handleOpen }>
                            <Close /> 
                        </button>
                    }
                </div>
                {
                    open && 
                    <div className="serviceBody">
                        {
                            type.map( aType => {
                                return (
                                    <div className="aType">
                                        <h4>{ aType.name }</h4>
                                        <p className="duration">Duration: { aType.duration }</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
            </>
        );
    }

export default AccordionItem;