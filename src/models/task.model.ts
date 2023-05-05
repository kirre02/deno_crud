import { model, Schema } from "npm:mongoose@^7.0";
import ITask from "../types/task.ts";

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    done: Boolean,
  },
  {
    timestamps: true,
  }
);

export default model<ITask>("Task", taskSchema);
