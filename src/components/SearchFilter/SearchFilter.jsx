import React from 'react';
import './SearchFilter.scss';

function SearchFilter({ filterData, handleChange }) {
  return (
    <div className="searchFilter">
      <div className="searchFilter__content">
        <p>Search</p>
        <select name="tag" value={filterData.tag} onChange={(e) => handleChange(e.target.name, e.target.value)}>
          <option value="(story,comment)">All</option>
          <option value="story">Stories</option>
          <option value="comment">Comments</option>
        </select>
        <p>by</p>
        <select name="sort" value={filterData.sort} onChange={(e) => handleChange(e.target.name, e.target.value)}>
          <option value="Popularity">Popularity</option>
          <option value="Date">Date</option>

        </select>
        <p>for</p>
        <select name="timestamp" value={filterData.timestamp} onChange={(e) => handleChange(e.target.name, e.target.value)}>
          <option value="All">All Time</option>
          <option value="Last24H">Last 24H</option>
          <option value="PastWeek">Past Week</option>
          <option value="PastMonth">Past Month</option>
          <option value="PastYear">Past Year</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
