let timeout = 10;
let interval = null;
let isActive = false;
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const timerContainer = document.getElementById('timer');

const formatTime = (timeItem) => {
    return String(timeItem).length < 2 ? `0${timeItem}` : `${timeItem}`
}

const renderTimer = ( { hours, minutes, seconds } ) => {
    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

const getTimeLeft = (secondsLeft) => {
    isActive = true;

    const time = getTimeLeft(timeout);
    renderTimer(time)
}

const startTimer = () => {

}

const pauseTimer = () => {

}

startBtn.addEventListener('click', () => {
    if(isActive || !timeout){
        return;
    }
    startTimer().then(() => {
        alert('Timer end!!!')
    })
});
pauseBtn.addEventListener('click', pauseTimer)  