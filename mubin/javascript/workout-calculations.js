let evenAve = 0;
let evenTotal = 0;
let oddAve = 0;
let oddTotal = 0;

function parseThis(x) {
  var arr = x.value.split(':');
  console.log('ARR ' + arr);
  return Number(arr[0]) * 60 + Number(arr[1]);
}

function checkTime(elementId) {
  var element = document.getElementById(elementId);
  // Get the computed styles of the element
  var computedStyle = window.getComputedStyle(element);
  // Return the color property from the computed styles
  let splitTime = element.value.split(':');
  let currentTime = Number(splitTime[0]) * 60 + Number(splitTime[1]);
  if (isNaN(currentTime)) {
    currentTime = Number(document.getElementById('rest-interval-value').value);
  }
  let newTime = currentTime;

  // let newTime = 0;
  // if (computedStyle.color === 'rgb(0, 0, 0)') {
  //   newTime =
  //     Number(document.getElementById('rest-interval-value').value) -
  //     currentTime;
  // } else {
  //   newTime =
  //     Number(document.getElementById('rest-interval-value').value) +
  //     currentTime;
  // }

  if (isNaN(newTime)) newTime = 0;

  return newTime;
}

const mySwitch = function (x) {
  console.log('SWITCH ' + clicks);
  switch (clicks) {
    case 0:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-one-a')));
      evenAve = Number(evenTotal) / 1;
      document
        .getElementById('total-rep-time-one')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-one')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 1:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-one-a'));
      oddAve = Number(oddTotal) / 1;
      document
        .getElementById('total-rest-time-one')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-one')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 2:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-one-b')));
      evenAve = Number(evenTotal) / 2;
      document
        .getElementById('total-rep-time-one')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-one')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 3:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-one-b'));
      oddAve = Number(oddTotal) / 2;
      document
        .getElementById('total-rest-time-one')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-one')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 4:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-one-c')));
      evenAve = Number(evenTotal) / 3;
      document
        .getElementById('total-rep-time-one')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-one')
        .setAttribute('value', evenAve.toFixed(0));
      evenAve = 0;
      evenTotal = 0;
      break;
    case 5:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-one-c'));
      oddAve = Number(oddTotal) / 3;
      document
        .getElementById('total-rest-time-one')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-one')
        .setAttribute('value', oddAve.toFixed(0));
      oddAve = 0;
      oddTotal = 0;
      break;

    case 6:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-two-a')));
      evenAve = Number(evenTotal) / 1;
      document
        .getElementById('total-rep-time-two')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-two')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 7:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-two-a'));
      oddAve = Number(oddTotal) / 1;
      document
        .getElementById('total-rest-time-two')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-two')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 8:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-two-b')));
      evenAve = Number(evenTotal) / 2;
      document
        .getElementById('total-rep-time-two')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-two')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 9:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-two-b'));
      oddAve = Number(oddTotal) / 2;
      document
        .getElementById('total-rest-time-two')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-two')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 10:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-two-c')));
      evenAve = Number(evenTotal) / 3;
      document
        .getElementById('total-rep-time-two')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-two')
        .setAttribute('value', evenAve.toFixed(0));
      evenAve = 0;
      evenTotal = 0;
      break;
    case 11:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-two-c'));
      oddAve = Number(oddTotal) / 3;
      document
        .getElementById('total-rest-time-two')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-two')
        .setAttribute('value', oddAve.toFixed(0));
      oddAve = 0;
      oddTotal = 0;
      break;

    case 12:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-three-a')));
      evenAve = Number(evenTotal) / 1;
      document
        .getElementById('total-rep-time-three')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-three')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 13:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-three-a'));
      oddAve = Number(oddTotal) / 1;
      document
        .getElementById('total-rest-time-three')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-three')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 14:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-three-b')));
      evenAve = Number(evenTotal) / 2;
      document
        .getElementById('total-rep-time-three')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-three')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 15:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-three-b'));
      oddAve = Number(oddTotal) / 2;
      document
        .getElementById('total-rest-time-three')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-three')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 16:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-three-c')));
      evenAve = Number(evenTotal) / 3;
      document
        .getElementById('total-rep-time-three')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-three')
        .setAttribute('value', evenAve.toFixed(0));
      evenAve = 0;
      evenTotal = 0;
      break;
    case 17:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-three-c'));
      oddAve = Number(oddTotal) / 3;
      document
        .getElementById('total-rest-time-three')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-three')
        .setAttribute('value', oddAve.toFixed(0));
      oddAve = 0;
      oddTotal = 0;
      break;

    case 18:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-four-a')));
      evenAve = Number(evenTotal) / 1;
      document
        .getElementById('total-rep-time-four')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-four')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 19:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-four-a'));
      oddAve = Number(oddTotal) / 1;
      document
        .getElementById('total-rest-time-four')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-four')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 20:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-four-b')));
      evenAve = Number(evenTotal) / 2;
      document
        .getElementById('total-rep-time-four')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-four')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 21:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-four-b'));
      oddAve = Number(oddTotal) / 2;
      document
        .getElementById('total-rest-time-four')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-four')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 22:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-four-c')));
      evenAve = Number(evenTotal) / 3;
      document
        .getElementById('total-rep-time-four')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-four')
        .setAttribute('value', evenAve.toFixed(0));
      evenAve = 0;
      evenTotal = 0;
      break;
    case 23:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-four-c'));
      oddAve = Number(oddTotal) / 3;
      document
        .getElementById('total-rest-time-four')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-four')
        .setAttribute('value', oddAve.toFixed(0));
      oddAve = 0;
      oddTotal = 0;
      break;

    case 24:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-five-a')));
      evenAve = Number(evenTotal) / 1;
      document
        .getElementById('total-rep-time-five')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-five')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 25:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-five-a'));
      oddAve = Number(oddTotal) / 1;
      document
        .getElementById('total-rest-time-five')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-five')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 26:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-five-b')));
      evenAve = Number(evenTotal) / 2;
      document
        .getElementById('total-rep-time-five')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-five')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 27:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-five-b'));
      oddAve = Number(oddTotal) / 2;
      document
        .getElementById('total-rest-time-five')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-five')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 28:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-five-c')));
      evenAve = Number(evenTotal) / 3;
      document
        .getElementById('total-rep-time-five')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-five')
        .setAttribute('value', evenAve.toFixed(0));
      evenAve = 0;
      evenTotal = 0;
      break;
    case 29:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-five-c'));
      oddAve = Number(oddTotal) / 3;
      document
        .getElementById('total-rest-time-five')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-five')
        .setAttribute('value', oddAve.toFixed(0));
      oddAve = 0;
      oddTotal = 0;
      break;

    case 30:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-six-a')));
      evenAve = Number(evenTotal) / 1;
      document
        .getElementById('total-rep-time-six')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-six')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 31:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-six-a'));
      oddAve = Number(oddTotal) / 1;
      document
        .getElementById('total-rest-time-six')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-six')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 32:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-six-b')));
      evenAve = Number(evenTotal) / 2;
      document
        .getElementById('total-rep-time-six')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-six')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 33:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-six-b'));
      oddAve = Number(oddTotal) / 2;
      document
        .getElementById('total-rest-time-six')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-six')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 34:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-six-c')));
      evenAve = Number(evenTotal) / 3;
      document
        .getElementById('total-rep-time-six')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-six')
        .setAttribute('value', evenAve.toFixed(0));
      evenAve = 0;
      evenTotal = 0;
      break;
    case 35:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-six-c'));
      oddAve = Number(oddTotal) / 3;
      document
        .getElementById('total-rest-time-six')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-six')
        .setAttribute('value', oddAve.toFixed(0));
      oddAve = 0;
      oddTotal = 0;
      break;

    case 36:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-seven-a')));
      evenAve = Number(evenTotal) / 1;
      document
        .getElementById('total-rep-time-seven')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-seven')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 37:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-seven-a'));
      oddAve = Number(oddTotal) / 1;
      document
        .getElementById('total-rest-time-seven')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-seven')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 38:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-seven-b')));
      evenAve = Number(evenTotal) / 2;
      document
        .getElementById('total-rep-time-seven')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-seven')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 39:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-seven-b'));
      oddAve = Number(oddTotal) / 2;
      document
        .getElementById('total-rest-time-seven')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-seven')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 40:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-seven-c')));
      evenAve = Number(evenTotal) / 3;
      document
        .getElementById('total-rep-time-seven')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-seven')
        .setAttribute('value', evenAve.toFixed(0));
      evenAve = 0;
      evenTotal = 0;
      break;
    case 41:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-seven-c'));
      oddAve = Number(oddTotal) / 3;
      document
        .getElementById('total-rest-time-seven')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-seven')
        .setAttribute('value', oddAve.toFixed(0));
      oddAve = 0;
      oddTotal = 0;
      break;

    case 42:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-eight-a')));
      evenAve = Number(evenTotal) / 1;
      document
        .getElementById('total-rep-time-eight')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-eight')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 43:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-eight-a'));
      oddAve = Number(oddTotal) / 1;
      document
        .getElementById('total-rest-time-eight')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-eight')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 44:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-eight-b')));
      evenAve = Number(evenTotal) / 2;
      document
        .getElementById('total-rep-time-eight')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-eight')
        .setAttribute('value', evenAve.toFixed(0));
      break;
    case 45:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-eight-b'));
      oddAve = Number(oddTotal) / 2;
      document
        .getElementById('total-rest-time-eight')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-eight')
        .setAttribute('value', oddAve.toFixed(0));
      break;
    case 46:
      evenTotal =
        Number(evenTotal) +
        Number(parseThis(document.getElementById('rep-four-c')));
      evenAve = Number(evenTotal) / 3;
      document
        .getElementById('total-rep-time-eight')
        .setAttribute('value', evenTotal.toFixed(0));
      document
        .getElementById('ave-rep-time-eight')
        .setAttribute('value', evenAve.toFixed(0));
      evenAve = 0;
      evenTotal = 0;
      break;
    case 47:
      oddTotal = Number(oddTotal) + Number(checkTime('rest-eight-c'));
      oddAve = Number(oddTotal) / 3;
      document
        .getElementById('total-rest-time-eight')
        .setAttribute('value', oddTotal.toFixed(0));
      document
        .getElementById('ave-rest-time-eight')
        .setAttribute('value', oddAve.toFixed(0));
      oddAve = 0;
      oddTotal = 0;
      break;
  }
};
