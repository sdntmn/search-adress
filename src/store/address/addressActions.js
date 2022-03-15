import axios from "axios";
import {
  ALL_STREETS,
  ALL_HOUSE_STREET,
  ALL_FLATS_HOUSE,
} from "../../utils/config";

export const SET_STREETS = "@@address/SET_STREETS";
export const SET_HOUSES = "@@address/SET_HOUSES";
export const SET_FLATS = "@@address/SET_FLATS";
export const SET_LOADING = "@@address/SET_LOADING";
export const SET_ERROR = "@@address/SET_ERROR";

const setStreets = (streets) => ({
  type: SET_STREETS,
  payload: streets,
});

const setHouses = (houses) => ({
  type: SET_HOUSES,
  payload: houses,
});

const setFlats = (flats) => ({
  type: SET_FLATS,
  payload: flats,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadStreets = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get(ALL_STREETS)
    .then((response) => dispatch(setStreets(response.data)))
    .catch((err) => dispatch(setError(err.message)));
};

export const loadHouses = (streetId) => (dispatch) => {
  dispatch(setLoading());
  axios
    .get(ALL_HOUSE_STREET + `${streetId}`)
    .then((response) => dispatch(setHouses(response.data)))
    .catch((err) => dispatch(setError(err)));
};

export const loadFlats = (houseId) => (dispatch) => {
  dispatch(setLoading());

  axios
    .get(ALL_FLATS_HOUSE + `${houseId}`)
    .then((response) => dispatch(setFlats(response.data)))
    .catch((err) => dispatch(setError(err)));
};
