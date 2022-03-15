import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchForm from "../SearchForm/SearchForm";
import CardList from "../CardList/CardList";
import AddClientPopup from "../AddClientPopup/AddClientPopup";
import DeletePopup from "../DeletePopup/DeletePopup";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";

import {
  loadHouses,
  loadStreets,
  loadFlats,
} from "../../store/address/addressActions";
import { deleteClientFlat } from "../../store/users/clientActions";
import { loadClients } from "../../store/users/clientActions";

function App() {
  // Первоначальное состояние попапа Profile (False - закрыт)===============
  const [popupAddClient, setPopupAddClient] = useState(false);
  const [popupDeleteClient, setPopupDeleteClient] = useState(false);
  const [popupEditClient, setPopupEditClient] = useState(false);
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [flat, setFlat] = useState("");

  const dispatch = useDispatch();

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
    if (flat?.id) {
      dispatch(loadClients(flat.id));
    }
  }, [dispatch, flat, flat.id]);

  const closeAllPopups = () => {
    setPopupAddClient(false);
    setPopupDeleteClient(false);
    setPopupEditClient(false);
  };

  const hendleAddClientPopup = () => {
    setPopupAddClient(true);
  };

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

  const handleCardDelete = async (evt) => {
    evt.preventDefault();
    dispatch(deleteClientFlat(clientForDelete.bindId));
    closeAllPopups();
  };

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
      />
      <AddClientPopup
        openPopup={popupAddClient}
        closePopup={closeAllPopups}
        street={street}
        house={house}
        flat={flat}
      />
      <EditProfilePopup
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
      />
    </div>
  );
}

export default App;
