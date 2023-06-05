import Image from "next/image";
import Search from "./search";
import { useDispatch, useSelector } from "react-redux";
import images from "@/assets/images";
import numeral from "numeral";
import { useEffect } from "react";
import { fetchChanelInfo } from "@/redux/ChanelInfoSlice/actions";
import { SkeletonHeader } from "./SkeletonUI";

function Header() {
    const { authorId } = useSelector((state) => state.ListVideo.init);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchChanelInfo(authorId));
    }, [dispatch, authorId]);

    const { data, banner, thumbnail, isLoading } = useSelector((state) => state.ChanelInfo);
    if (isLoading) return <SkeletonHeader />;

    return (
        <>
            <Search />
            <div className="flex justify-center relative">
                <Image
                    src={banner || images.imageCover}
                    width={500}
                    height={300}
                    className="h-[150px] w-[99%] "
                    alt="bannerCover"
                />
                <Image
                    src={thumbnail || images.avatar}
                    width={50}
                    height={50}
                    className="absolute top-[120px] left-[16px] w-[58px] h-[58px] rounded z-30 "
                    alt="avatar"
                />
            </div>
            <div className="  text-secondary text-[17px] font-[700] mt-[40px] ml-[16px] ">{data?.author}</div>
            <p className=" text-textDate text-[10px] ml-[16px] mt-[2px] font-normal  ">
                <span className=" text-[#5b5959] text-[12px] font-medium">
                    {numeral(data?.subCount).format("0,0a").toUpperCase()}
                </span>
                : Người Đăng Ký
            </p>
        </>
    );
}

export default Header;
