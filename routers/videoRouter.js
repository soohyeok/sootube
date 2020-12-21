import express from "express";
import routes from "../routes";
import {
    getVideoUpload, 
    postVideoUpload,
    videoDetail, 
    getVideoEdit,
    postVideoEdit, 
    videoDelete 
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, getVideoUpload);
videoRouter.post(routes.videoUpload, uploadVideo, postVideoUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.videoEdit(), getVideoEdit);
videoRouter.post(routes.videoEdit(), postVideoEdit);

videoRouter.get(routes.videoDelete(), videoDelete);

export default videoRouter;