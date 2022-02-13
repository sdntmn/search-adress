import { React } from "react";

const CardList = function ({
  children,
  flat,
  house,
  street,
  setPopupOpen,
  isDisabled,
}) {
  return (
    <>
      <section className='cardList'>
        <div className='cardList__title'>
          {flat && (
            <h2 className='cardList__name'>
              Улица {street.name} дом {house.name}&nbsp; кв. {flat.name}
            </h2>
          )}
        </div>

        <button
          className={`cardList__button ${
            !isDisabled && "popup__button_disabled"
          }`}
          onClick={setPopupOpen}>
          Добавить жильца
        </button>
        <ul className='elements'>{children}</ul>
      </section>
    </>
  );
};

export default CardList;
