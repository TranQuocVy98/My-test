// actions.js
import { setLoading, setData, setError } from "./VideoCommentSlice";
import { API_ENDPOINTS } from "@/utils/apiClient";
import { axiosInstance } from "@/utils/axiosInStance";

export const fetchVideoComment = (videoId) => async (dispatch) => {
    try {
        dispatch(setLoading(true));

        const res = await axiosInstance.get(API_ENDPOINTS.COMMENTS + videoId);

        dispatch(setData(res.data.comments));
    } catch (err) {
        dispatch(setError(err.message));
    } finally {
        dispatch(setLoading(false));
    }
};
