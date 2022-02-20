import React from "react";
import pathDeleteIcon from "../image/basket.svg";
import pencelIcon from "../image/pencel.svg";

function UserCard({
  client,
  nameClient,
  phoneClient,
  emailClient,
  openPopupEdit,
  openPopupDeleteClient,
}) {
  function handleDelete() {
    openPopupDeleteClient(client);
  }
  function handleChange() {
    openPopupEdit(client);
  }
  return (
    <>
      <li className='element'>
        <div className='element__title'>
          <h2 className='element__name'>ФИО: {nameClient}</h2>
          <h2 className='element__name'>тел: {phoneClient}</h2>
          <h2 className='element__name'>email: {emailClient}</h2>
        </div>
        <div className='element__button-section'>
          <button
            onClick={handleDelete}
            className='element__button'
            type='button'
            aria-label='Удалить данные клиента'>
            <img
              className='element__icon'
              src={pathDeleteIcon}
              alt='иконка удаления'
            />
          </button>
          <button
            onClick={handleChange}
            className='element__button'
            type='button'
            aria-label='Изменить данные клиента'>
            <img
              className='element__icon'
              src={pencelIcon}
              alt='иконка удаления'
            />
          </button>
        </div>
      </li>
    </>
  );
}

export default UserCard;
