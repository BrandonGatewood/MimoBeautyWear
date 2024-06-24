import { useState } from "react";

// Styles and assets
import "../css/components/serviceAccordionItem.css";
import Open from "../assets/plus.svg?react";
import Close from "../assets/closeService.svg?react";

const ServicesAccordionItem = ({ category, type }) => {
    const [ open, setOpen ] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
        return(
            <>
            <button className="serviceSection" onClick={ handleOpen }>
                <div className="serviceHeader">
                    <h3>{ category }</h3>
                    {
                        !open && <Open /> 
                    }
                    {
                        open && <Close />
                    }
                </div>
            </button>
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
            </>
        );
    }

export default ServicesAccordionItem;