import { React, useState } from "react";

function PopupWithForm({
  openPopup,
  closePopup,
  onAddClient,
  street,
  house,
  flat,
}) {
  const [inputValue, setInputValue] = useState({
    tel: "",
    email: "",
    name: "",
  });

  const handleChange = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    onAddClient({
      email: inputValue.email,
      tel: inputValue.tel,
      name: inputValue.name,
    });
  };

  return (
    <div className={`popup ${openPopup && "popup__is-opened"}`}>
      <div className='popup__container'>
        <form className='popup__form '>
          <button
            onClick={closePopup}
            className='popup__close'
            type='button'
            aria-label='Кнопка закрытия формы'></button>

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
              type='text'
              name='tel'
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              required
            />
          </fieldset>

          <button
            onSubmit={handleSubmit}
            type='submit'
            className='popup__button'
            aria-label='Добавить'>
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
