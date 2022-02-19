import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
let router = express.Router();
let initWebRouters = (app) => {
  router.post("create-new-user", homeController.createNewUser);
  router.get("get-all-user", homeController.getAllUser);
  router.get("edit-user", homeController.editUser);
  router.post("api/login", userController.handleLoginUser);
  return app.use("/", router);
};
module.exports = initWebRouters;
