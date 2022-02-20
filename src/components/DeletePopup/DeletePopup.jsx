import React from "react";
import PopupWithForm from "../Popup/Popup";

function DeletePopup({ openPopup, closePopup, onSubmit }) {
  return (
    <PopupWithForm
      onSubmit={onSubmit}
      openPopup={openPopup}
      closePopup={closePopup}
      textButton='Удалить'>
      <fieldset className='popup__data'>
        <legend className='popup__title'>Вы уверены?</legend>
      </fieldset>
    </PopupWithForm>
  );
}

export default DeletePopup;
