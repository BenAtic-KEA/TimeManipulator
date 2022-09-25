const actualDay = document.getElementById("today")
const weekday = document.getElementById("weeknr")


const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const date = new Date();
let day = days[date.getDay()];
let month = months[date.getMonth()];
let dayMonth =  `${date.getDate()}/${date.getMonth() + 1}`;
let year = date.getFullYear();

function getWeekNumber(){
    let startDate = new Date(date.getFullYear(),0,1);
    let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
    let weekNumber = Math.floor(days / 7);
    return weekNumber
}


weekday.addEventListener("load", loadWeeknr())

function loadWeeknr(){
    weekday.innerHTML = `<h1>
    ${getWeekNumber()}</h1>`;
}