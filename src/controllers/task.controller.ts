import { Request, Response } from "npm:express";
import Task from "../models/task.model.ts";

class taskController {
  static async GetTasks(_req: Request, res: Response) {
    const tasks = await Task.find();
    return res.json(tasks);
  }

  static async GetTask(req: Request, res: Response) {
    const id: string = req.params.id;

    const task = await Task.findById(id);
    return res.json(task);
  }

  static async CreateTask(req: Request, res: Response) {
    const { title, description, done } = req.body;

    const task = new Task({
      title: title,
      Description: description,
      done: done,
    });

    const newTask = await Task.create(task);
    return res.json(newTask);
  }

  static async DeleteTask(req: Request, res: Response) {
    const id: string = req.params.id;

    await Task.findById(id);
    return res.json({
      Task: "Task was deleted successfully",
    });
  }

  static async UpdateTask(req: Request, res: Response) {
    const id = req.params.id;

    const taskUpdate = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.json(taskUpdate);
  }
}

export default taskController;
