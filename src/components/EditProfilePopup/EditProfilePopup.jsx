import React, { useState, useCallback } from "react";
import PopupWithForm from "../Popup/Popup";
import { useDispatch } from "react-redux";
import { editClientFlat } from "../../store/users/clientActions";

function EditProfilePopup({
  openPopup,
  closePopup,
  street,
  house,
  flat,
  clientForEdit,
}) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    phone: "",
    email: "",
    name: "",
  });

  const resetFrom = useCallback(
    (newValues = {}) => {
      setInputValue(newValues);
    },
    [setInputValue]
  );

  const handleChange = (evt) => {
    setInputValue({ ...inputValue, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const changeData = {
      name: inputValue.name || clientForEdit.name,
      phone: clientForEdit.phone,
      email: inputValue.email || clientForEdit.email,
    };
    dispatch(editClientFlat(changeData));
    closePopup();
    resetFrom();
  };

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      openPopup={openPopup}
      closePopup={closePopup}
      title='Редактировать профиль'
      name='edit'
      textButton='Сохранить'>
      <fieldset className='popup__data'>
        <legend className='popup__title'>
          Улица {street.name} дом {house.name}&nbsp; кв. {flat.name}
        </legend>
        <input
          className='popup__input'
          id='edit'
          minLength='2'
          maxLength='200'
          placeholder='Номер телефона в формате: +7 123 456 7890'
          type='tel'
          name='phone'
          value={clientForEdit.phone}
          onChange={handleChange}
          required
        />
        <input
          className='popup__input'
          minLength='2'
          maxLength='200'
          placeholder='email'
          type='email'
          name='email'
          value={inputValue.email || clientForEdit.email}
          onChange={handleChange}
          required
        />
        <input
          className='popup__input'
          minLength='2'
          maxLength='200'
          placeholder='ФИО'
          type='text'
          name='name'
          value={inputValue.name || clientForEdit.name}
          onChange={handleChange}
          required
        />
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
