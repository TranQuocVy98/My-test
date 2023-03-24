import images from "@/assets/images";
import Image from "next/image";

function Header() {
    return (
        <>
            <div className="p-0 pt-4 pb-8 px-4 h-[52px]  flex justify-center items-center text-secondary leading-[18] font-normal">
                カウーンセラ
            </div>
            <div className="flex justify-center relative">
                <Image src={images.imageCover} className="h-[124px] w-[99,99%] " alt="imageCover" />
                <Image src={images.avatar} className="absolute top-[89px] left-[16px] " alt="avatar" />
            </div>
            <div className="  text-secondary text-[17px] font-[700] mt-[40px] ml-[16px] ">梅村 さおり</div>
            <p className=" text-textDate text-[10px] ml-[16px] mt-[2px] font-normal  ">最終ログイン：55分前</p>
        </>
    );
}

export default Header;
