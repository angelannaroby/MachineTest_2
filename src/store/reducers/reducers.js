import {
    LATEST_DATA_SUCCESS,
    LATEST_DATA_FAILURE,
    DAILY_DATA_FAILURE,
    DAILY_DATA_SUCCESS,
  } from "../constants/constants";

  const initialState = {
    dailyPollutionData: null,
    latestPollutionData: null,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case DAILY_DATA_SUCCESS:
        return {
          ...state,
          dailyPollutionData: action.response.data.results
          };
      case DAILY_DATA_FAILURE:
        return {
          ...state,
          }; 
      case LATEST_DATA_SUCCESS:
        return {
          ...state,
          latestPollutionData: action.response.data.results[0]
          };
      case LATEST_DATA_FAILURE:
          return {
           ...state,
          }; 
    default:
      return state;
  }
}
  