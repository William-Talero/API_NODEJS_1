import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const getGeneratedToken = (payload) => {
  const token = jsonwebtoken.sign(payload, process.env.SECRET_KEY!, {
    expiresIn: 120
  });
  return token;
};

const verifiedToken  = (token) => {
  const verified = jsonwebtoken.verify(token, process.env.SECRET_KEY!);
  return verified;
};

export default {
  getGeneratedToken,
  verifiedToken
};
