import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchForm from "../SearchForm/SearchForm";
import CardList from "../CardList/CardList";
import * as api from "../../utils/api";
import AddClientPopup from "../AddClientPopup/AddClientPopup";
import DeletePopup from "../DeletePopup/DeletePopup";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";
import { selectAllClientsFlat } from "../../store/users/clientSelector";
import {
  loadHouses,
  loadStreets,
  loadFlats,
} from "../../store/address/addressActions";
import { deleteClientFlat } from "../../store/users/clientActions";

import { loadClients } from "../../store/users/clientActions";
import { selectAllStreets } from "../../store/address/addressSelectors";

function App() {
  // Первоначальное состояние попапа Profile (False - закрыт)===============
  const [popupAddClient, setPopupAddClient] = useState(false);
  const [popupDeleteClient, setPopupDeleteClient] = useState(false);
  const [popupEditClient, setPopupEditClient] = useState(false);
  const [streets, setStreets] = useState({});
  const [houses, setHouses] = useState({});
  const [flats, setFlats] = useState({});
  const [street, setStreet] = useState("");
  const [countClient, setCountClient] = useState({});
  const [house, setHouse] = useState("");
  const [flat, setFlat] = useState("");
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const [dataClientsFlat, setDataClientsFlat] = useState("");
  const [newClient, setNewClient] = useState({});
  const [addClient, setAddClient] = useState(false);

  const dispatch = useDispatch();
  const clientsFlat = useSelector(selectAllClientsFlat);

  useEffect(() => {
    const countClientFlat = () => {
      setCountClient(clientsFlat.list.length);
    };
    countClientFlat();
  }, [clientsFlat.list.length]);

  // Получение списка улиц
  useEffect(() => {
    dispatch(loadStreets());
  }, [dispatch]);

  // Получение списка номеров домов улицы
  useEffect(() => {
    if (street?.id) {
      dispatch(loadHouses(street.id));
    }
  }, [dispatch, street, street.id]);

  // Получение списка номеров квартир м.к.дома
  useEffect(() => {
    if (house?.id) {
      dispatch(loadFlats(house.id));
    }
  }, [dispatch, house, house.id]);

  // Получение списка жильцов квартиры
  useEffect(() => {
    if (flat?.id || countClient !== clientsFlat.list.length) {
      dispatch(loadClients(flat.id));
    }
  }, [clientsFlat.list.length, countClient, dispatch, flat, flat.id]);

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
    console.log(card);
    setClientForDelete(card);
    setPopupDeleteClient(true);
  }

  function handleClientEditRequest(card) {
    setClientForEdit(card);
    setPopupEditClient(true);
  }

  function handleCardDelete1(evt) {
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

  const handleCardDelete = async (evt) => {
    evt.preventDefault();
    dispatch(deleteClientFlat(clientForDelete.bindId));
    closeAllPopups();
  };

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

  console.log(addClient);

  return (
    <div className='App'>
      <SearchForm setStreet={setStreet} setHouse={setHouse} setFlat={setFlat} />
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
        setAddClient={setAddClient}
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
