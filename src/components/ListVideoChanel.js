import ListVideoSlice from "@/redux/ListVideoSlice/ListVideoSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, SuccessMessage } from "./AlertMessage";
import { SkeletonTicket } from "./SkeletonUI";
import { fetchChanelInfo } from "@/redux/ChanelInfoSlice/actions";
import { deletelatestVideo } from "@/redux/ChanelInfoSlice/ChanelInfoSlice";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListVideoChanel() {
    const [message, setMessage] = useState(null);
    const [messageError, setMessageError] = useState({
        state: null,
        testId: false,
    });

    const { authorId } = useSelector((state) => state.ListVideo.init);
    const { data: listVideo } = useSelector((state) => state.ListVideo);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchChanelInfo(authorId));
    }, [dispatch, authorId]);

    const {
        data: { latestVideos },
        isLoading,
        error,
    } = useSelector((state) => state.ChanelInfo);

    const handleClick = (item) => {
        const testId = listVideo.some((elemet) => {
            return elemet.videoId === item.videoId;
        });

        if (testId) {
            setMessageError({ state: item.videoId, testId: testId });
            setTimeout(() => {
                setMessageError({ state: null, testId: testId });
            }, 1000);
            return;
        }
        setMessage(item.videoId);
        dispatch(ListVideoSlice.actions.addVideo(item));
        setTimeout(() => {
            setMessage(null);
        }, 1000);
    };
    const handleDeleteVideo = (id) => {
        dispatch(deletelatestVideo(id.videoId));
    };

    if (isLoading) return <SkeletonTicket />;
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <>
            {latestVideos?.map((item) => (
                <div key={item.videoId}>
                    {messageError.testId && messageError.state === item.videoId && (
                        <ErrorMessage message={"Video này đã được thêm...!"} />
                    )}
                    {message === item.videoId && <SuccessMessage message={"Đã thêm vào danh sách phát...!"} />}
                    <div
                        className={`relative h-[84px] mt-[20px] ml-[19px] font-robert flex bg-bgitems rounded-[8px]`}
                        style={{ width: `343px` }}
                    >
                        <Image
                            onClick={() => handleClick(item)}
                            src={`https://yt.funami.tech/vi/${item.videoId}/1.jpg`}
                            objectFit="cover"
                            height={84}
                            width={84}
                            className=" filter drop-shadow-md rounded-md "
                            alt="ticket"
                            unoptimized
                        />

                        <FontAwesomeIcon
                            onClick={() => handleDeleteVideo(item)}
                            icon={faCircleXmark}
                            className="text-[#667085] text-xl ml-1 mr-1 absolute top-[-7px] right-[-7px] hover:scale-150 hover:shadow-lg hover:text-[#454c5b] transition-transform duration-300  "
                        />

                        <div
                            onClick={() => handleClick(item)}
                            className="text-[16px] font-[500] flex items-start justify-center flex-col ml-[13px] rounded-[8px] "
                        >
                            {`${item.title.slice(0, 30)}`}
                            <p className="text-brand font-[400] text-[12px]"> {item.author}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ListVideoChanel;
