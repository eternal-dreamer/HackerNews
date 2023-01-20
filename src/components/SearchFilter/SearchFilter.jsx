import React from 'react';
import './SearchFilter.scss';

function SearchFilter({ filterData, handleChange }) {
  return (
    <div className="searchFilter">
      <div className="searchFilter__content">
        <p>Search</p>
        <select name="tag" value={filterData.tag} onChange={(e) => handleChange(e.target.name, e.target.value)}>
          <option value="all">All</option>
          <option value="stories">Stories</option>
          <option value="comments">Comments</option>
        </select>
        <p>by</p>
        <select name="sort" value={filterData.sort} onChange={(e) => handleChange(e.target.name, e.target.value)}>
          <option value="Popularity">Popularity</option>
          <option value="Date">Date</option>

        </select>
        <p>for</p>
        <select name="timestamp" value={filterData.timestamp} onChange={(e) => handleChange(e.target.name, e.target.value)}>
          <option value="All Time">All Time</option>
          <option value="Last 24H">Last 24H</option>
          <option value="Past Week">Past Week</option>
          <option value="Past Month">Past Month</option>
          <option value="Past Year">Past Month</option>
          <option value="Custom Range">Custom Range</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
