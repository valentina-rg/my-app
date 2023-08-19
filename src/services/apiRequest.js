import axios from "axios";


const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

apiRequest.defaults.headers.common["Content-Type"] = "application/json";


export default apiRequest;
