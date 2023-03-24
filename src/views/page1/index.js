import ListAudio from "@/components/ListAudio";
import react from "react";
import Video from "@/components/Video";
import useSearchResult from "@/hooks/useSearchResult";
import ListTicket from "@/components/ListTicket";
import ListVideo from "@/components/ListVideo";

export default function HomePage({ search, setIdVideo }) {
    const { isLoading, error, data: searchResults } = useSearchResult({ q: search });
    const [getVideo, setGetVideo] = react.useState("eEQoeKGCQ4c");
    const handleIdVideo = (id, authorId) => {
        setGetVideo(id);
        setIdVideo(id, authorId);
    };
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <ListTicket searchResults={searchResults} isLoading={isLoading} />
            <div className="mt-[20px] ml-[19px] text-2xl font-bold leading-9">ビデオ</div>
            <div className="w-[343px] h-[199px] bg-background mt-[20px] rounded-[8px] ml-[19px]">
                <Video videoId={getVideo} isLoading={isLoading} />
            </div>
            <ListVideo searchResults={searchResults?.slice(0, 11)} setIdVideo={handleIdVideo} isLoading={isLoading} />
            <div className="mt-[20px]  ml-[19px] text-2xl font-bold leading-9">オーディオ</div>
            <ListAudio />
            <ListAudio />
        </>
    );
}
