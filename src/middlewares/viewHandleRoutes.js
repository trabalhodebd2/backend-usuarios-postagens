const privateRouter = (req, res, next) => {
    console.log(req.session.userId)
    if (req.session.userId) {
        next();
    } else {
        res.redirect("/login");
    }
};

const publicRouter = (req, res, next) => {
    if (req.session.userId) {
        res.redirect("/");
	} else {
        next();
    }
};

module.exports = { privateRouter, publicRouter };
