import React, { useState } from 'react';
import SearchFilter from '../../components/SearchFilter/SearchFilter';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import './SearchPage.scss';

function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [filterData, setFilterData] = useState({
    tag: 'all', sort: 'Popularity', timestamp: 'All Time',

  });

  const handleChange = (filterName, filterValue) => {
    setFilterData({ ...filterData, [filterName]: filterValue });
  };
  return (
    <div className="searchPage">
      <div className="searchPage__content">
        <SearchHeader keyword={keyword} setKeyword={setKeyword} />
        <SearchFilter
          filterData={filterData}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default SearchPage;
