import express from "express";
const app = express()
 
const handleHome = (req, res) => {
    res.send("hello world");
}

app.get("/", handleHome);
 
app.listen(4000);