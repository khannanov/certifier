import { FETCH_CERTIFICATIONS } from './actionTypes';

export function fetchList() {
  return {
    type: FETCH_CERTIFICATIONS,
    callAPI: '/api/article'
  }
}