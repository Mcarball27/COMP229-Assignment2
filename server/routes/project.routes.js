import express from "express";
import projectController from "../controllers/project.controller.js";

const router = express.Router();

router.route("/api/projects")
  .get(projectController.list)
  .post(projectController.create)
  .delete(projectController.removeAll);

router.route("/api/projects/:id")
  .get(projectController.read)
  .put(projectController.update)
  .delete(projectController.remove);

export default router;