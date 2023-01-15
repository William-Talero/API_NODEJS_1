import userSchema from './../models/user';

const createUser = (data) => {
  const user = new userSchema(data);
  const newUser = user.save();
  return newUser;
};

const getAllUsers = () => {
  const allUser = userSchema.find();
  return allUser;
};
const getSpecificUser = (id) => {
  const specifyUser = userSchema.findById(id);
  return specifyUser;
};
const updateSpecificUser = (id, data) => {
  const { name, age, email } = data;
  const updatedUser = userSchema.updateOne(
    { _id: id },
    { $set: { name, age, email } }
  );
  return updatedUser;
};
const deleteSpecificUser = (id) => {
  const deletedUser = userSchema.remove({ _id: id });
  return deletedUser;
};

export default {
  createUser,
  getAllUsers,
  getSpecificUser,
  updateSpecificUser,
  deleteSpecificUser
};
