import ApiTestService from '../services/apiTestService';

const createApiTest = async(req, res) => {
  const newApiTest = await ApiTestService.createApiTest(req.body);
  res.status(200).send({ status: "OK", data: newApiTest });
};

const getAllApiTest = async (req, res) => {
  const allApiTest = await ApiTestService.getAllApiTest();
    res.status(200).send({ status: "OK", data: allApiTest });
};

const getSpecificApiTest = async(req, res) => {
  const { id } = req.params;
  const specificApiTest = await ApiTestService.getSpecificApiTest(id);
  res.status(200).send({ status: "OK", data: specificApiTest });
};

const updateSpecificApiTest = async(req, res) => {
  const { id } = req.params;
  const updatedApiTest = await ApiTestService.updateSpecificApiTest(id, req.body);
  res.status(200).send({ status: "OK", data: updatedApiTest });
};

const deleteSpecificApiTest = async(req, res) => {
  const { id } = req.params;
  const deletedApiTest = await ApiTestService.deleteSpecificApiTest(id);
  res.status(200).send({ status: "OK", data: deletedApiTest });
};

export default {
  createApiTest,
  getAllApiTest,
  getSpecificApiTest,
  updateSpecificApiTest,
  deleteSpecificApiTest
};
