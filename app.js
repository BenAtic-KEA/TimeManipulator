import express from "express";
import path from "path";
const app = express();
app.use(express.json());
app.use(express.static("public"));

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const date = new Date();
let day = days[date.getDay()];
let month = months[date.getMonth()];
let dayMonth =  `${date.getDate()}/${date.getMonth() + 1}`;
let year = date.getFullYear();
/*
res.send({
    date: `${date}/${month + 1}`,
    today: days[todaysday],
    month: months[month],
    year: year
    
})
*/

app.get("/",(req,res) =>{
    res.sendFile(path.resolve("./public/frontpage.html"))
} )

app.get("/today", (req,res) => {
    res.send({
        date: `${date.getDate()}/${date.getMonth() + 1}`,
        today: day,
        month: month,
        year: year
    })
})

app.listen(8080,() => console.log("server is running on port",8080));