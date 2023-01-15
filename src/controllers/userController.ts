import userService from 'src/services/userService';

const createUser = async(req, res) => {
  const newUser = await userService.createUser(req.body);
  res.send({ status: 200, body: newUser });
};

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();
    res.send({ status: 200, body: allUsers });
};

const getSpecificUser = async(req, res) => {
  const { id } = req.params;
  const specificUser = await userService.getSpecificUser(id);
  res.send({ status: 200, body: specificUser });
};

const updateSpecificUser = async(req, res) => {
  const { id } = req.params;
  const updatedUser = await userService.updateSpecificUser(id, req.body);
  res.send({ status: 200, body: updatedUser });
};

const deleteSpecificUser = async(req, res) => {
  const { id } = req.params;
  const deletedUser = await userService.deleteSpecificUser(id);
  res.send({ status: 200, body: deletedUser });
};

export default {
  createUser,
  getAllUsers,
  getSpecificUser,
  updateSpecificUser,
  deleteSpecificUser
};
