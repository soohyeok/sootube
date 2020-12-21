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
        body: {title, description},
        file: {path}
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("videoDetail", {pageTitle: video.title, video});
    } catch(error){
        res.redirect(routes.home);
    }
}

export const getVideoEdit = async (req, res) => {
    const {
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("videoEdit", {pageTitle: `Edit ${video.title}`, video});
    } catch(error){
        res.redirect(routes.home);
    };
};

export const postVideoEdit = async (req, res) => {
    const {
        params: {id},
        body: {title, description}
    } = req;
    try{
        await Video.findOneAndUpdate({_id: id}, {title, description});
        res.redirect(routes.videoDetail(id));
    }catch(error){
        res.redirect(routes.home);
    }
};

export const videoDelete = async (req, res) => {
    const {
        params: {id}
    } = req;
    try {
        await Video.findOneAndRemove({_id: id});
    }catch(error){}
    res.redirect(routes.home)
};