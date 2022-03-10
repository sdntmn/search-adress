export const SET_STREET_SEARCH = "@@search/SET_STREET_SEARCH";
export const SET_HOUSE_SEARCH = "@@search/SET_HOUSE_SEARCH";
export const SET_FLAT_SEARCH = "@@search/SET_FLAT_SEARCH";
export const CLEAR_CONTROLS = "@@search/CLEAR_CONTROLS";

export const setSearchStreet = (street) => ({
  type: SET_STREET_SEARCH,
  payload: street,
});

export const setHouseSearch = (house) => ({
  type: SET_HOUSE_SEARCH,
  payload: house,
});

export const setFlatSearch = (flat) => ({
  type: SET_FLAT_SEARCH,
  payload: flat,
});

export const clearControls = () => ({
  type: CLEAR_CONTROLS,
});
