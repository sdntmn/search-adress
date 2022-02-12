import React, { useState } from "react";

const Input = function ({
  onChange,
  value,
  setInputValues,
  type,
  name,
  placeholder,
  arrayData,
}) {
  const [isOpen, setIsOpen] = useState(true);

  const handlerClickItem = (evt) => {
    setInputValues({ [name]: evt.target.textContent });
    setIsOpen(false);
  };

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
        id=''
        required
        autocomplete='off'
        onClick={handlerClickInput}
      />
      <ul className='searchForm__input-variant'>
        {!value && null}
        {value &&
          isOpen &&
          arrayData &&
          arrayData.map((item, index) => {
            return (
              <li
                key={index}
                className='searchForm__input-autocomplete'
                onClick={handlerClickItem}>
                {item.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Input;
