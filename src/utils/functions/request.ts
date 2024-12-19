import { BASE_URL } from '../../constants/api-constants';
import { ErrorResponseType } from '../../types/services-types';
import { ApiPathsType } from '../../types/types';

const checkResponse = async (res: Response) => {
  if (res.ok) {
    return await res.json();
  }
  return await res.json().then((error: ErrorResponseType) => Promise.reject(`Ошибка: ${error.message}`));
};

const request = async (path: ApiPathsType, options?: RequestInit) => {
  return await fetch(`${BASE_URL}${path}`, options).then(checkResponse);
};

export default request;
