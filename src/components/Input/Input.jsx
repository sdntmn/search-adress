import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Autocomplete from "../Autocomplete/Autocomplete";
import {
  setSearchStreet,
  setHouseSearch,
  setFlatSearch,
} from "../../store/search/searchActions";

const Input = function ({
  onChange,
  value,
  type,
  name,
  placeholder,
  options,
  id,
  setStreet,
  setHouse,
  setFlat,
}) {
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();

  const handlerClickInput = () => {
    setIsOpen(true);
  };

  return (
    <div className='searchForm__section-input'>
      <input
        className='searchForm__input'
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        required
        autocomplete='off'
        onClick={handlerClickInput}
      />
      <ul className='searchForm__input-variant'>
        {!value && null}
        {value &&
          name === "street" &&
          isOpen &&
          options &&
          options.map((item) => {
            return (
              <Autocomplete
                key={item.id}
                className='searchForm__input-autocomplete'
                onClick={() => {
                  dispatch(setSearchStreet(item.name || ""));
                  setStreet(item);
                  setIsOpen(false);
                }}>
                {item.name}
              </Autocomplete>
            );
          })}
        {value &&
          name === "house" &&
          isOpen &&
          options &&
          options.map((item) => {
            return (
              <Autocomplete
                key={item.id}
                className='searchForm__input-autocomplete'
                onClick={() => {
                  dispatch(setHouseSearch(item.name || ""));
                  setHouse(item);
                  setIsOpen(false);
                }}>
                {item.name}
              </Autocomplete>
            );
          })}
        {value &&
          name === "flat" &&
          isOpen &&
          options &&
          options.map((item) => {
            return (
              <Autocomplete
                key={item.id}
                className='searchForm__input-autocomplete'
                onClick={() => {
                  dispatch(setFlatSearch(item.name || ""));
                  setFlat(item);
                  setIsOpen(false);
                }}>
                {item.name}
              </Autocomplete>
            );
          })}
      </ul>
    </div>
  );
};

export default Input;
