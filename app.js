const express = require("express");
const routerMain = require("./routers/main");
const path = require("path");

const app = express();
const publicPath = path.resolve(__dirname, "./public");

app.listen(3000, () => console.log("Server runing in port 3000"));

app.use(express.static(publicPath));

app.use("/", routerMain);
