import { useState } from 'react';

function Filter({ onFilterChange }) {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitleFilter(value);
    onFilterChange({ title: value, rating: ratingFilter });
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    setRatingFilter(value);
    onFilterChange({ title: titleFilter, rating: value });
  };

  return (
    <div className="filter">
      <h3>Filter Movies</h3>
      <div className="filter-controls">
        <input
          type="text"
          placeholder="Search by title..."
          value={titleFilter}
          onChange={handleTitleChange}
        />
        <input
          type="number"
          placeholder="Min rating (1-10)"
          min="1"
          max="10"
          value={ratingFilter}
          onChange={handleRatingChange}
        />
      </div>
    </div>
  );
}

export default Filter;