import { TRegisterResponse } from '../../types/services-types';

const mockAccessToken = "Bearer eyJhbGci.eyJpZCI6Ih.agnHgqq";
const mockRefreshToken = "b9a28d86a8f58db9281bd33ebc58";

export const MOCK_USER_RESPONSE: TRegisterResponse = {
  user: {
    name: "user",
    email: "user1@yandex.ru",
  },
  success: true,
  accessToken: mockAccessToken,
  refreshToken: mockRefreshToken,
};
