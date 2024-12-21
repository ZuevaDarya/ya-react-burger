import { API_PATHS, BASE_URL } from '../../constants/api-constants';
import { localStorageKey } from '../../constants/local-storage-key';
import { ErrorResponseType } from '../../types/services-types';
import { ApiPathsType } from '../../types/types';
import getCorrectToken from './get-correct-token';

const checkResponse = async (res: Response) => {
  if (res.ok) {
    return await res.json();
  }
  return await res.json().then((error: ErrorResponseType) => Promise.reject(`Ошибка: ${error.message}`));
};

export const request = async (path: ApiPathsType, options?: RequestInit) => {
  return await fetch(`${BASE_URL}${path}`, options).then(checkResponse);
};

const updateToken = async () => {
  const refreshToken = localStorage.getItem(localStorageKey.RefreshToken);

  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ token: refreshToken }),
  };

  return await request(API_PATHS.token, options);
};

export const requestWithRefresh = async (path: ApiPathsType, options?: RequestInit) => {
  try {
    return await request(path, options);
  } catch (error) {
    if (!String(error).includes("jwt expired")) {
      return error;
    }

    const { accessToken, refreshToken } = await updateToken();
    localStorage.setItem(localStorageKey.AccessToken, getCorrectToken(accessToken));
    localStorage.setItem(localStorageKey.RefreshToken, refreshToken);

    return request(path, { ...options, headers: { ...options?.headers, "Authorization": accessToken || "" } });
  }
};
