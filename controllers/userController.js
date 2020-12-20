import routes from "../routes"

export const getSignUp = (req, res) => {
    res.render("signUp", {pageTitle: "signUp"});
}
export const postSignUp = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(406);
        res.render("signUp", {pageTitle: "signUp"})
    } else {
        // To Do: Register User
        // To Do: Log User In
        res.redirect(routes.home)
    }
    
}

export const getLogin = (req, res) =>
    res.render("login", {pageTitle: "Login"});
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => res.render("logout", {pageTitle: "Logout"});

export const users = (req, res) => res.render("users", {pageTitle: "Users"});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "Change Password"});