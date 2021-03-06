import axios from 'axios';
import { IBookSearchParams } from 'src/models/book';

import { API } from './api';

const fetchBooks = (params?: IBookSearchParams) => {
  return axios.get(API.volumes, { params });
};

export { fetchBooks };
