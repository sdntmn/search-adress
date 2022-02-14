import React from "react";
import pathDeleteIcon from "../image/basket.svg";
import pencelIcon from "../image/pencel.svg";

function UserCard({ dataClientsFlat }) {
  console.log(dataClientsFlat);
  function handleDelete() {
    console.log("удалить данные");
  }
  function handleChange() {
    console.log("изменить данные");
  }
  return (
    <>
      <li className='element'>
        <div className='element__title'>
          <h2 className='element__name'>ФИО: </h2>
          <h2 className='element__name'>тел:</h2>
          <h2 className='element__name'>email:</h2>
        </div>
        <div className='element__button-section'>
          <button
            onClick={handleDelete}
            className='element__button'
            type='button'
            aria-label='Добавить в избранное'>
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
            aria-label='Добавить в избранное'>
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
