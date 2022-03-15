export const selectAllStreets = (state) => state.allStreets;
export const selectAllHousesStreet = (state) => state.allHousesStreet;
export const selectAllFlatsHouse = (state) => state.allFlatsHouse;

export const selectStreetInSearch = (state, { street = "" }) => {
  return state.allStreets.list.filter((item) =>
    item.name.toLowerCase().includes(street.toLowerCase())
  );
};

export const selectHouseInSearch = (state, { house = "" }) => {
  return state.allHousesStreet.list.filter((item) =>
    item.name.toLowerCase().includes(house.toLowerCase())
  );
};

export const selectFlatInSearch = (state, { flat = "" }) => {
  return state.allFlatsHouse.list.filter((item) =>
    item.name.toLowerCase().includes(flat.toLowerCase())
  );
};
