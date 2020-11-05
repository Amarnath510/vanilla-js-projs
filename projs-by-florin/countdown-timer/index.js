const upComingYear = '1 Jan 2021';

const init = () => {
  const daysEle = getEleByClass('timer__days');
  const hoursEle = getEleByClass('timer__hours');
  const minutesEle = getEleByClass('timer__minutes');
  const secondsEle = getEleByClass('timer__seconds');

  setInterval(() => {
    const timeDetails = getTimeDetails();
    daysEle.innerHTML = timeDetails.days;
    hoursEle.innerHTML = timeDetails.hours;
    minutesEle.innerHTML = timeDetails.minutes;
    secondsEle.innerHTML = timeDetails.seconds;
  }, 1000);
}

const getTimeDetails = () => {
  const currYear = new Date();
  const newYear = new Date(upComingYear); // Jan 1 of up-coming year
  let totalSeconds = (newYear - currYear) / 1000;

  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  totalSeconds -= (days * (24 * 60 * 60));
  const hours = formatTime(Math.floor(totalSeconds / (60 * 60)));
  totalSeconds -= (hours * (60 * 60));
  const minutes = formatTime(Math.floor(totalSeconds / 60));
  totalSeconds -= (minutes * 60);
  const seconds = formatTime(Math.floor(totalSeconds));

  return {
    days,
    hours,
    minutes,
    seconds
  }
}

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
}

const getEleByClass = (parentClass) => {
  return document.getElementsByClassName(parentClass)[0].children[0];
}

init();