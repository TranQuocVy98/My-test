// actions.js
import { setLoading, setData, setError, setBaner, setThumbnail } from "./ChanelInfoSlice";
import { API_ENDPOINTS } from "@/utils/apiClient";
import { axiosInstance } from "@/utils/axiosInStance";

export const fetchChanelInfo = (IdChannel) => async (dispatch) => {
    try {
        dispatch(setLoading(true));

        const res = await axiosInstance.get(API_ENDPOINTS.CHANNEL + IdChannel);

        dispatch(setData(res.data));
        dispatch(setBaner(res.data?.authorBanners[3]?.url));
        dispatch(setThumbnail(res.data?.authorThumbnails[3]?.url));
    } catch (err) {
        dispatch(setError(err.message));
    } finally {
        dispatch(setLoading(false));
    }
};
