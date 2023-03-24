import Image from "next/image";
import { SkeletonTicket } from "./SkeletonUI";

function ListTicket({ width = 343, searchResults, isLoading }) {
    if (isLoading) return <SkeletonTicket />;
    const a = [1, 2, 3];
    if (!Array.isArray(searchResults)) return null;
    return (
        <>
            {searchResults?.slice(-3).map((item) => (
                <div
                    key={item.videoId}
                    className={`h-[84px] mt-[20px] ml-[19px] font-robert flex bg-bgitems rounded-[8px]`}
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

                    <div className="text-[16px] font-[500] flex items-start justify-center flex-col ml-[13px] rounded-[8px] ">
                        {`${item.title.slice(0, 30)}`}
                        <p className="text-brand font-[400] text-[12px]"> {item.author}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ListTicket;
