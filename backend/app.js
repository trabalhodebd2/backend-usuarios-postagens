/*
OBS: Bloquear PUT e DELETE caso o <user_id> seja diferente do ID do usuario logado
*/

const express = require("express");
const app = express();
const port = 3000;

const userController = require("./controllers/userController.js");
const postController = require("./controllers/postController.js");

app.use(express.json());

// user routes
app.post("/users", userController.createUser);
app.get("/users/:id", userController.getUserById);
app.put("/users/:id", userController.updateUser);
app.delete("/users/:id", userController.deleteUser);

// post routes
app.get("/users/:id/posts", postController.getUserPosts);
app.post("/users/:id/posts", postController.createUserPost);
app.get("/users/:userId/posts/:postId", postController.getUserPostById);
app.put("/users/:userId/posts/:postId", postController.updateUserPost);
app.delete("/users/:userId/posts/:postId", postController.deleteUserPost);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
