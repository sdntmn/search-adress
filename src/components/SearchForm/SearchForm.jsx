import { useSelector, useDispatch } from "react-redux";
import {
  selectHouseInSearch,
  selectStreetInSearch,
  selectFlatInSearch,
} from "../../store/address/addressSelectors";

import {
  setSearchStreet,
  setHouseSearch,
  setFlatSearch,
} from "../../store/search/searchActions";
import {
  selectStreetSearch,
  selectHouseSearch,
  selectFlatSearch,
  selectControls,
} from "../../store/search/searchSelectors";
import Input from "../Input/Input";

const SearchForm = function ({ setStreet, setHouse, setFlat }) {
  const dispatch = useDispatch();
  // строка поиска улицы
  const valueStreet = useSelector(selectStreetSearch);
  // строка поиска дома
  const valueHouse = useSelector(selectHouseSearch);
  // строка поиска квартиры
  const valueFlat = useSelector(selectFlatSearch);

  const { street, house, flat } = useSelector(selectControls);

  const streetSearch = useSelector((state) =>
    selectStreetInSearch(state, { street })
  );

  const houseSearch = useSelector((state) =>
    selectHouseInSearch(state, { house })
  );

  const flatSearch = useSelector((state) =>
    selectFlatInSearch(state, { flat })
  );

  const handleSearchStreet = (e) => {
    dispatch(setSearchStreet(e.target.value || ""));
  };

  const handleSearchHouse = (e) => {
    dispatch(setHouseSearch(e.target.value || ""));
  };

  const handleSearchFlat = (e) => {
    dispatch(setFlatSearch(e.target.value || ""));
  };

  return (
    <div className='searchForm'>
      <form className='searchForm__section' name='search'>
        <Input
          setStreet={setStreet}
          onChange={handleSearchStreet}
          value={valueStreet}
          placeholder='Улица'
          options={streetSearch}
          name='street'
          type='text'
          id='street'
        />
        <Input
          setHouse={setHouse}
          onChange={handleSearchHouse}
          value={valueHouse}
          options={houseSearch}
          id='house'
          type='text'
          name='house'
          placeholder='Дом'
          required
        />
        <Input
          setFlat={setFlat}
          onChange={handleSearchFlat}
          value={valueFlat}
          options={flatSearch}
          id='flat'
          type='text'
          name='flat'
          placeholder='Кв./офис'
          required
        />
      </form>
    </div>
  );
};

export default SearchForm;
