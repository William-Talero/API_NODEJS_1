import ApiTestService from '../services/apiTestService';

const createApiTest = async(req, res) => {
  const newApiTest = await ApiTestService.createApiTest(req.body);
  res.send({ status: 200, data: newApiTest });
};

const getAllApiTest = async (req, res) => {
  const allApiTest = await ApiTestService.getAllApiTest();
    res.send({ status: 200, data: allApiTest });
};

const getSpecificApiTest = async(req, res) => {
  const { id } = req.params;
  const specificApiTest = await ApiTestService.getSpecificApiTest(id);
  res.send({ status: 200, data: specificApiTest });
};

const updateSpecificApiTest = async(req, res) => {
  const { id } = req.params;
  const updatedApiTest = await ApiTestService.updateSpecificApiTest(id, req.body);
  res.send({ status: 200, data: updatedApiTest });
};

const deleteSpecificApiTest = async(req, res) => {
  const { id } = req.params;
  const deletedApiTest = await ApiTestService.deleteSpecificApiTest(id);
  res.send({ status: 200, data: deletedApiTest });
};

export default {
  createApiTest,
  getAllApiTest,
  getSpecificApiTest,
  updateSpecificApiTest,
  deleteSpecificApiTest
};
