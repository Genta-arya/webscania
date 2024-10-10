import { axiosConfig } from "../AxiosConfig";

export const getDataType = async () => {
  try {
    const response = await axiosConfig.get("/type");

    return response.data;
  } catch (error) {
    throw error;
  }
};
