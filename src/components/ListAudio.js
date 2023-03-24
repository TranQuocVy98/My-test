import images from "@/assets/images";
import Image from "next/image";

function ListAudio() {
    return (
        <div className="w-[343px] h-[84px] mt-[20px] ml-[19px] flex bg-bgitems rounded-[8px] font-robert ">
            <Image src={images.Image} className="filter drop-shadow-md rounded-md " alt="ticket" />

            <div className=" flex flex-col items-start justify-between px-4 py-2  ">
                <h3 className="font-[500] text-[14px] leading-5 text-info ">As it was</h3>
                <p className="font-[400] text-[10px] leading-4 text-brand">Harry Styles</p>

                <div className="flex items-center rounded-[100px] border border-accent py-2 px-4 mt-[5px] ">
                    <button className="w-[128px] h-[20] font-[500] text-[10px] text-accent gap-[10px]  ">
                        Streaming options
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ListAudio;
