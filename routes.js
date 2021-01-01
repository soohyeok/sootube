// Global
const HOME = "/";
const SIGNUP = "/signUp";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const PROFILE = "/profile";

// Videos
const VIDEOS = "/videos";
const VIDEO_UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_DELETE = "/:id/delete";

// Social Logins
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";

const routes = {
  home: HOME,
  signUp: SIGNUP,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    }
    return USER_DETAIL;
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  videoUpload: VIDEO_UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    }
    return VIDEO_DETAIL;
  },
  videoEdit: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    }
    return VIDEO_EDIT;
  },
  videoDelete: (id) => {
    if (id) {
      return `/videos/${id}/delete`;
    }
    return VIDEO_DELETE;
  },
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  profile: PROFILE,
  facebook: FACEBOOK,
  facebookCallback: FACEBOOK_CALLBACK,
};

export default routes;
