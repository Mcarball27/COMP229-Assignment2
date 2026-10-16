import express from "express";
import contactController from "../controllers/contact.controller.js";

const router = express.Router();

router.route("/api/contacts")
  .get(contactController.list)
  .post(contactController.create)
  .delete(contactController.removeAll);

router.route("/api/contacts/:id")
  .get(contactController.read)
  .put(contactController.update)
  .delete(contactController.remove);

export default router;