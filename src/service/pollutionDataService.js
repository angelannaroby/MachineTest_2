import APIRequest from "../util/APIRequest";

const getLatestPollutionData= () => {
  return APIRequest({
    url: `v2/locations/63366`,
    // url: `v2/latest/63366`,
    method: "GET",
  });
};

const getDailyPollutionData = (date) => {
  return APIRequest({
    url: `v2/averages`,
    method: "GET",
    params: {
      limit: 100000,
      country_id : "US",
      location: "63366",
      spatial:"location",
      temporal:"day",
    }
  });
};

const PollutionDataService = {
  getLatestPollutionData,
  getDailyPollutionData,
};
export default PollutionDataService;