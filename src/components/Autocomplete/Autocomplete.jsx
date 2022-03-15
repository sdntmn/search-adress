const Autocomplete = function ({ children, onClick }) {
  return (
    <li onClick={onClick} className='searchForm__input-autocomplete'>
      {children}
    </li>
  );
};

export default Autocomplete;
