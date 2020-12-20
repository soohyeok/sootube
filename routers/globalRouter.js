import express from "express";
import { login, logout, signUp } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.signUp, signUp);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;