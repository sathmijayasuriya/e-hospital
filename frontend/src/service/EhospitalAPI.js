import axios from "axios";
import Configuration from "../Configuration";

//fetch request list

export const FetchRequests = async() =>{
    try {
        const response = await axios.get(`${Configuration.BASE_URL}/getRequestData`);
            return response.data;

    }catch (error) {
        throw error;
    }
}