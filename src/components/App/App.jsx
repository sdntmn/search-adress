import { React, useState, useEffect, useCallback } from "react";
import SearchForm from "../searchForm/searchForm";
import * as api from "../../utils/api";

function App() {
  const [streets, setStreets] = useState({});
  const [houses, setHouses] = useState({});
  const [flats, setFlats] = useState({});
  const [idStreet, setIdStreets] = useState("");
  const [idHouse, setIdHouse] = useState("");
  const [idFlat, setIdFlat] = useState("");
  useEffect(() => {
    let arrayStreets;
    api
      .getDataStreets()
      .then((res) => {
        console.log(res);
        arrayStreets = res.map((i) => {
          return {
            name: i.name,
            idStreet: i.id,
          };
        });
        setStreets(arrayStreets);
      })
      .catch((error) => {
        console.log(`Ошибка получения данных ${error}`);
      });
  }, []);

  console.log(idHouse.idHouse);
  useEffect(() => {
    let arrayHouses;
    api
      .getDataHouses(idStreet.idStreet)
      .then((res) => {
        console.log(res);
        arrayHouses = res.map((i) => {
          return {
            name: i.name,
            idHouse: i.id,
          };
        });
        setHouses(arrayHouses);
      })
      .catch((error) => {
        console.log(`Ошибка получения данных ${error}`);
      });
  }, [idStreet.idStreet]);

  useEffect(() => {
    let arrayFlats;
    api
      .getDataFlats(idFlat.idFlat)
      .then((res) => {
        console.log(res);
        arrayFlats = res.map((i) => {
          return {
            typeId: i.typeId,
            name: i.name,
            idFlat: i.id,
          };
        });
        setFlats(arrayFlats);
      })
      .catch((error) => {
        console.log(`Ошибка получения данных ${error}`);
      });
  }, [idFlat.idFlat, idHouse.idHouse, idStreet.idStreet]);
  console.log(idFlat);

  return (
    <div className='App'>
      <SearchForm
        streets={streets}
        houses={houses}
        flats={flats}
        setIdStreets={setIdStreets}
        setIdHouse={setIdHouse}
        setIdFlat={setIdFlat}
      />
    </div>
  );
}

export default App;
