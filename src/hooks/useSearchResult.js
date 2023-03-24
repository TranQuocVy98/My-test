import { API_ENDPOINTS } from "@/utils/apiClient";
import { axiosInstance } from "@/utils/axiosInStance";

import { useQuery } from "react-query";

const useSearchResult = ({ q, page = 0, region = "VN", type = "video" }) => {
    const { data, isLoading, error } = useQuery(["search", q, page, region, type], async () => {
        if (!q) {
            throw new Error("Missing params `q`!");
        }
        const res = await axiosInstance.get(API_ENDPOINTS.SEARCH, {
            params: { q, type, page, region },
        });
        return res.data;
    });

    return { data, isLoading, error };
};

export default useSearchResult;
