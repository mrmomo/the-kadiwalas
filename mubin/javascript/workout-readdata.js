const filePath = '../database/exercise.xlsx';
let shrugsData = null;
let shrugs = null;
let excelData = null;
let daysSinceStart = null;
let daysWorkoutCompleted = null;
let daysWorkoutMissed = null;
let dayMargin = null;
// let lateralpulls = null;
// let benchpressData = null;
// let benchpress = null;
// let lateralraisesData = null;
// let lateralraises = null;
// let bicepsData = null;
// let biceps = null;
// let dumbbellrowData = null;
// let dumbbellrow = null;
// let pulldowntricepsData = null;
// let pulldowntriceps = null;
// let standingchestflyData = null;
// let standingchestfly = null;
// let abdominalsData = null;
// let abdominals = null;
// let metricsData = null;
// let graphData = null;
let exerciseData = [
  'lateralpulls',
  'benchpress',
  'lateralraises',
  'biceps',
  'dumbbellrow',
  'pulldowntriceps',
  'abdominals',
  'Exercise_Metrics',
  'Graph',
];
let graphData = ['0'];
let timesDate = ['0'];

function ExcelDateToJSDate(excelDate) {
  const excelEpoch = new Date(1900, 0, 1);

  // Excel has a known bug where it considers 1900 as a leap year,
  // hence we need to subtract one day (the 60th day bug)
  const correction = excelDate >= 60 ? -1 : 0;

  // Convert Excel date to JavaScript date
  const jsDate = new Date(
    excelEpoch.getTime() + (excelDate + correction - 1) * 86400000
  );

  return jsDate;
}

function jsDateToExcelDate(jsDate) {
  // Excel date starts from January 1, 1900
  const excelEpoch = new Date(1900, 0, 1);

  // Calculate the difference in time (in milliseconds)
  const timeDifference = jsDate.getTime() - excelEpoch.getTime();

  // Convert time difference from milliseconds to days
  let excelDateNumber = timeDifference / (1000 * 60 * 60 * 24) + 1;

  // Excel has a known bug where it considers 1900 as a leap year,
  // so we need to adjust if the date is after February 28, 1900
  if (jsDate >= new Date(1900, 1, 29)) {
    excelDateNumber += 1;
  }

  return Math.floor(excelDateNumber);
}

document.addEventListener('DOMContentLoaded', function () {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.arrayBuffer();
    })
    .then(data => {
      const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      shrugsData = XLSX.utils.sheet_to_json(worksheet);
      shrugs = shrugsData[shrugsData.length - 1];

      //console.log(shrugsData.map(item => item.date));
    })
    .catch(error => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
});

for (let i = 0; i < 10; i++) {
  document.addEventListener('DOMContentLoaded', function () {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.arrayBuffer();
      })
      .then(data => {
        cellDates: false;
        const workbook = XLSX.read(
          new Uint8Array(data),
          { type: 'array' },
          {
            dateNF: 'yyyy/mm/dd',
          }
        );

        const sheetName = workbook.SheetNames[i + 1];
        const worksheet = workbook.Sheets[sheetName];

        excelData = XLSX.utils.sheet_to_json(worksheet);
        exerciseData[i] = excelData[excelData.length - 1];

        if (i === 9) {
          graphData = excelData;
          localStorage.setItem('graphData', JSON.stringify(graphData));
        }
        if (i === 8) {
          let eDate = new Date();
          timesDate[0] = excelData[0].date;
          timesDate[1] = jsDateToExcelDate(eDate);
          daysSinceStart = Number(timesDate[1]) - Number(timesDate[0]) + 1;
          daysWorkoutCompleted =
            Number(daysSinceStart) - Number(excelData.length);
          daysWorkoutMissed =
            Number(daysSinceStart) - Number(daysWorkoutCompleted) - 1;
          dayMargin = Number(daysWorkoutMissed) - Number(daysWorkoutCompleted);
          document.getElementById('margin-timer').value = dayMargin;
        }
        if (i < 8) {
          document
            .getElementById(nameArray[i])
            .setAttribute('value', exerciseData[i].name);
          document
            .getElementById(weightArray[i])
            .setAttribute('value', exerciseData[i].weight);
          document
            .getElementById(positionArray[i])
            .setAttribute('value', exerciseData[i].position);
          document
            .getElementById(repOneArray[i])
            .setAttribute('value', exerciseData[i].rep_1);
          document
            .getElementById(repTwoArray[i])
            .setAttribute('value', exerciseData[i].rep_2);
          document
            .getElementById(repThreeArray[i])
            .setAttribute('value', exerciseData[i].rep_3);
        }
      })
      .catch(error => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
      });
  });
}
