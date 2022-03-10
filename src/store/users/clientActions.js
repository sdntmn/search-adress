import { client } from "../../api/index";
import { ALL_CLIENT_FLAT } from "../../utils/config";

export const SET_CLIENTS = "@@users/SET_CLIENTS";
export const SET_LOADING_CLIENTS = "@@users/SET_LOADING_CLIENTS";
export const SET_ERROR_CLIENTS = "@@users/SET_ERROR_CLIENTS";

export const setClients = (clientsFlat) => ({
  type: SET_CLIENTS,
  payload: clientsFlat,
});

export const setLoading = () => ({
  type: SET_LOADING_CLIENTS,
});

export const setError = (err) => ({
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
