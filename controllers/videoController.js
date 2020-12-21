import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videosData = await Video.find({});
        res.render("home", {pageTitle: "Home", videosData});
    } catch(error){
        console.log(error);
        res.render("home", {pageTitle: "Home", videosData: []});
    }
};
export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", {pageTitle: "Search", searchingBy, videosData});
};

export const getVideoUpload = (req, res) =>
    res.render("videoUpload", {pageTitle: "Video Upload"});

export const postVideoUpload = async (req, res) =>{
    const {
        body: {videoTitle, videoDescription},
        file: {path}
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title: videoTitle,
        description: videoDescription
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});
export const videoEdit = (req, res) => res.render("videoEdit", {pageTitle: "Video Edit"});
export const videoDelete = (req, res) => res.render("videoDelete", {pageTitle: "Video Delete"});
