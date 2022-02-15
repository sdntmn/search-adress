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
export const setAddUser = (user, flatId) => {
  return fetch(`${SERVER_URL}/HousingStock​/client?client=${flatId}`, {
    mode: "no-cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkResponse)
    .then((result) =>
      JSON.stringify({
        name: user.name,
        phone: user.phone,
        email: user.email,
      })
    );
};

/*
async function getUsers() {
  let response = await fetch(
    `${SERVER_URL}/HousingStock/clients?addressId=47291`
  );
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    return data;
  } else {
    alert("error", response.status);
  }
}

console.log(getUsers());
*/
