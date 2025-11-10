import "./SearchForm.css";

function SearchForm({ query, setQuery, onSearch, errorMessage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="search"
        className="search-bar"
        placeholder={errorMessage || "Enter topic"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" id="search-button" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
