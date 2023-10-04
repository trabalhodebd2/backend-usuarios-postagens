const express = require("express");
require("dotenv").config();

const app = express();
const port = 3000;

const authRoutes = require("./src/routes/authRoutes.js");
const userRoutes = require("./src/routes/userRoutes.js");
const postRoutes = require("./src/routes/postRoutes.js");
const viewRoutes = require("./src/routes/viewRoutes.js");

const cookieParser = require("cookie-parser");
const session = require("express-session");
const nunjucks = require('nunjucks');
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'njk');
nunjucks.configure('src/views', {
  express: app,
  autoescape: true,
  noCache: true,
});

app.use(
    session({
        secret: process.env.SECRET_KEY,
        name: "sessionId",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 30 * 60 * 1000 },
    })
);

app.use(viewRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", postRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
