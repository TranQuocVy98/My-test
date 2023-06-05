import { setLoading, setData, setError } from "./VideoTrendingSlice";
import { API_ENDPOINTS } from "@/utils/apiClient";
import { axiosInstance } from "@/utils/axiosInStance";

export const fetchVideoTrending = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));

        const res = await axiosInstance.get(API_ENDPOINTS.TRENDING, {
            params: { region: "VN" },
        });

        dispatch(setData(res.data.slice(0, 10)));
    } catch (err) {
        dispatch(setError(err.message));
    } finally {
        dispatch(setLoading(false));
    }
};
