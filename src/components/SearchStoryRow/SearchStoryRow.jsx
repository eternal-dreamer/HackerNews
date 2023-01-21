import moment from 'moment/moment';
import React from 'react';
import './SearchStoryRow.scss';

function SearchStoryRow({ article, tag }) {
  const isValidUrl = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="SearchStoryRow">
      <div className="SearchStoryRow__story">
        {tag === 'story' && (
        <>
          <p className="SearchStoryRow__storyTitle">
            {article.title}
            {' '}
            <span>{isValidUrl(article.url) ? `(${new URL(article.url).hostname})` : ''}</span>
          </p>
          <span>
            {article.points}
            {' '}
            |
            {' '}
            {article.author}
            {' '}
            |
            {moment(article.created_at).fromNow()}
            {' '}
            |
            {article.num_comments}
            {' '}
            {article.num_comments <= 1 ? 'comment' : 'comments'}
          </span>
        </>
        )}
        {tag === 'comment' && (
          <>

            <span>
              {article.points && (
              <span>
                {' '}
                {article.points}
                {' '}
                {' '}
                points |
              </span>
              ) }

              {article.author}
              {' '}
              |
              {moment(article.created_at).fromNow()}
              {' '}
              | parent | on:
              {article.story_title}
              {' '}

            </span>
            <p className="SearchStoryRow__storyTitle">
              {article.comment_text}
              {' '}

            </p>
          </>
        )}
      </div>

    </div>
  );
}

export default SearchStoryRow;
