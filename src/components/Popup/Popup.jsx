import { React } from "react";

function PopupWithForm({
  openPopup,
  closePopup,
  onSubmit,
  children,
  textButton,
}) {
  return (
    <div className={`popup ${openPopup && "popup__is-opened"}`}>
      <div className='popup__container'>
        <form className='popup__form ' onSubmit={onSubmit}>
          <button
            onClick={closePopup}
            className='popup__close'
            type='button'
            aria-label='Кнопка закрытия формы'></button>
          {children}
          <button
            type='submit'
            className='popup__button'
            aria-label={textButton}>
            {textButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
