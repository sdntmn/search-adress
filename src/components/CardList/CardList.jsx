import { React } from "react";
import UserCard from "../UserCard/UserCard";
import PopupWithForm from "../Popup/Popup";

const CardList = function ({
  flat,
  house,
  street,
  setPopupOpen,
  isDisabled,
  dataClientsFlat,
  openPopup,
  closePopup,
  onAddClient,
}) {
  console.log(dataClientsFlat);
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
        <ul className='elements'>
          {flat &&
            !!dataClientsFlat &&
            dataClientsFlat.map((client) => (
              <UserCard
                key={client.id}
                nameClient={client.name}
                poneClient={client.phone}
                emailClient={client.email}
                setPopupOpen={setPopupOpen}
              />
            ))}
        </ul>
      </section>
      <PopupWithForm
        street={street}
        house={house}
        flat={flat}
        openPopup={openPopup}
        closePopup={closePopup}
        onAddClient={onAddClient}></PopupWithForm>
    </>
  );
};

export default CardList;
