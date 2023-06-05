import { API_ENDPOINTS } from "@/utils/apiClient";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axiosInStance";

const useSearchResult = ({ search, page = 0, region = "VN", type = "video" }) => {
    let q = useDebounce(search, 500);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const res = await axiosInstance.get(API_ENDPOINTS.SEARCH, {
                    params: { q, page, region, type },
                });
                setData(res.data);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [q, page, region, type]);

    return { data, isLoading, error };
};

export default useSearchResult;
