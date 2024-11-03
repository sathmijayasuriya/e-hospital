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
  try {
    const response = await axios.post(`${Configuration.BASE_URL}/addRequestData`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Axios automatically parses the JSON response
  } catch (error) {
    if (error.response) {
      console.error("Error response: ", error.response.data);
      console.error("Error status: ", error.response.status);
      console.error("Error headers: ", error.response.headers);
    } else if (error.request) {
      console.error("Error request: ", error.request);
    } else {
      console.error("Error message: ", error.message);
    }
    throw error;
  }
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

  //add report data
  export const addReportData = async (formData) => {
    try {
      const response = await axios.post(`${Configuration.BASE_URL}/addReportData`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data; // Adjust based on your backend response
    } catch (error) {
      console.error("Error adding report data:", error);
      throw error; // Rethrow the error for handling in the component
    }
  };