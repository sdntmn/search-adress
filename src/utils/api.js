import { SERVER_URL } from "./config";
// Проверка ответа =========================================================
export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`${res.status}`);
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
  console.log(id);
  return fetch(`${SERVER_URL}/HousingStock/clients/?addressId=${id}`, {
    mode: "no-cors",
  }).then();
};

// Добавить жильца(POST) ========================================
export const setAddUser = ({ phone, email, name }) => {
  return fetch(`${SERVER_URL}/HousingStock​/client/?client_id=47282`, {
    mode: "no-cors",
    method: "POST",
    headers: {
      "Content-Type": ["application/json", "charset=utf-8"],
      "Transfer-Encoding": "chunked",
    },
    credentials: "include",
    body: JSON.stringify({ phone, email, name }),
  }).then(checkResponse);
};
