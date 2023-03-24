import Header from "@/components/Header";
import Menu from "@/components/Menu";
import HomePage from "@/views/page1";
import { useState } from "react";
export default function Home() {
    const [id, setId] = useState({ id: "eEQoeKGCQ4c", authorId: "UCOvl7YE6sNlUdYXqlb2yXxw" });
    const handleIdVideo = (id, authorId) => {
        setId({ id, authorId });
    };
    return (
        <>
            <Header />
            <Menu id={id} />
            <HomePage search={"nhac-trung-quoc-hay"} setIdVideo={handleIdVideo} />
        </>
    );
}
