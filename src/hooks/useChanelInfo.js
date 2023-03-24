import { API_ENDPOINTS } from "@/utils/apiClient";
import { axiosInstance } from "@/utils/axiosInStance";
import { useQuery } from "react-query";

const useChanelInfo = (IdChannel) => {
    const { data, isLoading, error } = useQuery(["channels", IdChannel], async () => {
        if (!IdChannel) {
            throw new Error("Missing params key!");
        }
        const res = await axiosInstance.get(API_ENDPOINTS.CHANNEL + IdChannel);
        return res.data;
    });

    return { data, isLoading, error };
};

export default useChanelInfo;
