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
    phone: "",
    email: "",
    name: "",
  });

  const handleChange = (evt) => {
    setInputValue({ ...inputValue, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    onAddClient({
      name: inputValue.name,
      phone: inputValue.phone,
      email: inputValue.email,
    });
  };
  console.log(inputValue.name);

  return (
    <div className={`popup ${openPopup && "popup__is-opened"}`}>
      <div className='popup__container'>
        <form className='popup__form ' onSubmit={handleSubmit}>
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
              type='tel'
              name='phone'
              onChange={handleChange}
              value={inputValue.phone}
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
              value={inputValue.email}
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
              value={inputValue.name}
              required
            />
          </fieldset>

          <button type='submit' className='popup__button' aria-label='Добавить'>
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
