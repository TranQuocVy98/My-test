import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import VideoTrendingSlice from "@/redux/VideoTrendingSlice/VideoTrendingSlice";
import VideoCommentSlice from "@/redux/VideoCommentSlice/VideoCommentSlice";
import ChanelInfoSlice from "@/redux/ChanelInfoSlice/ChanelInfoSlice";
import ListVideoSlice from "@/redux/ListVideoSlice/ListVideoSlice";

const store = configureStore({
    reducer: {
        videoTrending: VideoTrendingSlice.reducer,
        videoComment: VideoCommentSlice.reducer,
        ChanelInfo: ChanelInfoSlice.reducer,
        ListVideo: ListVideoSlice.reducer,
    },
    middleware: [thunk],
});

export default store;
