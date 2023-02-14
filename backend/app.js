/*
OBS: Bloquear PUT e DELETE caso o <user_id> seja diferente do ID do usuario logado
*/

const express = require("express");
const app = express();
const port = 3000;

const userController = require("./controllers/userController.js");
const postController = require("./controllers/postController.js");

const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(
	session({
		secret: "segredo!",
		name: "sessionId",
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 30 * 60 * 1000 },
	})
);

const isAuthenticated = require("./middlewares/isAuthenticated.js");

// auth routes
app.post("/login", userController.loginUser);
app.get("/logout", isAuthenticated, userController.logoutUser);
app.post("/register", userController.createUser);

// user routes
app.get("/users/:id", isAuthenticated, userController.getUserById);
app.put("/users/:id", isAuthenticated, userController.updateUser);
app.delete("/users/:id", isAuthenticated, userController.deleteUser);

// post routes

app.get("/users/:id/posts", isAuthenticated, postController.getUserPosts);

app.post("/users/:id/posts", isAuthenticated, postController.createUserPost);

app.get(
	"/users/:userId/posts/:postId",
	isAuthenticated,
	postController.getUserPostById
);

app.put(
	"/users/:userId/posts/:postId",
	isAuthenticated,
	postController.updateUserPost
);

app.delete(
	"/users/:userId/posts/:postId",
	isAuthenticated,
	postController.deleteUserPost
);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
