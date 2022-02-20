import React, { useState, useEffect, useCallback } from "react";
import SearchForm from "../SearchForm/SearchForm";
import CardList from "../CardList/CardList";
import * as api from "../../utils/api";
import AddClientPopup from "../AddClientPopup/AddClientPopup";
import DeletePopup from "../DeletePopup/DeletePopup";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";

function App() {
  // Первоначальное состояние попапа Profile (False - закрыт)===============
  const [popupAddClient, setPopupAddClient] = useState(false);
  const [popupDeleteClient, setPopupDeleteClient] = useState(false);
  const [popupEditClient, setPopupEditClient] = useState(false);
  const [streets, setStreets] = useState({});
  const [houses, setHouses] = useState({});
  const [flats, setFlats] = useState({});
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [flat, setFlat] = useState("");
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const [dataClientsFlat, setDataClientsFlat] = useState("");
  const [newClient, setNewClient] = useState({});
  const [addClient, setAddClient] = useState(false);

  const closeAllPopups = useCallback(() => {
    setPopupAddClient(false);
    setPopupDeleteClient(false);
    setPopupEditClient(false);
  }, []);

  const hendleAddClientPopup = useCallback(() => {
    setPopupAddClient(true);
  }, []);

  const [clientForDelete, setClientForDelete] = useState("");
  const [clientForEdit, setClientForEdit] = useState("");

  function handleClientDeleteRequest(card) {
    setClientForDelete(card);
    setPopupDeleteClient(true);
  }

  function handleClientEditRequest(card) {
    setClientForEdit(card);
    setPopupEditClient(true);
  }

  function handleCardDelete(evt) {
    evt.preventDefault();
    closeAllPopups();
    api
      .removeClient(clientForDelete.bindId)
      .then(() => {
        dataClientsFlat((state) =>
          state.filter((c) => c.bindId !== clientForDelete.bindId)
        );
      })
      .catch((err) => console.log(`При удалении клиента: ${err}`));
  }

  function handleClientEdit({ name, phone, email }) {
    let user = {
      name: name,
      phone: phone,
      email: email,
    };

    api
      .setAddUser(user)
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(`При редактировании данных: ${err}`));
  }

  useEffect(() => {
    let arrayStreets;
    api
      .getDataStreets()
      .then((res) => {
        arrayStreets = res.map((i) => {
          return {
            name: i.name,
            streetId: i.id,
          };
        });
        setStreets(arrayStreets);
      })
      .catch((error) => {
        if (error === `500`) {
          console.log("На сервере произошла ошибка");
        }

        console.log(`Ошибка получения данных ${error}`);
      });
  }, []);

  useEffect(() => {
    if (!!street) {
      let arrayHouses;
      api
        .getDataHouses(street.streetId)
        .then((res) => {
          arrayHouses = res.map((i) => {
            return {
              name: i.name,
              houseId: i.id,
            };
          });
          setHouses(arrayHouses);
          setButtonIsDisabled(false);
        })
        .catch((error) => {
          console.log(`Ошибка получения данных ${error}`);
        });
    }
  }, [street]);

  useEffect(() => {
    let arrayFlats;
    api
      .getDataFlats(house.houseId)
      .then((res) => {
        arrayFlats = res.map((i) => {
          return {
            typeId: i.typeId,
            name: i.name,
            flatId: i.id,
          };
        });
        setFlats(arrayFlats);

        setButtonIsDisabled(false);
      })
      .catch((error) => {
        console.log(`Ошибка получения данных ${error}`);
      });
  }, [house.houseId]);

  useEffect(() => {
    api
      .getDataUser(flat.flatId)
      .then((data) => {
        setDataClientsFlat(data);
      })
      .catch((error) => {
        console.log(`Ошибка получения данных ${error}`);
      });
    setButtonIsDisabled(true);
  }, [flat.flatId]);

  function onAddClient({ name, phone, email }) {
    let user = {
      Name: name,
      Phone: phone,
      Email: email,
    };
    api
      .setAddUser(user)
      .then((newClient) => {
        setNewClient(newClient);
        setAddClient(true);
        closeAllPopups();
      })
      .catch((err) => console.log(`Добавление клиента: ${err}`));
  }

  useEffect(() => {
    if (addClient) {
      let newUser = {
        AddressId: flat.flatId,
        ClientId: newClient.id,
      };
      api
        .changeDataClient(newUser)
        .then((client) => {
          setAddClient(false);
        })
        .catch((err) => console.log(`Добавление клиента: ${err}`));
    }
  }, [addClient, flat.flatId, newClient]);

  return (
    <div className='App'>
      <SearchForm
        streets={streets}
        street={street}
        houses={houses}
        house={house}
        flats={flats}
        setStreet={setStreet}
        setHouse={setHouse}
        setFlat={setFlat}
      />
      <CardList
        street={street}
        house={house}
        flat={flat}
        openPopup={hendleAddClientPopup}
        openPopupEdit={handleClientEditRequest}
        openPopupDeleteClient={handleClientDeleteRequest}
        isDisabled={buttonIsDisabled}
        dataClientsFlat={dataClientsFlat}
      />
      <AddClientPopup
        openPopup={popupAddClient}
        closePopup={closeAllPopups}
        onAddClient={onAddClient}
        street={street}
        house={house}
        flat={flat}
      />
      <EditProfilePopup
        handleClientEdit={handleClientEdit}
        openPopup={popupEditClient}
        closePopup={closeAllPopups}
        street={street}
        house={house}
        flat={flat}
        clientForEdit={clientForEdit}
      />
      <DeletePopup
        openPopup={popupDeleteClient}
        closePopup={closeAllPopups}
        onSubmit={handleCardDelete}
        street={street}
        house={house}
        flat={flat}
      />
    </div>
  );
}

export default App;
