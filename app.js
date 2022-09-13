// initialize variables
const remMonths = document.getElementById('months')
const remWeeks = document.getElementById('weeks')
const remDays = document.getElementById('days')
const remHours = document.getElementById('hours')
const remMins = document.getElementById('mins')
const remSeconds = document.getElementById('seconds')




const gradDate = "20 Jan 2023";

function countdown() {
    const newGradDate = new Date(gradDate);
    const currentDate = new Date()
    
    const totalSeconds = (newGradDate - currentDate) / 1000

    const months = Math.floor(totalSeconds / 3600 / 24 / 30)
    const weeks = Math.floor(totalSeconds / 3600 / 24 / 7)
    const days = Math.floor(totalSeconds / 3600 / 24) 
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds / 60) % 60 
    const seconds = Math.floor(totalSeconds % 60)

    // display time
    remMonths.innerHTML = formatTime(months);
    remWeeks.innerHTML = formatTime(weeks);
    remDays.innerHTML = formatTime(days);
    remHours.innerHTML = formatTime(hours);
    remMins.innerHTML = formatTime(mins);
    remSeconds.innerHTML = formatTime(seconds);


}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}



setInterval(() => {
    countdown()

}, 1000);

// console.log(newYear)
// console.log(hours)























