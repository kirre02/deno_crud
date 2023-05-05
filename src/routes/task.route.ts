import { Router } from "npm:express";
import taskController from "../controllers/task.controller.ts";

const router: Router = Router();

router.get("/tasks", taskController.GetTasks);
router.get("/task/:id", taskController.GetTask);
router.post("/task/create", taskController.CreateTask);
router.put("/task/:id", taskController.UpdateTask);
router.delete("/task/:id", taskController.DeleteTask);

export default router;
