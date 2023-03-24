import { API_ENDPOINTS } from "@/utils/apiClient";
import { axiosInstance } from "@/utils/axiosInStance";
import { useQuery } from "react-query";

const useVideoComment = (videoId) => {
    const { data, isLoading, error } = useQuery(["comments", videoId], async () => {
        if (!videoId) {
            throw new Error("Missing query key!");
        }
        const res = await axiosInstance.get(API_ENDPOINTS.COMMENTS + videoId);
        return res.data;
    });

    return { data, isLoading, error };
};

export default useVideoComment;
