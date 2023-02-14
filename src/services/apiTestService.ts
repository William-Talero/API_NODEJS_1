import ApiTest from '../database/apiTest';

const createApiTest = (data) => {
  const dataWithDate = {
    ...data,
    createdAt: new Date().toLocaleString("en-US", {timeZone: "America/Bogota"})
  }
  const newApiTest = ApiTest.createApiTest(dataWithDate);
  return newApiTest;
};
const getAllApiTest = () => {
  const allApiTests = ApiTest.getAllApiTests();
  return allApiTests;
};
const getSpecificApiTest = (id) => {
  const specificApiTest = ApiTest.getSpecificApiTest(id);
  return specificApiTest;
};
const updateSpecificApiTest = (id, data) => {
  const updatedApiTest = ApiTest.updateSpecificApiTest(id, data);
  return updatedApiTest;
};
const deleteSpecificApiTest = (id) => {
  const deletedApiTest = ApiTest.deleteSpecificApiTest(id);
  return deletedApiTest;
};

export default {
  createApiTest,
  getAllApiTest,
  getSpecificApiTest,
  updateSpecificApiTest,
  deleteSpecificApiTest
};
