import { React, useEffect, useState } from "react";
import Input from "../Input/Input";

const SearchForm = function ({
  streets,
  houses,
  flats,
  setStreet,
  setHouse,
  setFlat,
}) {
  const [inputValues, setInputValues] = useState({
    street: "",
    house: "",
    flat: "",
  });

  function firstElement(array) {
    if (array.length === 0) {
      return undefined;
    }
    if (array instanceof Array || typeof array === "string") {
      return array[0];
    }
  }

  const handleInputSearch = (evt) => {
    setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
  };

  useEffect(() => {
    setInputValues(inputValues);
  }, [inputValues]);

  let filteredStreets;
  const pattern = (str) => /^[а-яА-Я -]+$/i.test(str);
  if (
    streets.length > 0 &&
    typeof inputValues.street !== "undefined" &&
    pattern(inputValues.street)
  ) {
    filteredStreets = streets.filter((street) => {
      const inputValueStreet = inputValues.street.toLowerCase();
      const dataStreet = street.name
        .toLowerCase()
        .trim()
        .includes(inputValueStreet);

      return dataStreet;
    });

    setStreet(firstElement(filteredStreets));
  }

  let filteredHouses;

  if (houses.length > 0 && typeof inputValues.house !== "undefined") {
    filteredHouses = houses.filter((house) => {
      const inputValueHouse = inputValues.house.toLowerCase();
      const dataHouse = house.name
        .toLowerCase()
        .trim()
        .includes(inputValueHouse);

      return dataHouse;
    });

    setHouse(firstElement(filteredHouses));
  }

  let filteredFlat;
  if (flats.length > 0 && typeof inputValues.flat !== "undefined") {
    filteredFlat = flats.filter((flat) => {
      const inputValueFlat = inputValues.flat.toLowerCase();
      const dataFlat = flat.name.toLowerCase().trim().includes(inputValueFlat);

      return dataFlat;
    });

    setFlat(firstElement(filteredFlat));
  }

  return (
    <div className='searchForm'>
      <form className='searchForm__section' name='search'>
        <Input
          onChange={handleInputSearch}
          value={inputValues.street}
          id='street'
          type='text'
          name='street'
          placeholder='Улица'
          arrayData={filteredStreets}
          setInputValues={setInputValues}
          required
          autocomplete='new'
        />
        <Input
          onChange={handleInputSearch}
          value={inputValues.house}
          id='house'
          type='text'
          name='house'
          placeholder='Дом'
          arrayData={filteredHouses}
          setInputValues={setInputValues}
          required
          autocomplete='ne'
        />
        <Input
          onChange={handleInputSearch}
          value={inputValues.flat}
          id='flat'
          type='flat'
          name='flat'
          placeholder='Кв./офис'
          arrayData={filteredFlat}
          setInputValues={setInputValues}
          required
          autocomplete='n'
        />
      </form>
    </div>
  );
};

export default SearchForm;
