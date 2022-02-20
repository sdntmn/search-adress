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

/*
<fieldset className='popup__data'>
            <legend className='popup__title'>
              Улица {street.name} дом {house.name}&nbsp; кв. {flat.name}
            </legend>
            <input
              className='popup__input'
              id='about-input'
              minLength='2'
              maxLength='200'
              placeholder='Номер телефона в формате: +7 123 456 7890'
              type='tel'
              name='phone'
              onChange={onChange}
              value={value}
              required
            />
            <input
              className='popup__input'
              id='about-input'
              minLength='2'
              maxLength='200'
              placeholder='email'
              type='email'
              name='email'
              onChange={onChange}
              value={value}
              required
            />
            <input
              className='popup__input'
              id='about-input'
              minLength='2'
              maxLength='200'
              placeholder='ФИО'
              type='text'
              name='name'
              onChange={onChange}
              value={value}
              required
            />
          </fieldset>
          */
