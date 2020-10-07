import axios from "axios";

export const FETCH_SONG_START = "FETCH_SONG_START";
export const FETCH_SONG_SUCCESS = "FETCH_SONG_SUCCESS";
export const FETCH_SONG_FAILURE = "FETCH_SONG_FAILURE";

export const fetchSongs = (url) => (dispatch) => {
  dispatch({ type: FETCH_SONG_START });
  axios
    .get(url)
    .then((res) => {
      console.log("Res coming in", res.data);
      dispatch({ type: FETCH_SONG_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Error fetching res", err);
      dispatch({ FETCH_SONG_FAILURE, payload: err.error });
    });
};
