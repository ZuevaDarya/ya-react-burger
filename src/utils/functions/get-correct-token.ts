const getCorrectToken = (token: string) => {
  return token.split('Bearer ')[1];
};

export default getCorrectToken;
