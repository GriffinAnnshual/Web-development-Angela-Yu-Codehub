import morgan from "morgan";
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import middle from './middleware.js'


const app = express(); // function that handles express module
app.use(morgan("dev"));

app.get("/",middle, function(req, res){
    res.send(dirname(fileURLToPath(import.meta.url))); // to get the path in any could.
});

app.get("/about", function(req, res){
    res.send("<h1>This page is about the detail of the website</h1>")
});

app.get("/contacts", function(req, res){
    res.send("<h1>griffintbr@gmail.com</h1>")
});

app.listen(3000, function (){
    console.log("The server started on port 3000")
});