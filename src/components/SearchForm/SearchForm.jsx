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
  const [inputValues, setInputValues] = useState({});

  function firstElement(array) {
    if (array.length === 0) {
      return undefined;
    }
    if (array instanceof Array || typeof array === "string") {
      return array[0];
    }
  }

  const handleInputSearch = (evt) => {
    const input = evt.target;
    const name = input.name;
    const value = input.value;
    setInputValues({ ...inputValues, [name]: value });
  };

  let filteredStreets;
  const pattern = (str) => /^[а-яА-Я -]+$/i.test(str);
  if (
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

  if (typeof inputValues.house !== "undefined") {
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
  if (typeof inputValues.flat !== "undefined") {
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
