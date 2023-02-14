const express = require("express");
const app = express();
const port = 3000;

const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const postRoutes = require("./routes/postRoutes.js");

const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(
	session({
		secret: "segredo!",
		name: "sessionId",
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 30 * 60 * 1000 },
	})
);

app.use(authRoutes);
app.use(userRoutes);
app.use(postRoutes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
