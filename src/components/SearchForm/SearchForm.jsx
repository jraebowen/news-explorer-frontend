import "./SearchForm.css";
import ClearButton from "../../assets/clear-button.?react";

function SearchForm({
  query,
  setQuery,
  onSearch,
  errorMessage,
  onClearArticles,
}) {
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
      <button
        type="button"
        id="search-button-clear"
        className="search-button-clear"
        onClick={onClearArticles}
      >
        <ClearButton />
      </button>
      <button type="submit" id="search-button" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
