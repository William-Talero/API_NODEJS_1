import token from '../database/token';

const getGeneratedToken = () => {
  const generatedToken = token.getGeneratedToken();
  return generatedToken;
};

const verifiedToken = (tokenI) => {
  const verified = token.verifiedToken(tokenI);
  return verified;
};

export default {
  getGeneratedToken,
  verifiedToken
};
