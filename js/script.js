import { setSeconds } from "./timer.js";
import { loadTimer } from "./load.js";

(() => {
  const d = document;

  const startTimer = () => {
    setInterval(() => {
      setSeconds();
    }, 1000);
  };

  d.addEventListener("DOMContentLoaded", loadTimer());
  d.addEventListener("DOMContentLoaded", startTimer());
})();
