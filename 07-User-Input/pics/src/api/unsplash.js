import axios from 'axios';

import { API_KEY, ROOT_URL } from '../.constants';

export default axios.create({
  baseURL: ROOT_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});
