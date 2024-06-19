import ChevronRight from "../../assets/chevronRight.svg?react";

const RightArrow = ( { nextSlide }) => {
    return(
        <>
            <button className="next" onClick={ nextSlide }>
                <ChevronRight />
            </button>
        </>
    );
}

export default RightArrow;