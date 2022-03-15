import axios from "axios";
import {
  ADD_CLIENT_FLAT,
  PUT_AND_DELETE_CLIENT_FLAT,
  ALL_CLIENT_FLAT,
} from "../../utils/config";

export const SET_CLIENTS = "@@users/SET_CLIENTS";
export const SET_LOADING_CLIENTS = "@@users/SET_LOADING_CLIENTS";
export const SET_ERROR_CLIENTS = "@@users/SET_ERROR_CLIENTS";
export const ADD_CLIENT = "@@users/ADD_CLIENT";
export const DELETE_CLIENT = "@@users/DELETE_CLIENT";
export const EDIT_CLIENT = "@@users/EDIT_CLIENT";

const setClients = (payload) => ({
  type: SET_CLIENTS,
  payload,
});

const addClient = (payload) => ({
  type: ADD_CLIENT,
  payload,
});

const deleteClient = (payload) => ({
  type: DELETE_CLIENT,
  payload,
});

const editClient = (payload) => ({
  type: EDIT_CLIENT,
  payload,
});

const setLoading = () => ({
  type: SET_LOADING_CLIENTS,
});

const setError = (err) => ({
  type: SET_ERROR_CLIENTS,
  payload: err,
});

export const loadClients = (flatId) => (dispatch) => {
  dispatch(setLoading());

  axios
    .get(ALL_CLIENT_FLAT + `${flatId}`)
    .then((response) => dispatch(setClients(response.data)))
    .catch((err) => dispatch(setError(err.message)));
};

export const addClientFlat = (user) => (dispatch) => {
  axios
    .post(ADD_CLIENT_FLAT, user)
    .then((response) => {
      if ((response.data.result = "OK")) {
        const addUser = {
          AddressId: user.bindId,
          ClientId: response.data.id,
        };
        axios
          .put(PUT_AND_DELETE_CLIENT_FLAT, addUser)
          .then(() => dispatch(addClient(user)));
      }
    })
    .catch((err) => dispatch(setError(err.message)));
};

export const deleteClientFlat = (id) => (dispatch) => {
  axios
    .delete(PUT_AND_DELETE_CLIENT_FLAT + `/${id}`)
    .then(() => dispatch(deleteClient(id)))
    .catch((err) => dispatch(setError(err)));
};

export const editClientFlat = (item) => (dispatch) => {
  axios
    .post(ADD_CLIENT_FLAT, item)
    .then(() => dispatch(editClient(item)))
    .catch((err) => dispatch(setError(err)));
};
