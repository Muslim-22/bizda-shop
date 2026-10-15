import api from "@/src/services/api/api";
import { useQuery } from "@tanstack/react-query"; // 1. Importni unutmaslik kerak

const useBanners = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["banners"],
        queryFn: async () => {
            const response = await api.get("/banners");
            return response.data; // 2. Faqat .data ni qaytarish muhim!
        }
    });
    
    return { data, isLoading };
}

export default useBanners;