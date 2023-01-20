import React, { useEffect, useState } from 'react';
import { getArticles } from '../../api';
import StoryRow from '../StoryRow/StoryRow';
import './NewStoriesContent.scss';

function NewStoriesContent() {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getArticles(pageNumber).then((data) => {
      console.log(data);
      setArticles(data.data.hits);
    });
  }, [pageNumber]);

  return (
    <div className="newStoriesContent">
      {articles.map((article, i) => <StoryRow article={article} index={(pageNumber) * 30 + i} key={i} />)}
      <p className="newStoriesContent__nextPage" onClick={() => setPageNumber(pageNumber + 1)}>More</p>
    </div>
  );
}

export default NewStoriesContent;
