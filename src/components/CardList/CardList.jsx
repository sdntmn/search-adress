import React, { useState, useEffect, useCallback } from "react";

import { useSelector } from "react-redux";
import { selectAllClientsFlat } from "../../store/users/clientSelector";
import UserCard from "../UserCard/UserCard";

const CardList = function ({
  flat,
  house,
  street,
  openPopup,
  openPopupDeleteClient,
  openPopupEdit,
  onSubmit,
}) {
  const clientsFlat = useSelector(selectAllClientsFlat);

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
            !clientsFlat.status && "popup__button_disabled"
          }`}
          onClick={openPopup}>
          Добавить жильца
        </button>
        <ul className='elements'>
          {flat &&
            clientsFlat.list.map((client) => (
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
