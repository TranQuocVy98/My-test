import useVideoComment from "@/hooks/useVideoComment";
import { useRouter } from "next/router";
import Comment from "@/components/Comment";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import base64url from "base64url";

function RattingPage() {
    const router = useRouter();
    const { id } = router.query;
    const defaultId =
        typeof id !== "undefined" ? id : JSON.stringify({ id: "eEQoeKGCQ4c", authorId: "UCOvl7YE6sNlUdYXqlb2yXxw" });
    const data = JSON.parse(base64url.decode(defaultId));
    // const data = JSON.parse(defaultId);

    const { isLoading, error, data: commentResult } = useVideoComment(data.id);
    const comments = commentResult?.comments;
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Header />
            <Menu id={data} />
            <Comment comment={comments} isLoading={isLoading} />
        </>
    );
}

export default RattingPage;
