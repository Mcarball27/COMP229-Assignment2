import express from "express";
import qualificationController from "../controllers/qualification.controller.js";

const router = express.Router();

router.route("/api/qualifications")
  .get(qualificationController.list)
  .post(qualificationController.create)
  .delete(qualificationController.removeAll);

router.route("/api/qualifications/:id")
  .get(qualificationController.read)
  .put(qualificationController.update)
  .delete(qualificationController.remove);

export default router;