import ChevronLeft from "../../assets/chevronLeft.svg?react";

const LeftArrow = ( { prevSlide }) => {
    return(
        <>
        <button className="prev" onClick={ prevSlide }>
            <ChevronLeft />     
        </button>
        </>
    );
}

export default LeftArrow;