import {
  CLEAR_CONTROLS,
  SET_FLAT_SEARCH,
  SET_HOUSE_SEARCH,
  SET_STREET_SEARCH,
} from "./searchActions";

const initialState = {
  street: "",
  house: "",
  flat: "",
};

export const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_STREET_SEARCH:
      return {
        ...state,
        street: payload,
      };
    case SET_HOUSE_SEARCH:
      return {
        ...state,
        house: payload,
      };
    case SET_FLAT_SEARCH:
      return {
        ...state,
        flat: payload,
      };
    case CLEAR_CONTROLS:
      return initialState;
    default:
      return state;
  }
};
