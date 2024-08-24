import axiosInstance from "../helpers/axiosInstance";

const fetchCoinData = async (page = 1, currency = "inr") => {
    const perPage = 10;
    try {
        const response = await axiosInstance.get(`coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${page}`);
        return response.data;
        
    } catch(err) {
        console.log(err);
        return null;
    }
}

export default fetchCoinData;