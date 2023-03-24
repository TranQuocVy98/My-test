import RatingComponent from "./common/Star";
import moment from "moment";
import { SkeletonTicket } from "./SkeletonUI";

function Comment({ comment, isLoading }) {
    if (isLoading) return <SkeletonTicket />;
    if (!Array.isArray(comment)) return null;

    return (
        <>
            {comment?.map((item) => (
                <div
                    key={item.commentId}
                    className=" w-[343px] leading-4 mt-[20px] ml-[19px] font-[400 text-secondary text-[12px] "
                >
                    <div className="  mb-2 flex justify-between">
                        <h3 className=" font-bold flex items-center">
                            {item.author}
                            <RatingComponent ratting={item.likeCount} />
                        </h3>
                        <p className="text-textDate flex items-center">
                            {moment.unix(item.published).format("YYYY.MM.DD")}
                        </p>
                    </div>
                    <p className="flex items-center">{item.content}</p>
                </div>
            ))}
        </>
    );
}

export default Comment;
