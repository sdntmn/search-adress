import React, { useState } from "react";
import PopupWithForm from "../Popup/Popup";
import { useDispatch } from "react-redux";
import { addClientFlat } from "../../store/users/clientActions";

function AddClientPopup({ openPopup, closePopup, street, house, flat }) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    phone: "",
    email: "",
    name: "",
  });

  const handleChange = (evt) => {
    setInputValue({ ...inputValue, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    let user = {
      name: inputValue.name,
      phone: inputValue.phone,
      email: inputValue.email,
      bindId: flat.id,
    };
    dispatch(addClientFlat(user));
    closePopup();
  };

  return (
    <PopupWithForm
      openPopup={openPopup}
      closePopup={closePopup}
      onSubmit={handleSubmit}
      textButton='Добавить'
      name='addClient'>
      <fieldset className='popup__data'>
        <legend className='popup__title'>
          Улица {street.name} дом {house.name}&nbsp; кв. {flat.name}
        </legend>
        <input
          className='popup__input'
          id='addClient'
          minLength='2'
          maxLength='200'
          placeholder='Номер телефона в формате: +7 123 456 7890'
          type='tel'
          name='phone'
          onChange={handleChange}
          value={inputValue.phone}
          required
        />
        <input
          className='popup__input'
          id='addClient'
          minLength='2'
          maxLength='200'
          placeholder='email'
          type='email'
          name='email'
          onChange={handleChange}
          value={inputValue.email}
          required
        />
        <input
          className='popup__input'
          id='addClient'
          minLength='2'
          maxLength='200'
          placeholder='ФИО'
          type='text'
          name='name'
          onChange={handleChange}
          value={inputValue.name}
          required
        />
      </fieldset>
    </PopupWithForm>
  );
}

export default AddClientPopup;
