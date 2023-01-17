import tokenService from '../services/tokenService';

const getGeneratedToken = async (req, res) => {
  const generatedToken = await tokenService.getGeneratedToken(req.body);
  res.status(200).send({ status: 'OK', token: generatedToken });
};

const verifiedToken = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];
    await tokenService.verifiedToken(token);
    next();
  } catch (err) {
    res.status(401).send({ status: 'Unauthorized', data: err });
  }
};

export default {
  getGeneratedToken,
  verifiedToken
};
