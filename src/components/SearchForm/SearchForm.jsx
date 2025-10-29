import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-container">
      <input
        type="search"
        id="search-button"
        className="search-bar"
        placeholder="Enter topic"
      />
      <button type="submit" id="search-button" className="search-button">
        Search
      </button>
    </div>
  );
}

export default SearchForm;
