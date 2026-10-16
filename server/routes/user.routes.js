import express from "express";
import userController from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";


const router = express.Router();

router.route("/api/users")
  .get(userController.list)
  .post(userController.create)
  .delete(userController.removeAll);

router.route("/api/users/:id")
  .get(
    authCtrl.requireSignin,
    userController.read
  )
  .put(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    userController.update
  )
  .delete(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    userController.remove
  );

  router.param("id", userController.userByID);
  
export default router;