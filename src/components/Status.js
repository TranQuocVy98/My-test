import Image from "next/image";
import moment from "moment";
import { SkeletonTicket } from "./SkeletonUI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVideoComment } from "@/redux/VideoCommentSlice/actions";

function Status() {
    const dispatch = useDispatch();
    const { videoId } = useSelector((state) => state.ListVideo.init);

    useEffect(() => {
        dispatch(fetchVideoComment(videoId));
    }, [dispatch, videoId]);

    const { data, isLoading } = useSelector((state) => state.videoComment);

    if (isLoading) return <SkeletonTicket />;
    return (
        <>
            {data?.map((item) => (
                <div key={item.commentId} className=" leading-4 font-[400] text-[12px] text-secondary">
                    <div className="w-[343px] mt-6 flex ">
                        <Image
                            src={item.authorThumbnails[0].url}
                            width={36}
                            height={36}
                            className="h-[36px] w-[36px] ml-4 rounded-[12px] "
                            alt="avatar"
                        />
                        <div className="ml-2">
                            <h3 className="font-bold flex items-start">{item.author}</h3>
                            <p className="mt-1 text-textDate leading-4 ">
                                {moment.unix(item.published).format("YYYY.MM.DD")}
                            </p>
                        </div>
                    </div>

                    <div className=" mt-2 ml-5">
                        <p className="flex items-center">{item.content}</p>
                    </div>
                    <div className=" text-[#606060] text-sm mt-1 ml-5 ">
                        <FontAwesomeIcon icon={faThumbsUp} className="text-[#667085] text-lg ml-1 mr-1 " />
                        {item.likeCount}
                        <FontAwesomeIcon icon={faThumbsDown} className="text-[#667085] text-lg ml-4" />
                    </div>
                </div>
            ))}
        </>
    );
}

export default Status;
