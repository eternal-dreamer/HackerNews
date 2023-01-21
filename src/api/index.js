import axios from 'axios';

const API = axios.create({ baseURL: 'https://hn.algolia.com/api/v1' });

export const getArticles = (pageNumber) => API.get(`/search_by_date?tags=story&page=${pageNumber}&hitsPerPage=30`);
export const getArticlesByPopularity = (pageNumber, keyword, filters) => API.get(`/search?query=${keyword}&tags=${filters.tag}&numericFilters=created_at_i>${filters.timestampX},created_at_i<${filters.timestampY}&page=${pageNumber}&hitsPerPage=30`);
export const getArticlesByDate = (pageNumber, keyword, filters) => API.get(`/search_by_date?query=${keyword}&tags=${filters.tag}&numericFilters=created_at_i>${filters.timestampX},created_at_i<${filters.timestampY}&page=${pageNumber}&hitsPerPage=30`);
