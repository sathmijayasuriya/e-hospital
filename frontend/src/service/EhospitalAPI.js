import axios from "axios";
import Configuration from "../Configuration";

//fetch request list

export const FetchRequests = async() =>{
    try {
        const response = await axios.get(`${Configuration.BASE_URL}/getRequestData`);
        console.log("response",response);
        console.log("response",response.data);
            return response.data;

    }catch (error) {
        throw error;
    }
}
// For adding a request
export const addRequestData = async (formData) => {
    const response = await fetch("/api/ehospital/addRequestData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return await response.json();
  };
  
  // For editing a request
  export const editRequestData = async (formData) => {
    const response = await fetch(`/api/ehospital/editRequestData/${formData.requestId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return await response.json();
  };
  