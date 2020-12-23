import express from "express";
import routes from "../routes";
import {
  getVideoUpload,
  postVideoUpload,
  videoDetail,
  getVideoEdit,
  postVideoEdit,
  videoDelete,
} from "../controllers/videoController";
import { onlyPrivate, uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, onlyPrivate, getVideoUpload);
videoRouter.post(routes.videoUpload, onlyPrivate, uploadVideo, postVideoUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.videoEdit(), onlyPrivate, getVideoEdit);
videoRouter.post(routes.videoEdit(), onlyPrivate, postVideoEdit);

videoRouter.get(routes.videoDelete(), onlyPrivate, videoDelete);

export default videoRouter;
