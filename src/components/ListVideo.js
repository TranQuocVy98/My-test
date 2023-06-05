import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import ListVideoSlice from "@/redux/ListVideoSlice/ListVideoSlice";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListVideo = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.ListVideo);

    const handleIdVideo = (item) => {
        dispatch(ListVideoSlice.actions.SetUser(item));
        dispatch(ListVideoSlice.actions.deleteVideo(item.videoId));
    };
    const handleDeleteVideo = (item) => {
        dispatch(ListVideoSlice.actions.deleteVideo(item.videoId));
    };
    if (!Array.isArray(data)) return null;

    if (data.length === 0)
        return (
            <>
                <div className="mt-[20px]  ml-[19px] text-xl font-bold leading-9">DANH SÁCH PHÁT.</div>
                <div className="  w-[90%] mx-[auto]  text-center  p-6 mt-3 rounded-lg shadow text-[#ccc]  hover:bg-gray-100  hover:text-[#fff]  ">
                    <h5 className="  mb-2 text-xl font-medium align-middle mt-3 ">CHƯA CÓ VIDEO NÀO</h5>
                </div>
            </>
        );

    return (
        <div className={`overflow-x-auto w-[375px]`}>
            <div className="mt-[20px]  ml-[19px] text-xl font-bold leading-9">DANH SÁCH PHÁT.</div>

            {data?.length >= 3 ? (
                <div className={`flex flex-wrap w-[606px]`}>
                    {data?.map((item) => (
                        <div
                            key={item.videoId}
                            className={`relative h-[84px] w-[275px] mt-[20px] ml-[19px] flex bg-bgitems rounded-[8px]`}
                        >
                            <Image
                                onClick={() => handleIdVideo(item)}
                                src={`https://yt.funami.tech/vi/${item.videoId}/1.jpg`}
                                objectFit="cover"
                                height={84}
                                width={84}
                                className="filter drop-shadow-md rounded-md "
                                alt="ticket"
                                unoptimized
                            />
                            <FontAwesomeIcon
                                onClick={() => handleDeleteVideo(item)}
                                icon={faCircleXmark}
                                className="text-[#667085] text-xl ml-1 mr-1 absolute top-[-7px] right-[-7px] hover:scale-150 hover:shadow-lg hover:text-[#454c5b] transition-transform duration-300  "
                            />
                            <div
                                onClick={() => handleIdVideo(item)}
                                className="text-[16px] font-[500] line-clamp font-robert flex items-start justify-center flex-col ml-[13px] rounded-[8px] "
                            >
                                {`${item.title.slice(0, 30)}...`}
                                <p className="text-brand font-[400] text-[12px]"> {item.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    {data?.map((item) => (
                        <div
                            key={item.videoId}
                            className={`relative h-[84px] w-[343px] mt-[20px] ml-[19px] flex bg-bgitems rounded-[8px]`}
                        >
                            <Image
                                onClick={() => handleIdVideo(item)}
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
                                onClick={() => handleIdVideo(item)}
                                className="text-[16px] font-[500] font-robert flex items-start justify-center flex-col ml-[13px] rounded-[8px] "
                            >
                                {`${item.title.slice(0, 30)}...`}

                                <p className="text-brand font-[400] text-[12px]"> {item.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListVideo;
