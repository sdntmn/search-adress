import { client } from "../../api/index";
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

export const editClient = (payload) => ({
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

  client
    .get(ALL_CLIENT_FLAT + `${flatId}`)
    .then((data) => {
      dispatch(setClients(data));
    })
    .catch((err) => dispatch(setError(err.message)));
};

export const addClientFlat = (user, id) => (dispatch) => {
  client(ADD_CLIENT_FLAT, {
    body: user,
  })
    .then((newClient) => {
      let newUser = {
        AddressId: id,
        ClientId: newClient.id,
      };

      client.put(PUT_AND_DELETE_CLIENT_FLAT, newUser);
      user.id = newClient.id;
      dispatch(addClient(user));
    })

    .catch((err) => dispatch(setError(err)));
};

export const deleteClientFlat = (id) => (dispatch) => {
  client
    .delete(PUT_AND_DELETE_CLIENT_FLAT + `/${id}`)
    .then(() => {
      dispatch(deleteClient(id));
    })
    .catch((err) => dispatch(setError(err)));
};

export const editClientFlat = (client) => (dispatch) => {
  client
    .put(PUT_AND_DELETE_CLIENT_FLAT, {
      body: client,
    })
    .then(() => {
      dispatch(editClient());
    })
    .catch((err) => dispatch(setError(err)));
};
