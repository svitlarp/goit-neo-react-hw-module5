import css from "./SearchBar.module.css";

const SearchBar = ({ value, onSearch, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={css.searchForm}>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={onSearch}
        autoComplete="off"
      />
      <button type="submit" className={css.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
