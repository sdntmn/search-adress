import { React, useState, useEffect, useCallback } from "react";

const SearchForm = function ({
  streets,
  houses,
  flats,
  setStreet,
  setHouse,
  setFlat,
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

  function firstElement(array) {
    if (array.length === 0) {
      return undefined;
    }
    if (array instanceof Array || typeof array === "string") {
      return array[0];
    }
  }

  let filteredStreets;

  if (typeof inputValues.street !== "undefined") {
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

  if (typeof inputValues.house !== "undefined") {
    const inputValueHouse = inputValues.house.toLowerCase();
    let houseClient = houses.find((item) => item.name == inputValueHouse);
    setHouse(houseClient);
  }

  if (typeof inputValues.flat !== "undefined") {
    const inputValueFlat = inputValues.flat.toLowerCase();
    let flatClient = flats.find((item) => item.name == inputValueFlat);
    setFlat(flatClient);
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
            name='flat'
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
