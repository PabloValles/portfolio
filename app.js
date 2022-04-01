const express = require("express");
const app = express();
const path = require("path");
const routerMain = require("./routers/main");

const PORT = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, "./public");

app.listen(PORT, () => console.log(`Server runing in port ${PORT}`));

app.use(express.static(publicPath));

app.use("/", routerMain);
