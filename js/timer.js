import { loadTimer, updateTimer } from "./load.js";

const state = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const render = () => {
  const { days, hours, minutes, seconds } = state;
  updateTimer(days, hours, minutes, seconds);
};

const setState = (obj = {}) => {
  for (const key in obj) {
    if (state.hasOwnProperty(key)) {
      state[key] = obj[key];
    }
  }
  render();
};

const setSeconds = () => {
  const update = refreshTimer("seconds");
  update && setMinutes();
};

const setMinutes = () => {
  const update = refreshTimer("minutes");
  update && setHours();
};

const setHours = () => {
  const update = refreshTimer("hours");
  update && setDay();
};

const setDay = () => {
  if (state.days > 0) {
    state.days -= 1;
    render();
  } else {
    loadTimer();
  }
};

const refreshTimer = (name) => {
  const value = state[name];
  if (value > 0) {
    state[name] -= 1;
    render();
    return false;
  } else {
    const newValue = name !== "seconds" && name !== "minutes" ? 24 : 59;
    state[name] = newValue;
    render();
    return true;
  }
};

export { setSeconds, setState };
