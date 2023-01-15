import { Router } from 'express';
import userSchema from './../models/user';

const router = Router();

// Create user
router.post('/users', (req, res) => {
  const user = new userSchema(req.body);
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
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// Get specific user
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// Update specific user
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// Delete specific user
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

export default router;
