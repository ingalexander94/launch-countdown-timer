import { setState } from "./timer.js";

const d = document;

// UI
const $days = d.getElementById("days");
const $hours = d.getElementById("hours");
const $minutes = d.getElementById("minutes");
const $seconds = d.getElementById("seconds");

const updateTimer = (days = 0, hours = 0, minutes = 0, seconds = 0) => {
  $days.innerText = days;
  $hours.innerText = hours;
  $minutes.innerText = minutes;
  $seconds.innerText = seconds;
};

const loadTimer = () => {
  const now = dayjs();
  const myDate = dayjs(`${now.year()}-02-06`).minute(0);
  const isAfter = now.isAfter(myDate);
  const myBirthday = !isAfter ? myDate : myDate.add(1, "year");
  let days = myBirthday.diff(now, "day");
  const getHours = myBirthday.diff(now, "hour"),
    getMinutes = myBirthday.diff(now, "minute"),
    getSeconds = myBirthday.diff(now, "second");

  let hours = getHours - days * 24;
  let minutes = getMinutes - getHours * 60;
  let seconds = getSeconds - getMinutes * 60;
  setState({
    days,
    hours,
    minutes,
    seconds,
  });
};

export { updateTimer, loadTimer };
