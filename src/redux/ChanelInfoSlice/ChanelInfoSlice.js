import { createSlice } from "@reduxjs/toolkit";

const ChanelInfoSlice = createSlice({
    name: "ChanelInfo",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        banner: "",
        thumbnail: "",
        latestVideos: [],
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
        setBaner: (state, action) => {
            state.banner = action.payload;
        },
        setThumbnail: (state, action) => {
            state.thumbnail = action.payload;
        },
        deletelatestVideo: (state, action) => {
            const latestVideo = state.data.latestVideos;
            const index = latestVideo.findIndex((element) => element.videoId === action.payload);
            if (index !== -1) {
                latestVideo.splice(index, 1);
            }
        },
    },
});

export const { setData, setLoading, setError, setBaner, setThumbnail, deletelatestVideo } = ChanelInfoSlice.actions;

export default ChanelInfoSlice;
