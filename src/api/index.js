import axios from 'axios';

const API = axios.create({ baseURL: 'http://hn.algolia.com/api/v1' });

export const getArticles = (pageNumber) => API.get(`/search_by_date?tags=story&page=${pageNumber}&hitsPerPage=30`);
export const getArticlesByPopularity = (keyword, tag, timestampX, timestampY) => API.get(`/search?query=${keyword}&tags=${tag}&numericFilters=created_at_i>${timestampX},created_at_i<${timestampY},points`);
export const getArticlesByDate = (keyword, tag, timestampX, timestampY) => API.get(`/search_by_date?query=${keyword}&tags=${tag}&numericFilters=created_at_i>${timestampX},created_at_i<${timestampY}`);
