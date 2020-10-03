const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 7777;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port, function() {
    console.log(`Application now listening on port ${port}.`);
});

app.get("*", function(req, res) {
    res.sendFile(path.join(mainDir, "index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(mainDir, "notes.html"));
});