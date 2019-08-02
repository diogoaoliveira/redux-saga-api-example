import { FETCH_DATA_PENDING } from './types';

export const fetchData = () => {
  return {
    type: FETCH_DATA_PENDING,
  };
};
