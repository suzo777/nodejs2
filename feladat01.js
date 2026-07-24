const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 8080;
const url = process.env.MONGODB_PASSW;
const client = new MongoClient(url);
app.get("/", async (req, res) => {
    try {
        await client.connect();
        const db = client.db("web2");
        const users = db.collection("users");
        const result = await users.find().toArray();
        let text = "<h2>Users</h2>";
        result.forEach(user => {
            text += user.firstname + " ";
            text += user.lastname + " ";
            text += user.login + "<br>";
        });
        res.send(text);
    } catch (err) {
        res.send("Database error!");
    }
});
app.listen(port, () => {
    console.log("Server PORT: " + port);
});