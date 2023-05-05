import { Document } from "npm:mongoose@^7.0";

export default interface ITask extends Document {
  title: string;
  description: string;
  done: boolean;
}
