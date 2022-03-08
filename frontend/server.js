//simple express server to run frontend production build;
const express = require("express");
const path = require("path");
const { getPort } = require("./src/config");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(getPort() || 4000);
