import API from "./API";

const APIRequest = async (options) => {
  try {
    const response = await API(options);
    return response;
  } catch (e) {
    console.log("Exception", e);
    return e;
  }
};
export default APIRequest;