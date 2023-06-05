import { createSlice } from "@reduxjs/toolkit";

const VideoCommentSlice = createSlice({
    name: "videoComment",
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
    },
});

export const { setData, setLoading, setError } = VideoCommentSlice.actions;

export default VideoCommentSlice;
