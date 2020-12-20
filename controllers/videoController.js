import {videosData} from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render("home", {pageTitle: "Home", videosData})
};
export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", {pageTitle: "Search", searchingBy, videosData});
};

export const getVideoUpload = (req, res) =>
    res.render("videoUpload", {pageTitle: "Video Upload"});

export const postVideoUpload = (req, res) =>{
    const {
        body: { videoFile, videoTitle, videoDescription }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(353524));
};

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});
export const videoEdit = (req, res) => res.render("videoEdit", {pageTitle: "Video Edit"});
export const videoDelete = (req, res) => res.render("videoDelete", {pageTitle: "Video Delete"});
