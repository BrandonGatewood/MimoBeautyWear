// Styles and assets
import "../css/components/footer.css";
import HawaiisBest from "../assets/hawaiisBestImg.jpg";
import LocationIcon from "../assets/location.svg?react";
import PhoneIcon from "../assets/phone.svg?react";
import Instagram from "../assets/instagram.svg?react";
import Facebook from "../assets/facebook.svg?react";
const Footer = () => {
    return(
        <>
        <div className="footerContainer">
            <div className="hawaiisBestSection">
                <img className="hawaiisBest" src={ HawaiisBest } alt="Image of Mimos achievements" />
            </div>
            <div className="info">
                <div className="contactInfo">
                    <h2>Contact</h2>
                    <div className="contactRow">
                        <LocationIcon />
                        <div>
                            <p>2203 Young St.</p>
                            <p>Honolulu, HI 96826</p>
                        </div>
                    </div>
                    <div className="contactRow">
                        <PhoneIcon />
                        <p>(808) 955-0029</p>
                    </div>
                </div>
                <div className="hoursInfo">
                    <h2>Hours</h2>
                    <div className="hrsRow">
                        <p>Monday - Friday</p>
                        <p>9:00am - 6:00pm</p>
                    </div>
                    <div className="hrsRow">
                        <p>Saturday</p>
                        <p>2:00pm - 6:00pm</p>
                    </div>
                    <div className="hrsRow">
                        <p>Saturday</p>
                        <p>Closed</p>
                    </div>
                </div>
                <div className="socialsInfo">
                    <h2 className="socialsHeader">Socials</h2>
                    <div className="socials">
                        <a href="https://www.instagram.com/mimobeautywear/?hl=en" target="_blank">
                            <Instagram />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100063820051871" target="_blank">
                            <Facebook />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;