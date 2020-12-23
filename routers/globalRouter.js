import express from "express";
import {
  getLogin,
  postLogin,
  logout,
  getSignUp,
  postSignUp,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.signUp, getSignUp);
globalRouter.post(routes.signUp, postSignUp, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
