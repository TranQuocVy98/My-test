import ReactStars from "react-stars";

function RatingComponent({ ratting }) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const value = ratting <= 4 ? ratting : (ratting / 100).toFixed(1);
    return (
        <div className="ml-[8px] mt-0 ">
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={15}
                color1="#EBE9E9"
                activeColor="#FFD300"
                space={4}
                value={value}
            />
        </div>
    );
}
export default RatingComponent;
