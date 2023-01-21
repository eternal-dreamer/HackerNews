import React, { useState } from 'react';
import SearchFilter from '../../components/SearchFilter/SearchFilter';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import StoriesContentSearch from '../../components/StoriesContentSearch/StoriesContentSearch';
import './SearchPage.scss';

function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [filterData, setFilterData] = useState({
    tag: 'story', sort: 'Popularity', timestamp: 'All', timestampX: 0, timestampY: new Date().getTime() / 1000,

  });

  const handleChange = (filterName, filterValue) => {
    if (filterName === 'timestamp') {
      if (filterValue === 'Last24H') {
        const cur = new Date();
        const firstDay = new Date(cur.setDate(cur.getDate() - 1)).getTime();
        setFilterData({ ...filterData, timestampX: firstDay / 1000, timestamp: filterValue });
      } else if (filterValue === 'PastWeek') {
        const cur = new Date();
        const firstDay = new Date(cur.setDate(cur.getDate() - 6)).getTime();
        setFilterData({ ...filterData, timestampX: firstDay / 1000, timestamp: filterValue });
      } else if (filterValue === 'PastMonth') {
        const cur = new Date();
        const firstDay = new Date(cur.setMonth(cur.getMonth() - 1)).getTime();
        setFilterData({ ...filterData, timestampX: firstDay / 1000, timestamp: filterValue });
      } else if (filterValue === 'PastYear') {
        const cur = new Date();
        const firstDay = new Date(cur.setFullYear(cur.getFullYear() - 1)).getTime();
        setFilterData({ ...filterData, timestampX: firstDay / 1000, timestamp: filterValue });
      } else {
        setFilterData({ ...filterData, timestampX: 0, timestamp: filterValue });
      }
    } else {
      setFilterData({ ...filterData, [filterName]: filterValue });
    }
  };
  return (
    <div className="searchPage">
      <div className="searchPage__content">
        <SearchHeader keyword={keyword} setKeyword={setKeyword} />
        <SearchFilter
          filterData={filterData}
          handleChange={handleChange}
        />
        <StoriesContentSearch keyword={keyword} filterData={filterData} />
      </div>
    </div>
  );
}

export default SearchPage;
