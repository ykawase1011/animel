import * as actionTypes from '../utils/actionTypes';
import axios from 'axios' // API取得用


// Notification操作
export const setNotification = (variant, message) => ({
  type: actionTypes.SET_NOTIFICATION,
  variant: variant,
  message: message,
});
export const closeNotification = (variant, message) => ({
  type: actionTypes.CLOSE_NOTIFICATION,
});

// 非同期取得操作
export const getAnimes = (year, cours) => {
  return (dispatch) => {
    dispatch(getAnimesRequest());
    
    // API: ShangriLa Anime API V1
    // https://qiita.com/AKB428/items/64938febfd4dcf6ea698
    // を利用させていただきました。素晴らしいAPI、大変感謝です。
    // SSL化していないサイトの場合はこのAPIは両方対応しているのでhttpに修正すること。
    return axios.get('https://api.moemoe.tokyo/anime/v1/master/' + year + '/' + cours)
      .then(response => dispatch(getAnimesSuccess(response.data)))
      .catch(error => dispatch(getAnimesFailure(error)))
  };
};

export const getAnimesRequest = () => ({
  type: actionTypes.GET_ANIMES_REQUEST,
});

export const getAnimesSuccess = (json) => ({
  type: actionTypes.GET_ANIMES_SUCCESS,
  items: json,
});

export const getAnimesFailure = (error) => ({
  type: actionTypes.GET_ANIMES_FAILURE,
  error: error,
});