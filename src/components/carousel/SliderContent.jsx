const SliderContent = ({ activeIndex, sliderImages, length}) => {
    return(
        <>
            { 
                sliderImages.map( (slide, index) => (
                    <div
                        key={ index }
                        className= { index === activeIndex ? "slides activeSlider" : "inactive"}
                    >
                            <img className="carouselImg" src={ slide.src } alt={ slide.alt } />
                    </div>
                ))
            }
        </>
    );
}

export default SliderContent;