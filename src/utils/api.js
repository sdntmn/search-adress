import { SERVER_URL } from "./config";

// Проверка ответа =========================================================
export const checkResponse = (response) => {
  return response.ok ? response.json() : Promise.reject(`${response}`);
};

// Получить данные streets ======================================
export const getDataStreets = () => {
  return fetch(`${SERVER_URL}/Request/streets`, {
    method: "GET",
    headers: {
      "Content-Type": ["application/json", "charset=utf-8"],
    },
  }).then(checkResponse);
};

// Получить данные houses (GET) ======================
export const getDataHouses = (id) => {
  return fetch(`${SERVER_URL}/Request/houses/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

// Получить данные houses (GET) ======================
export const getDataFlats = (id) => {
  return fetch(`${SERVER_URL}/Request/house_flats/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

// Получить данные жильцов (GET) ======================
export const getDataUser = (id) => {
  return fetch(`${SERVER_URL}/HousingStock/clients?addressId=${id}`).then(
    checkResponse
  );
};

// Добавить жильца(POST) ========================================
export const setAddUser = (user) => {
  return fetch(`${SERVER_URL}/HousingStock/client`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then(checkResponse);
};

export const changeDataClient = (user) => {
  return fetch(`${SERVER_URL}/HousingStock/bind_client`, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then(checkResponse);
};

export const removeClient = (id) => {
  return fetch(`${SERVER_URL}/HousingStock/bind_client/${id}`, {
    method: "DELETE",
    headers: {
      accept: "text/plain",
    },
  }).then(checkResponse);
};
