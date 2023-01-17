import token from '../database/token';

const getGeneratedToken = (payload) => {
  const generatedToken = token.getGeneratedToken(payload);
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
