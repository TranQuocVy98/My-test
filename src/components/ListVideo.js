import Image from "next/image";
import { SkeletonTicket } from "./SkeletonUI";

const ListVideo = ({ searchResults, setIdVideo, isLoading }) => {
    const handleIdVideo = (id, authorId) => {
        setIdVideo(id, authorId);
    };
    if (isLoading) return <SkeletonTicket />;
    if (!Array.isArray(searchResults)) return null;

    return (
        <div className={`overflow-x-auto w-[375px]`}>
            {searchResults?.length >= 3 ? (
                <div className={`flex flex-wrap w-[606px]`}>
                    {searchResults?.map((item) => (
                        <div
                            key={item.videoId}
                            onClick={() => handleIdVideo(item.videoId, item.authorId)}
                            className={`h-[84px] w-[275px] mt-[20px] ml-[19px] flex bg-bgitems rounded-[8px]`}
                        >
                            <Image
                                src={`https://yt.funami.tech/vi/${item.videoId}/1.jpg`}
                                objectFit="cover"
                                height={84}
                                width={84}
                                className="filter drop-shadow-md rounded-md "
                                alt="ticket"
                                unoptimized
                            />

                            <div className="text-[16px] font-[500] line-clamp font-robert flex items-start justify-center flex-col ml-[13px] rounded-[8px] ">
                                {`${item.title.slice(0, 30)}...`}
                                <p className="text-brand font-[400] text-[12px]"> {item.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    {searchResults?.map((item) => (
                        <div
                            key={item.videoId}
                            onClick={() => HandleIdVideo(item.videoId)}
                            className={`h-[84px] w-[343px] mt-[20px] ml-[19px] flex bg-bgitems rounded-[8px]`}
                        >
                            <Image
                                src={`https://yt.funami.tech/vi/${item.videoId}/1.jpg`}
                                objectFit="cover"
                                height={84}
                                width={84}
                                className=" filter drop-shadow-md rounded-md "
                                alt="ticket"
                                unoptimized
                            />

                            <div className="text-[16px] font-[500] font-robert flex items-start justify-center flex-col ml-[13px] rounded-[8px] ">
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
