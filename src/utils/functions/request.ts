import { BASE_URL } from '../../constants/api-constants';
import { ApiPathsType } from '../../types/types';

const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  } 
  return Promise.reject(`Ошибка: ${res.status} | ${res.statusText}`);
}

const request = async (path: ApiPathsType, options?: RequestInit) => {
  return await fetch(`${BASE_URL}${path}`, options).then(checkResponse);
}

export default request;
