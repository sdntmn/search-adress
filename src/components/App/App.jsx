import { React, useState, useEffect, useCallback } from "react";
import SearchForm from "../SearchForm/SearchForm";
import * as api from "../../utils/api";

function App() {
  const [streets, setStreets] = useState({});
  const [houses, setHouses] = useState({});
  const [flats, setFlats] = useState({});
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [flat, setFlat] = useState("");
  useEffect(() => {
    let arrayStreets;
    api
      .getDataStreets()
      .then((res) => {
        console.log(res);
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
  console.log(street);

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
      })
      .catch((error) => {
        console.log(`Ошибка получения данных ${error}`);
      });
  }, [house.house, house.houseId, street.street]);
  console.log(flat);

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
    </div>
  );
}

export default App;
