import Image from "next/image";
import { SkeletonTicket } from "./SkeletonUI";

const ListVideo = ({ width = 275, searchResults, setIdVideo, isLoading }) => {
    const numColumns = Math.ceil(searchResults?.length / 2);
    const handleIdVideo = (id, authorId) => {
        setIdVideo(id, authorId);
    };
    if (isLoading) return <SkeletonTicket />;
    if (!Array.isArray(searchResults)) return null;

    return (
        <>
            {searchResults?.length >= 3 ? (
                <div className={`grid grid-cols-2 grid-rows-${numColumns} gap-x-[210px] overflow-x-auto`}>
                    {searchResults?.slice(0, 9).map((item) => (
                        <div
                            key={item.videoId}
                            onClick={() => handleIdVideo(item.videoId, item.authorId)}
                            className={`h-[84px] mt-[20px] ml-[19px] flex bg-bgitems rounded-[8px]`}
                            style={{ width: `${width}px` }}
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
                    {searchResults?.slice(0, 9).map((item) => (
                        <div
                            key={item.videoId}
                            onClick={() => HandleIdVideo(item.videoId)}
                            className={`h-[84px] mt-[20px] ml-[19px] flex bg-bgitems rounded-[8px]`}
                            style={{ width: `${width}px` }}
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
        </>
    );
};

export default ListVideo;
