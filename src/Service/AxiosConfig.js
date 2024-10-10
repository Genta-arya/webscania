import axios from "axios";

const axiosConfig = axios.create({
    baseURL: "https://server-scania.vercel.app/api/v1",
    headers: {
        "Content-Type": "application/json"
    }
});