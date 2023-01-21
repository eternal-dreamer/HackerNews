import { Search } from '@mui/icons-material';
import React from 'react';
import './SearchHeader.scss';

function SearchHeader({ keyword, setKeyword }) {
  return (
    <div className="searchHeader">
      <div className="searchHeader__left">
        <div className="searchHeader__logo">
          <img src="//d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png" alt="logo" />
          <div className="searchHeader__name">
            <h3 className="searchHeader__head">Search</h3>
            <h3 className="searchHeader__head">Hacker News</h3>
          </div>

        </div>
      </div>
      <div className="searchHeader__searchbar">
        <Search />
        <input type="search" placeholder="Search stories by title, url or author" className="SearchInput" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      </div>
      {console.log(keyword)}
    </div>
  );
}

export default SearchHeader;
