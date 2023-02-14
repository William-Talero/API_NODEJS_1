import userService from './../services/userService';

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);
  res.status(200).send({ status: 'OK', data: newUser });
};

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();
  res.status(200).send({ status: 'OK', data: allUsers });
};

const getSpecificUser = async (req, res) => {
  const { id } = req.params;
  const specificUser = await userService.getSpecificUser(id);
  res.status(200).send({ status: 'OK', data: specificUser });
};

const updateSpecificUser = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await userService.updateSpecificUser(id, req.body);
  res.status(200).send({ status: 'OK', data: updatedUser });
};

const deleteSpecificUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await userService.deleteSpecificUser(id);
  res.status(200).send({ status: 'OK', data: deletedUser });
};

export default {
  createUser,
  getAllUsers,
  getSpecificUser,
  updateSpecificUser,
  deleteSpecificUser
};
