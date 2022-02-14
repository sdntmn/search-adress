import { React, useState, useEffect, useCallback } from "react";
import SearchForm from "../SearchForm/SearchForm";
import UserCard from "../UserCard/UserCard";
import CardList from "../CardList/CardList";
import PopupWithForm from "../Popup/Popup";
import * as api from "../../utils/api";

function App() {
  // Первоначальное состояние попапа Profile (False - закрыт)===============
  const [popupOpen, setPopupOpen] = useState(false);
  const [streets, setStreets] = useState({});
  const [houses, setHouses] = useState({});
  const [flats, setFlats] = useState({});
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [flat, setFlat] = useState("");
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const [dataClientsFlat, setDataClientsFlat] = useState("");

  const closeAllPopups = useCallback(() => {
    setPopupOpen(false);
  }, []);

  const openPopup = useCallback(() => {
    setPopupOpen(true);
  }, []);

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
        console.log(`Ошибка получения данных ${error}`);
      });
  }, []);

  useEffect(() => {
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
  }, [street.streetId]);

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

  let id = flat.flatId;

  useEffect(() => {
    api
      .getDataUser(flat.flatId)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        console.log(`Ошибка получения данных ${error}`);
      });
    setButtonIsDisabled(true);
  }, [flat.flatId]);

  function onAddClient({ phone, email, name }) {
    api
      .setAddUser({ phone, email, name, id })
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(`Ошибка данных карточки ${error}`);
      });
  }

  return (
    <div className='App'>
      <SearchForm
        streets={streets}
        houses={houses}
        flats={flats}
        setStreet={setStreet}
        setHouse={setHouse}
        setFlat={setFlat}
      />
      <CardList
        street={street}
        house={house}
        flat={flat}
        setPopupOpen={openPopup}
        isDisabled={buttonIsDisabled}>
        <UserCard dataClientsFlat={dataClientsFlat}></UserCard>
      </CardList>
      <PopupWithForm
        street={street}
        house={house}
        flat={flat}
        openPopup={popupOpen}
        closePopup={closeAllPopups}
        onAddClient={onAddClient}></PopupWithForm>
    </div>
  );
}

export default App;
