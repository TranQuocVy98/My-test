import { createSlice } from "@reduxjs/toolkit";

const ListVideoSlice = createSlice({
    name: "ListVideo",
    initialState: {
        init: {
            author: "Sơn Tùng M-TP Official",
            authorId: "UClyA28-01x4z60eWQ2kiNbA",
            authorUrl: "/channel/UClyA28-01x4z60eWQ2kiNbA",
            authorVerified: true,
            description: "",
            descriptionHtml: "",
            isUpcoming: false,
            lengthSeconds: 258,
            liveNow: false,
            premium: false,
            published: 1683428516,
            publishedText: "4 weeks ago",
            title: "SON TUNG M-TP | MAKING MY WAY | OFFICIAL VISUALIZER",
            type: "video",
            videoId: "niPkap1ozUA",
        },
        data: [],
    },
    reducers: {
        SetUser: (state, action) => {
            state.init = action.payload;
        },
        addVideo: (state, action) => {
            state.data.push(action.payload);
        },
        deleteVideo: (state, action) => {
            const index = state.data.findIndex((element) => element.videoId === action.payload);
            if (index !== -1) {
                state.data.splice(index, 1);
            }
        },
    },
});
export default ListVideoSlice;
