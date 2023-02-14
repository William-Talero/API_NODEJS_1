import user from '../database/user';

const createUser = (data) => {
  const newUser = user.createUser(data);
  return newUser;
};
const getAllUsers = () => {
  const allUsers = user.getAllUsers();
  return allUsers;
};
const getSpecificUser = (id) => {
  const specificUser = user.getSpecificUser(id);
  return specificUser;
};
const updateSpecificUser = (id, data) => {
  const updatedUser = user.updateSpecificUser(id, data);
  return updatedUser;
};
const deleteSpecificUser = (id) => {
  const deletedUser = user.deleteSpecificUser(id);
  return deletedUser;
};

export default {
  createUser,
  getAllUsers,
  getSpecificUser,
  updateSpecificUser,
  deleteSpecificUser
};
