import { axiosConfig } from "../AxiosConfig";

export const getDataWorkshop = async () => {
  try {
    const response = await axiosConfig.get("/folder");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDetailWorkshop = async (id) => {
  try {
    const response = await axiosConfig.get(`/folder/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
