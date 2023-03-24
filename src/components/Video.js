import React from "react";
import YouTube from "react-youtube";
import { SkeletonVideo } from "./SkeletonUI";

function Video(props) {
    const opts = {
        height: "200",
        width: "343",
        playerVars: {
            autoplay: 0,
        },
    };

    const { videoId, isLoading } = props;
    if (isLoading) return <SkeletonVideo />;

    return <YouTube videoId={videoId} opts={opts} />;
}

export default Video;
