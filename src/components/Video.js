import React from "react";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";

function Video() {
    const { videoId } = useSelector((state) => state.ListVideo.init);

    const opts = {
        height: "200",
        width: "343",
        playerVars: {
            autoplay: 0,
        },
    };
    return <YouTube videoId={videoId} opts={opts} />;
}

export default Video;
