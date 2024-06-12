import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [ showNavBar, setShowNavbar ] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavBar);
    }

    return(
        <>
        <nav className="navbar">
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/Services'>
                Services 
            </NavLink>
            <NavLink to='/Faq'>
                Faq 
            </NavLink>
            <NavLink to='/Contact'>
                Contact 
            </NavLink>
            
        </nav>
        </>
    );
}

export default Navbar;