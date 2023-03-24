import Image from "next/image";
import moment from "moment";
import { SkeletonTicket } from "./SkeletonUI";

function Status({ timeLine, isLoading, images }) {
    if (isLoading) return <SkeletonTicket />;
    if (!Array.isArray(timeLine)) return null;

    return (
        <>
            {timeLine?.map((item) => (
                <div key={item.videoId} className=" leading-4 font-[400] text-[12px] text-secondary">
                    <div className="w-[343px] mt-6 flex ">
                        <Image
                            src={images}
                            width={36}
                            height={36}
                            className="h-[36px] w-[36px] ml-4 rounded-[12px] "
                            alt="avatar"
                        />
                        <div className="ml-2">
                            <h3 className="font-bold flex items-start">{item.author}</h3>
                            <p className="mt-1 text-textDate leading-4 ">
                                {moment.unix(item.published).format("YYYY.MM.DD")} 15:15
                            </p>
                        </div>
                    </div>

                    <div className=" mt-2 ml-5">
                        <p className="flex items-center">{item.title}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Status;
