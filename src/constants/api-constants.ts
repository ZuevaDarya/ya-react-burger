export const BASE_URL = 'https://norma.nomoreparties.space/api';

export const API_PATHS = {
  ingredients: '/ingredients',
  orders: '/orders',
  passwordReset: '/password-reset',
  reset: '/password-reset/reset',
  register: '/auth/register',
  login: '/auth/login',
  logout: '/auth/logout',
  token: '/auth/token',
  user: '/auth/user'
} as const;
