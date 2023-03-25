const dateDisplay = document.querySelector('#date')
const dayDisplay = document.querySelector('#day')
const timeDisplay = document.querySelector('#time')


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function formatNum(num)
{
 return num.toString().padStart(2,0)
}
function displayUi()
{

const dateObj = new Date()
const date = formatNum(dateObj.getDate())
const monthNum = dateObj.getMonth()
const year = dateObj.getFullYear()
const numDay = dateObj.getDay()
    const hours = formatNum(dateObj.getHours() % 12 || 12);
const minutes = formatNum(dateObj.getMinutes())
 const seconds = formatNum(dateObj.getSeconds())
    
    dateDisplay.value = `Date : ${date} ${months[monthNum]} ${year}`;
    dayDisplay.value = `Day : ${ days[numDay] }`;
    timeDisplay.value = `Time : ${hours} : ${minutes} : ${seconds} ${hours<= 12 ? 'PM' : 'AM'}`;
}



  

setInterval(displayUi, 1000);
