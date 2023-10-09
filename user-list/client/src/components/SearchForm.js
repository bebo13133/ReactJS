import { useState } from 'react';
import { Link } from 'react-router-dom'
export default function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCriteria, setSelectedCriteria] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCriteriaChange = (e) => {
    setSelectedCriteria(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    // Ensure both searchQuery and selectedCriteria are selected before searching
    if (searchQuery && selectedCriteria) {
      onSearch(searchQuery, selectedCriteria);
    }
  };

  return (
    <form className="search-form">
      <h2>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="user"
          className="svg-inline--fa fa-user SearchBar_icon__cXpTg"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          {/* Your SVG code here */}
        </svg>
        <span>Users</span>
         {/* <Link to="/">Back to Home</Link>   */}
      
      </h2>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Please, enter the search query"
          name="search"
          value={searchQuery}
          onChange={handleInputChange}
        />
        {(
          <button className="btn close-btn" onClick={() => setSearchQuery('')}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}
        <button className="btn" title="Search" onClick={handleSearchClick}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="filter">
        <span>Search Criteria:</span>
        <select
          name="criteria"
          className="criteria"
          value={selectedCriteria}
          onChange={handleCriteriaChange}
        >
          <option value="all">All</option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
      </div>
    </form>
  );
}
