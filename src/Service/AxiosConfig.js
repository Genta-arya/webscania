import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: "https://server-scania.vercel.app/api/v1",
    headers: {
        "Content-Type": "application/json"
    }
});