import axios from "axios";
import { COIN_DATA_URL } from "./constants";

const axiosInstance = axios.create({
    baseURL: COIN_DATA_URL,
})
export default axiosInstance;