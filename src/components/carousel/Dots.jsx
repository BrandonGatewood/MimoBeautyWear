const Dots = ({ activeIndex, onclick, sliderImages }) => {
    return(
        <>
        <div className="allDots">
            { 
                sliderImages.map( (slide, index) => (
                    <span
                        key={ index }
                        className={`${ activeIndex === index ? "dot activeDot" : "dot" }`}
                        onClick={ () => onclick(index) }
                    ></span>
                ))
            } 
        </div>
        </>
    );
}

export default Dots;