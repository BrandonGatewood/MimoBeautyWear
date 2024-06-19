import { useEffect, useState } from "react";

// Components
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import sliderImages from "./sliderImages";

// Styles
import "../../css/components/slider.css";

const Slider = () => {
    const length = sliderImages.length - 1;
        
    const [ activeIndex, setActiveIndex ] = useState(0);

    useEffect( () => {
        const Interval = setInterval( () => {
            setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
        }, 5000);

        return () => clearInterval(Interval);
    }, [activeIndex]);

    return(
        <>
        <div className="sliderContainer">
            <div className="sliderContent">
                <SliderContent activeIndex={ activeIndex } sliderImages={ sliderImages } length={ length } />
            </div>
            <div className="sliderNavigation">
                <div className="leftArrow">
                    <LeftArrow prevSlide= { () => 
                            setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)
                        }
                    />
                </div>
                <Dots
                    activeIndex={ activeIndex }
                    sliderImages={ sliderImages }
                    onclick={ (activeIndex) => setActiveIndex(activeIndex) }
                />
                <div className="rightArrow">
                    <RightArrow 
                        nextSlide= { () => 
                            setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
                        } 
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default Slider;