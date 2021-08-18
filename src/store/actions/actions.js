import {
  DAILY_DATA_SUCCESS,
  DAILY_DATA_FAILURE,
  LATEST_DATA_SUCCESS,
  LATEST_DATA_FAILURE,
  } from "../constants/constants";

import PollutionDataService from "../../service/pollutionDataService";

  export const getDailyPollutionData = (date) => {
    return (dispatch) => {
      PollutionDataService.getDailyPollutionData(date).then((response) => {
        if (response) {
          dispatch(success(response));
        } else {
          dispatch(failure(response));
        }
      });
      function success(response) {
        return { type: DAILY_DATA_SUCCESS, response };
      }
      function failure(error) {
        return { type: DAILY_DATA_FAILURE, error };
      }
    };
  };

  export const getLatestPollutionData = () => {
    return (dispatch) => {
      PollutionDataService.getLatestPollutionData().then((response) => {
        if (response) {
          dispatch(success(response));
        } else {
          dispatch(failure(response));
        }
      });
      function success(response) {
        return { type: LATEST_DATA_SUCCESS, response };
      }
      function failure(error) {
        return { type: LATEST_DATA_FAILURE, error };
      }
    };
  };
