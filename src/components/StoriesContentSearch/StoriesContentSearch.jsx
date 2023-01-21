import React, { useEffect, useState } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { getArticlesByPopularity, getArticlesByDate } from '../../api';
import SearchStoryRow from '../SearchStoryRow/SearchStoryRow';
import './StoriesContentSearch.scss';

function StoriesContentSearch({ keyword, filterData }) {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  console.log(filterData, keyword);

  useEffect(() => {
    if (filterData.sort === 'Popularity') {
      getArticlesByPopularity(pageNumber, keyword, filterData).then((data) => {
        console.log(data);
        setNumberOfPages(data.data.nbPages);
        setArticles(data.data.hits);
      });
    } else {
      getArticlesByDate(pageNumber, keyword, filterData).then((data) => {
        console.log(data);
        setNumberOfPages(data.data.nbPages);
        setArticles(data.data.hits);
      });
    }
  }, [filterData, keyword, pageNumber]);

  return (
    <div className="StoriesContentSearch">
      {articles.map((article) => <SearchStoryRow article={article} tag={filterData.tag} />)}
      <center>
        <Pagination
          classes={{ ul: 'newStoriesContent__pagination' }}
          count={numberOfPages}
          page={Number(pageNumber + 1)}
          variant="outlined"
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem {...item} component="button" onClick={() => setPageNumber(pageNumber + 1)} />
          )}
        />
      </center>
    </div>
  );
}

export default StoriesContentSearch;
