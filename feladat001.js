const express = require("express");
const app = express();
app.get("/", (req, res) => {
    console.log(req.url);
    res.send("Hello World!\n");
});
app.listen(4000, () => {
    console.log("A szerver elindult a 4000-es porton.");
});
