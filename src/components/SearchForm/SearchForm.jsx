import "./SearchForm.css";
import clearButton from "../../assets/clear-button.svg";

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
        <img src={clearButton} alt="clear" />
      </button>
      <button type="submit" id="search-button" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
