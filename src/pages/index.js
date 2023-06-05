import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Video from "@/components/Video";
import ListVideo from "@/components/ListVideo";
import ListTicket from "@/components/ListTicket";

export default function Home() {
    return (
        <>
            <Header />
            <Menu />
            <div className="mt-[10px] ml-[19px] text-xl font-bold leading-9">VIDEO</div>
            <div className="w-[343px] h-[199px] bg-background mt-[10px] rounded-[8px] ml-[19px]">
                <Video />
            </div>
            <ListVideo />
            <div className="mt-[20px]  ml-[19px] text-xl font-bold leading-9">TOP TRENDING.</div>
            <ListTicket />
        </>
    );
}
