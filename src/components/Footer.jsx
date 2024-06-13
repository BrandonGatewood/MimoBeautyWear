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
        <div className="footerSection">
            <div className="hawaiisBest">
                <img className="hawaiisBest" src={ HawaiisBest } alt="Image of Mimos achievements" />
            </div>
            <div className="info">
                <div className="contactInfo">
                    <h1>Contact</h1>
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
                    <h1>Hours</h1>
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
                    <h1 className="socialsHeader">Socials</h1>
                    <div className="socials">
                        <Instagram />
                        <Facebook />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;