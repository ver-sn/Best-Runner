import { get } from './base';
import { apiUrl } from './base/axios';

export default {
  get: () => get(`${apiUrl}/example`),
  getSum: () => get(`${apiUrl}/example/sum`),
  getBitcoinPrice: () => get(`${apiUrl}/example/bitcoin`),
  getTrainings: () => get(`${apiUrl}/example/training`),
  getFilteredTrainings: option => get(`${apiUrl}/example/filteredtraining/${option}`),
};
