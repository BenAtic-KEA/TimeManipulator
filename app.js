import express from "express";
import path from "path";
const app = express();
app.use(express.json());
app.use(express.static("public"));

app.get("/",(req,res) =>{
    res.sendFile(path.resolve("./public/index.html"))
} )

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));