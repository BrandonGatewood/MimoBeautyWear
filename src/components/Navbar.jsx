import { useState } from "react";
import { NavLink } from "react-router-dom";

// Styles and assets 
import Logo from "../assets/mimoLogo.png";
import Hamburger from "../assets/hamburger.svg?react";
import CloseNavbar from "../assets/close.svg?react";
import "../css/navbar.css";

const Navbar = () => {
    const [ showNavbar, setShowNavbar ] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    return(
        <>
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <NavLink to='/'>
                        <img src={ Logo }  alt="Mimo's Logo" className="logo" />
                    </NavLink>
                </div>
                <div className="menuIcon" onClick={ handleShowNavbar }>
                    { !showNavbar && <Hamburger /> }
                    { showNavbar && <CloseNavbar /> }
                </div>
                {
                    showNavbar && 
                        <button type='button' className='overlayButton' onClick={ handleShowNavbar }></button>
                }
                <div className={`nav-elements  ${ showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to='/Home'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Services'>
                                Services 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Faq'>
                                Faq 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Contact'>
                                Contact 
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;