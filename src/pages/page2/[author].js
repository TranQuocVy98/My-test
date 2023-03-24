import Status from "@/components/Status";
import useChanelInfo from "@/hooks/useChanelInfo";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import { useRouter } from "next/router";
import base64url from "base64url";

function TimeLinePage() {
    const router = useRouter();
    const { author } = router.query;
    const defaultId =
        typeof author !== "undefined"
            ? author
            : JSON.stringify({ id: "eEQoeKGCQ4c", authorId: "UCOvl7YE6sNlUdYXqlb2yXxw" });

    // const data = JSON.parse(defaultId);
    const data = JSON.parse(base64url.decode(defaultId));

    const { isLoading, error, data: timelineResult } = useChanelInfo(data.authorId);
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const timeLine = timelineResult?.latestVideos;
    const image = timelineResult?.authorThumbnails[1].url;

    return (
        <>
            <Header />
            <Menu id={data} />
            <Status timeLine={timeLine} isLoading={isLoading} images={image} />
        </>
    );
}

export default TimeLinePage;
