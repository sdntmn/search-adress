import { React, useState, useEffect, useCallback } from "react";

const SearchForm = function ({
  streets,
  houses,
  flats,
  setIdStreets,
  setIdHouse,
  setIdFlat,
}) {
  const [inputSearch, setInputSearch] = useState("");
  const [inputValues, setInputValues] = useState({});

  const handleInputSearch = (evt) => {
    const input = evt.target;
    const name = input.name;
    const value = input.value;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };
  console.log(inputValues.street);

  let filteredStreets;

  useEffect(() => {}, [filteredStreets, setIdStreets]);

  if (typeof inputValues.street !== "undefined") {
    filteredStreets = streets.filter((street) => {
      const inputValueStreet = inputValues.street.toLowerCase();
      const dataStreet = street.name
        .toLowerCase()
        .trim()
        .includes(inputValueStreet);

      return dataStreet;
    });
    setIdStreets(firstElement(filteredStreets));
  }

  function firstElement(array) {
    if (array.length === 0) {
      return undefined;
    }
    if (array instanceof Array || typeof array === "string") {
      return array[0];
    }
  }

  let filteredHouse;
  if (typeof inputValues.house !== "undefined") {
    filteredHouse = houses.filter((house) => {
      const inputValueHouse = inputValues.house.toLowerCase();

      const dataHouse = house.name
        .toLowerCase()
        .trim()
        .includes(inputValueHouse);

      return dataHouse;
    });
    console.log(typeof filteredHouse);
    setIdHouse(firstElement(filteredHouse));
  }

  let filteredFlats;
  if (typeof inputValues.flat !== "undefined") {
    filteredFlats = flats.filter((flat) => {
      const inputValueFlat = inputValues.flat.toLowerCase();

      const dataHouse = flat.name.toLowerCase().trim().includes(inputValueFlat);

      return dataHouse;
    });
    console.log(typeof filteredFlats);
    setIdFlat(firstElement(filteredFlats));
  }

  return (
    <div className='searchForm'>
      <form className='searchForm__section' name='search'>
        <div className='searchForm__movies'>
          <input
            className='searchForm__movies-input'
            onChange={handleInputSearch}
            value={inputValues.street}
            type='text'
            name='street'
            placeholder='Улица'
            id=''
            required
          />

          <input
            className='searchForm__movies-input'
            onChange={handleInputSearch}
            value={inputValues.house}
            type='text'
            name='house'
            placeholder='Дом'
            id=''
            required
          />

          <input
            className='searchForm__movies-input'
            onChange={handleInputSearch}
            value={inputValues.flat}
            type='flat'
            placeholder='Кв./офис'
            id=''
            required
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
