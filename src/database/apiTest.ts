import apiTestSchema from '../models/ApiTest';

const createApiTest = (data) => {
  const apiTest = new apiTestSchema(data);
  const newApiTest = apiTest.save();
  return newApiTest;
};

const getAllApiTests = () => {
  const allApiTest = apiTestSchema.find();
  return allApiTest;
};
const getSpecificApiTest = (id) => {
  const specifyApiTest = apiTestSchema.findById(id);
  return specifyApiTest;
};
const updateSpecificApiTest = (id, data) => {
  const { intention, expectedAnswer, answerObtained } = data;
  const updatedApiTest = apiTestSchema.updateOne(
    { _id: id },
    { $set: { intention, expectedAnswer, answerObtained } }
  );
  return updatedApiTest;
};
const deleteSpecificApiTest = (id) => {
  const deletedApiTest = apiTestSchema.remove({ _id: id });
  return deletedApiTest;
};

export default {
  createApiTest,
  getAllApiTests,
  getSpecificApiTest,
  updateSpecificApiTest,
  deleteSpecificApiTest
};
