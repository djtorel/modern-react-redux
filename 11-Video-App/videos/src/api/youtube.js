import axios from 'axios';

import { API_KEY, ROOT_URL } from './.constants.js';

export default axios.create({
  baseURL: ROOT_URL,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  },
});
