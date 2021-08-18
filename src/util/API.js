import axios from "axios";

const API = () => {
  const defaultOptions = {
    baseURL: "https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/",
    headers: {
     "Content-type": "application/json"
  }
  };
  const instance = axios.create(defaultOptions);
  return instance;
};

export default API();