import { React } from "react";
import UserCard from "../UserCard/UserCard";

const CardList = function ({
  flat,
  house,
  street,
  openPopup,
  isDisabled,
  dataClientsFlat,
  openPopupDeleteClient,
  openPopupEdit,
  onSubmit,
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
          onClick={openPopup}>
          Добавить жильца
        </button>
        <ul className='elements'>
          {flat &&
            !!dataClientsFlat &&
            dataClientsFlat.map((client) => (
              <UserCard
                key={client.id}
                nameClient={client.name}
                phoneClient={client.phone}
                emailClient={client.email}
                openPopupDeleteClient={openPopupDeleteClient}
                openPopupEdit={openPopupEdit}
                onSubmit={onSubmit}
                client={client}
              />
            ))}
        </ul>
      </section>
    </>
  );
};

export default CardList;
