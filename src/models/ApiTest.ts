import { Schema, model } from 'mongoose';

const apiTestSchema = new Schema({
  intention: {
    type: String,
    required: true
  },
  expectedAnswer: {
    type: String,
    required: true
  },
  answerObtained: {
    type: String,
    required: true
  }
});

export default model('ApiTest', apiTestSchema);
