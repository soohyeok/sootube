import express from "express";
import {
    getVideoUpload, 
    postVideoUpload,
    videoDetail, 
    videoEdit, 
    videoDelete 
} from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, getVideoUpload);
videoRouter.post(routes.videoUpload, postVideoUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.videoEdit, videoEdit);
videoRouter.get(routes.videoDelete, videoDelete);

export default videoRouter;