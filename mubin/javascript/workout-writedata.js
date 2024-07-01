const fileUrl = '../database/exercise.xlsx';
let TTRepTime = null;
let TTRestTime = null;

let workoutData = [{ item: 0 }];

const sheet_names = [
  'Lat_Pulls',
  'Benchpress',
  'Lat_Raises',
  'Biceps',
  'Dumbbell_Row',
  'Pulldown_Triceps',
  'Standing_Chestflys',
  'Abdominals',
  'Exercise_Metrics',
  'Graph',
];

stopButton.addEventListener('click', function () {
  loadAndModifyExcel();
  clearInterval(timerInterval);
  stopButton.disabled = true;
  startButton.disabled = true;
  repButton.disabled = true;
  restButton.disabled = true;
});

function convertTime(time) {
  time = time.split(':');
  let newTime = Number(time[0]) * 60 + Number(time[1]);
  if (isNaN(newTime)) newTime = 0;
  return newTime;
}

function checkTime(elementId) {
  elementId = elementId.replace('#', '');
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

function formatDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

function loadAndModifyExcel() {
  fetch(fileUrl)
    .then(response => response.arrayBuffer())
    .then(data => {
      // Read the Excel file
      let workbook = XLSX.read(data, { type: 'array' });

      for (let i = 0; i < sheet_names.length; i++) {
        if (i < 8) {
          let eDate = new Date();
          let date_value = jsDateToExcelDate(eDate);

          let set_total_rep_time_value =
            Number(
              convertTime(
                document.getElementById(intervalArray[6 * i].substring(1)).value
              )
            ) +
            Number(
              convertTime(
                document.getElementById(intervalArray[2 + 6 * i].substring(1))
                  .value
              )
            ) +
            Number(
              convertTime(
                document.getElementById(intervalArray[4 + 6 * i].substring(1))
                  .value
              )
            );

          let set_total_rest_time_value =
            Number(checkTime(intervalArray[1 + 6 * i].substring(1))) +
            Number(checkTime(intervalArray[3 + 6 * i].substring(1))) +
            Number(checkTime(intervalArray[5 + 6 * i].substring(1)));

          let ave_total_rep_time_value = (
            Number(set_total_rep_time_value) / 3
          ).toFixed(0);
          let ave_total_rest_time_value = (
            Number(set_total_rest_time_value) / 3
          ).toFixed(0);

          workoutData[0] = {
            date: date_value,
            rest_interval: document.getElementById('rest-interval-value').value,
            name: document.getElementById(nameArray[i]).value,
            weight: document.getElementById(weightArray[i]).value,
            position: document.getElementById(positionArray[i]).value,
            rep_1: document.getElementById(repOneArray[i]).value,
            rep_2: document.getElementById(repTwoArray[i]).value,
            rep_3: document.getElementById(repThreeArray[i]).value,
            rep_1_time: convertTime(
              document.getElementById(intervalArray[6 * i].substring(1)).value
            ),
            rep_2_time: convertTime(
              document.getElementById(intervalArray[2 + 6 * i].substring(1))
                .value
            ),
            rep_3_time: convertTime(
              document.getElementById(intervalArray[4 + 6 * i].substring(1))
                .value
            ),
            rest_1_time: checkTime(intervalArray[1 + 6 * i]),
            rest_2_time: checkTime(intervalArray[3 + 6 * i]),
            rest_3_time: checkTime(intervalArray[5 + 6 * i]),
            set_total_rep_time: set_total_rep_time_value,
            set_total_rest_time: set_total_rest_time_value,
            set_ave_rep_time: Number(ave_total_rep_time_value).toFixed(0),
            set_ave_rest_time: Number(ave_total_rest_time_value).toFixed(0),
          };

          TTRepTime = Number(TTRepTime) + Number(set_total_rep_time_value);
          TTRestTime = Number(TTRestTime) + Number(set_total_rest_time_value);
        } else if (i === 8) {
          workoutData = [
            {
              date: timesDate[1],
              total_days: daysSinceStart,
              days_on: daysWorkoutCompleted,
              days_off: daysWorkoutMissed,
              margin: dayMargin,
              total_rep_time: TTRepTime,
              total_resttime: TTRestTime,
              total_time: Number(TTRepTime) + Number(TTRestTime),
            },
          ];
        } else if (i === 9) {
          workoutData = [
            {
              multiplier: exerciseData[9].multiplier,
              round: Number(exerciseData[9].round) + 1,
              lateral_pulls_calc: Number(
                (Number(exerciseData[0].weight) *
                  Number(exerciseData[9].multiplier) +
                  Number(exerciseData[0].rep_1) +
                  Number(exerciseData[0].rep_3) +
                  Number(exerciseData[0].rep_3)) /
                  100
              ),
              benchpress_calc: Number(
                (Number(exerciseData[1].weight) *
                  Number(exerciseData[9].multiplier) +
                  Number(exerciseData[1].rep_1) +
                  Number(exerciseData[1].rep_3) +
                  Number(exerciseData[1].rep_3)) /
                  100
              ),
              lateral_raises_calc: Number(
                (Number(exerciseData[2].weight) *
                  Number(exerciseData[9].multiplier) +
                  Number(exerciseData[2].rep_1) +
                  Number(exerciseData[2].rep_3) +
                  Number(exerciseData[2].rep_3)) /
                  100
              ),
              bicep_curls_calc: Number(
                (Number(exerciseData[3].weight) *
                  Number(exerciseData[9].multiplier) +
                  Number(exerciseData[3].rep_1) +
                  Number(exerciseData[3].rep_3) +
                  Number(exerciseData[3].rep_3)) /
                  100
              ),
              dumbbell_rows_calc: Number(
                (Number(exerciseData[4].weight) *
                  Number(exerciseData[9].multiplier) +
                  Number(exerciseData[4].rep_1) +
                  Number(exerciseData[4].rep_3) +
                  Number(exerciseData[4].rep_3)) /
                  100
              ),
              pulldown_triceps_calc: Number(
                (Number(exerciseData[5].weight) *
                  Number(exerciseData[9].multiplier) +
                  Number(exerciseData[5].rep_1) +
                  Number(exerciseData[5].rep_3) +
                  Number(exerciseData[5].rep_3)) /
                  100
              ),
              standing_chestfly_calc: Number(
                (Number(exerciseData[6].weight) *
                  Number(exerciseData[9].multiplier) +
                  Number(exerciseData[6].rep_1) +
                  Number(exerciseData[6].rep_3) +
                  Number(exerciseData[6].rep_3)) /
                  100
              ),
              abdominals_calc: Number(
                (Number(exerciseData[7].weight) *
                  Number(exerciseData[9].multiplier) +
                  Number(exerciseData[7].rep_1) +
                  Number(exerciseData[7].rep_3) +
                  Number(exerciseData[7].rep_3)) /
                  100
              ),
            },
          ];
          graphData.push(workoutData[0]);
        }

        // Find the last row in the existing worksheet
        let worksheet = workbook.Sheets[sheet_names[i]];
        if (!worksheet) {
          worksheet = XLSX.utils.aoa_to_sheet([]);
          XLSX.utils.book_append_sheet(workbook, worksheet, sheet_names[i]);
        }

        let range = XLSX.utils.decode_range(worksheet['!ref']);
        let nextRow = range.e.r + 1;

        // Ensure nextRow is the actual next available row by checking for existing data
        while (worksheet[XLSX.utils.encode_cell({ c: 0, r: nextRow })]) {
          nextRow++;
        }

        // Add new data to the worksheet starting from the next row
        let headers = Object.keys(workoutData[0]);
        for (let j = 0; j < workoutData.length; j++) {
          let rowIndex = nextRow + j;
          let dataRow = workoutData[j];
          for (let k = 0; k < headers.length; k++) {
            let cellAddress = { c: k, r: rowIndex };
            let cellRef = XLSX.utils.encode_cell(cellAddress);
            worksheet[cellRef] = { v: dataRow[headers[k]] };
          }
        }

        worksheet['!ref'] = XLSX.utils.encode_range({
          s: { c: 0, r: 0 },
          e: { c: headers.length - 1, r: nextRow + workoutData.length - 1 },
        });

        workbook.Sheets[sheet_names[i]] = worksheet;
      }

      // Create a new workbook binary
      const newWorkbookBinary = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });

      // Create a Blob object from the binary data
      const blob = new Blob([newWorkbookBinary], {
        type: 'application/octet-stream',
      });

      // Create a link element to download the file
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'exercise.xlsx';
      link.click();
    })
    .catch(error => console.error(error));
}
