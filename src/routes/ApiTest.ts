import { Router } from 'express';
import apiTestSchema from '../models/ApiTest';

const router = Router();

// Create user
router.post('/apiTest', (req, res) => {
  const user = new apiTestSchema(req.body);
  user
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// Get all users
router.get('/apiTest', (req, res) => {
  apiTestSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// Get specific user
router.get('/apiTest/:id', (req, res) => {
  const { id } = req.params;
  apiTestSchema
    .findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// Update specific user
router.put('/apiTest/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  apiTestSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// Delete specific user
router.delete('/apiTest/:id', (req, res) => {
  const { id } = req.params;
  apiTestSchema
    .remove({ _id: id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

export default router;
