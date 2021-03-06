import express from "express";
import passport from "passport";
import routes from "../routes";
import {
  getLogin,
  postLogin,
  logout,
  getSignUp,
  postSignUp,
  githubLogin,
  postGithubLogin,
  getProfile,
  facebookLogin,
  postFacebookLogin,
  /* postGoogleLogin,
  googleLogin, */
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { onlyPrivate, onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.signUp, onlyPublic, getSignUp);
globalRouter.post(routes.signUp, onlyPublic, postSignUp, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);
/*
globalRouter.get(routes.google, googleLogin);
globalRouter.get(
  routes.googleCallback,
  passport.authenticate("google", { failureRedirect: "/login" }),
  postGoogleLogin
); */

globalRouter.get(routes.profile, getProfile);

export default globalRouter;
