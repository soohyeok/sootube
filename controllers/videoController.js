export const home = (req, res) => res.render("home", {pageTitle: "Home"});
export const search = (req, res) => res.render("search", {pageTitle: "Search"});

export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"});
export const videoUpload = (req, res) => res.render("videoUpload", {pageTitle: "Video Upload"});
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});
export const videoEdit = (req, res) => res.render("videoEdit", {pageTitle: "Video Edit"});
export const videoDelete = (req, res) => res.render("videoDelete", {pageTitle: "Video Delete"});
