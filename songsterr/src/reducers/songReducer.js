import {
  FETCH_SONG_START,
  FETCH_SONG_SUCCESS,
  FETCH_SONG_FAILURE,
} from "../actions/songActions";

const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

export const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONG_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SONG_SUCCESS:
      return {
        ...state,
        data: action.payload,
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
