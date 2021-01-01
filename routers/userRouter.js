import express from "express";
import {
  changePassword,
  getEditProfile,
  userDetail,
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.userDetail(), onlyPrivate, userDetail);
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
