import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  name: String,
  description: String,
  completed: Boolean,
  competedAt: Date,
  deadLine: Date,
  createdAt: { type: Date, default: Date.now },
});
