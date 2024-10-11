import { axiosConfig } from "../AxiosConfig";


export const getDataWiring = async () => {
    try {
        const response = await axiosConfig.get("/wiring");
        return response.data;
    } catch (error) {
        throw error;
    }
}