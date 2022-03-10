import { client } from "../../api";
import { ADD_CLIENT_FLAT, ADD_CLIENT_FLAT_PUT } from "../../utils/config";

export const ADD_CLIENT = "workingDataClient/ADD_CLIENT";
export const SET_ERROR_CLIENT = "workingDataClient/SET_ERROR_CLIENT";
export const REMOVE_CLIENT = "workingDataClient/REMOVE_CLIENT";
export const EDIT_CLIENT = "workingDataClient/EDIT_CLIENT";

export const addClient = (addClient) => ({
  type: ADD_CLIENT,
  payload: addClient,
});

export const editClientFlat = (editClientId) => ({
  type: REMOVE_CLIENT,
  payload: editClientId,
});

export const removeClientFlat = (removeClientId) => ({
  type: REMOVE_CLIENT,
  payload: removeClientId,
});

const setError = (err) => ({
  type: SET_ERROR_CLIENT,
  payload: err,
});

export const addClientFlat = (user, id) => (dispatch) => {
  client(ADD_CLIENT_FLAT, {
    body: user,
  })
    .then((newClient) => {
      let user = {
        AddressId: id,
        ClientId: newClient.id,
      };
      client.put(ADD_CLIENT_FLAT_PUT, user);
    })
    .then((data) => dispatch(addClient(data)))
    .catch((err) => dispatch(setError(err)));
};
