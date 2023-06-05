import { createSlice } from "@reduxjs/toolkit";

const VideoTrendingSlice = createSlice({
    name: "VideoTrendingSlice",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        deleteVideo: (state, action) => {
            const index = state.data.findIndex((element) => element.videoId === action.payload);
            if (index !== -1) {
                state.data.splice(index, 1);
            }
        },
    },
});

export const { setData, setLoading, setError, deleteVideo } = VideoTrendingSlice.actions;

export default VideoTrendingSlice;
