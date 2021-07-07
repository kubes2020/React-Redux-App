import {
  FETCH_SONG_START,
  FETCH_SONG_SUCCESS,
  FETCH_SONG_FAILURE,
} from "../actions/songActions";

const initialState = {
  songs: [],
  isLoading: false,
  error: "",
};

export const songReducer = (state = initialState, action) => {
  console.log("action in songReducer", action.payload);
  switch (action.type) {
    case FETCH_SONG_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SONG_SUCCESS:
      return {
        ...state,
        songs: action.payload,
        isLoading: false,
      };
    case FETCH_SONG_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
