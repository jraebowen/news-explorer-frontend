import "./SearchForm.css";

function SearchForm({ query, setQuery, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="search"
        id="search-button"
        className="search-bar"
        placeholder="Enter topic"
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
