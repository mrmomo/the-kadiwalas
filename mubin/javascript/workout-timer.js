'use strict';
let rBox;
let rrBox;
var timerInterval;
var clockInterval;
let stopwatchInterval = 0;
let switchRepRest = 0;
const restInterval = document.getElementById('rest-interval-value');
const repButton = document.querySelector('#rep-button');
const restButton = document.querySelector('#rest-button');
const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
let overage = 0;
let interval = 0;
var clicks = 0;
let intervalTime;

stopButton.disabled = true;
repButton.disabled = true;
restButton.disabled = true;
startButton.focus();

repButton.addEventListener('click', even);
restButton.addEventListener('click', odd);

startButton.addEventListener('click', function () {
  stopButton.disabled = false;
  repButton.disabled = false;
  restButton.disabled = true;
  startButton.disabled = true;
  repButton.focus();
});

function convertTime(time) {
  time = time.split(':');
  let newTime = Number(time[0]) * 60 + Number(time[1]);
  if (isNaN(newTime)) newTime = 0;
  return newTime;
}

function overtime(element) {
  let seconds;
  seconds = Number(convertTime(document.getElementById(element).value));

  if (seconds < Number(restInterval.value)) {
    overage = Number(overage) + Number(seconds) - Number(restInterval.value);
  }
  if (seconds > Number(restInterval.value)) {
    overage = Number(overage) + Number(seconds) - Number(restInterval.value);
  }
  document.getElementById('overage-timer').value = overage;
}

///////////////////////////////////////////////////////////
// FUNCTION FOR REP FUNCTIONALITY
///////////////////////////////////////////////////////////
function even() {
  console.log('even');
  switchRepRest = 0;
  // Stopping the timer:
  repButton.addEventListener('click', function () {
    clearInterval(timerInterval);
  });
  if (interval === 0) {
    intervalTime = document.querySelector(intervalArray[interval]);
    rBox = intervalArray[interval].substring(1);
    intervalTime.style.backgroundColor = 'yellow';
    repButton.disabled = true;
    repButton.style.backgroundColor = 'yellow';
    restButton.disabled = false;
    restButton.focus();
    stopButton.disabled = false;
    document
      .getElementById('rep-button')
      .addEventListener('click', startClock());
  } else {
    mySwitch();
    clicks++;
    rBox = intervalArray[interval].substring(1);
    intervalTime = document.querySelector(intervalArray[interval - 1]);
    intervalTime.style.backgroundColor = 'white';
    intervalTime = document.querySelector(intervalArray[interval]);
    intervalTime.style.backgroundColor = 'yellow';
    repButton.disabled = true;
    repButton.style.backgroundColor = 'yellow';
    restButton.disabled = false;
    restButton.focus();
    restButton.style.backgroundColor = '';
    overtime(rrBox);
  }
  time = 0;
  document.getElementById('rep-button').addEventListener('click', startTimer());
  document.querySelector('#section-timer').classList.remove('overtime');
  document.querySelector('#section-timer').classList.add('undertime');
  interval++;
}

///////////////////////////////////////////////////////////
// FUNCTION FOR REST FUNCTIONALITY
///////////////////////////////////////////////////////////
function odd() {
  mySwitch();
  clicks++;
  console.log('odd');
  switchRepRest = 1;
  restButton.addEventListener('click', function () {
    clearInterval(timerInterval);
  });
  if (interval <= 47) {
    rBox = intervalArray[interval].substring(1);
    rrBox = intervalArray[interval].substring(1);
    intervalTime = document.querySelector(intervalArray[interval - 1]);
    intervalTime.style.backgroundColor = 'white';
    intervalTime = document.querySelector(intervalArray[interval]);
    intervalTime.style.backgroundColor = 'yellow';
    repButton.disabled = false;
    repButton.focus();
    repButton.style.backgroundColor = '';
    restButton.disabled = true;
    restButton.style.backgroundColor = 'yellow';
    interval++;
    time = 0;
    // time = Number(restInterval.value);
  } else {
    repButton.disabled = true;
    restButton.disabled = true;
  }
}

///////////////////////////////////////////////////////////
// COUNTDOWN TIMER FOR REST/REP PERIODS
///////////////////////////////////////////////////////////
let countdownDuration = Number(restInterval.value); // Example: 10 seconds
var time = 0;

// Function to format the time
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update the timer display
function updateTimer() {
  let x = 0;
  document.getElementById('section-timer').value = formatTime(Math.abs(time));
  document.getElementById(rBox).value = formatTime(Math.abs(time));
}
// Start the countdown timer
function startTimer() {
  // console.log('switchRepRest-->' + switchRepRest);
  updateTimer();
  timerInterval = setInterval(() => {
    ///////////////////////////////////////////////////////////
    // COUNTDOWN TIMER FOR REST PERIODS
    ///////////////////////////////////////////////////////////
    if (switchRepRest === 1) {
      // console.log('1-->' + time + 'tInterval: ' + timerInterval);
      let newInterval = interval - 1;
      time++;
      updateTimer();

      if (time <= Number(restInterval.value)) {
        // console.log('>0 -->' + time);
        document
          .querySelector(intervalArray[newInterval])
          .classList.add('undertime');
        document.querySelector('#section-timer').classList.add('undertime');
      }
      if (time > Number(restInterval.value)) {
        // console.log('===0 -->' + time);
        document
          .querySelector(intervalArray[newInterval])
          .classList.add('overtime');
        document.querySelector('#section-timer').classList.add('overtime');
      }
      ///////////////////////////////////////////////////////////
      // COUNTDOWN TIMER FOR REP PERIODS
      ///////////////////////////////////////////////////////////
    } else {
      // console.log('0-->' + time + 'tInterval: ' + timerInterval);
      time++;
      updateTimer();
    }
  }, 1000);
}

//////////////////////////////////////////////////////////////////////////////
// Start the countdown timer

var clockTime = 0;
function startClock() {
  // console.log('switchRepRest-->' + switchRepRest);
  updateClock();
  clockInterval = setInterval(() => {
    // console.log('0-->' + time + 'tInterval: ' + timerInterval);
    clockTime++;
    updateClock();
  }, 1000);
}

// Function to format the time
function formatClock(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${hours}:${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update the timer display
function updateClock() {
  let x = formatClock(Math.abs(clockTime));
  document.getElementById('clock-timer').value = formatClock(
    Math.abs(clockTime)
  );
}
