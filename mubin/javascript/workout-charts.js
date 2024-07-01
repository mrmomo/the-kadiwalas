window.onload = () => {
  const graphData = JSON.parse(localStorage.getItem('graphData'));

  console.log(graphData);

  const rounds = graphData.map(data => data.round);
  const lateralPullsData = graphData.map(data => data.lateral_pulls_calc);
  const benchPressData = graphData.map(data => data.benchpress_calc);
  const lateralRaisesData = graphData.map(data => data.lateral_raises_calc);
  const bicepData = graphData.map(data => data.bicep_curls_calc);
  const dumbbellRowData = graphData.map(data => data.dumbbell_rows_calc);
  const pulldownTricepsData = graphData.map(data => data.pulldown_triceps_calc);
  const StandingChestFlyData = graphData.map(
    data => data.standing_chestfly_calc
  );
  const AbdominalsData = graphData.map(data => data.abdominals_calc);

  const createLineChart = (ctx, label, data, yMin, yMax) => {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: rounds,
        datasets: [
          {
            label: label,
            data: data,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: 'Round',
            },
            ticks: {
              stepSize: 5,
            },
          },
          y: {
            min: yMin,
            max: yMax,
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      },
    });
  };

  const ctx1 = document.getElementById('graph1').getContext('2d');
  const ctx2 = document.getElementById('graph2').getContext('2d');
  const ctx3 = document.getElementById('graph3').getContext('2d');
  const ctx4 = document.getElementById('graph4').getContext('2d');
  const ctx5 = document.getElementById('graph5').getContext('2d');
  const ctx6 = document.getElementById('graph6').getContext('2d');
  const ctx7 = document.getElementById('graph7').getContext('2d');
  const ctx8 = document.getElementById('graph8').getContext('2d');

  let numbers = lateralPullsData.map(Number);
  let yMin = Math.min(...numbers) - 0.5;
  let yMax = Math.max(...numbers) + 0.5;
  createLineChart(ctx1, 'Lateral Pulls', lateralPullsData, yMin, yMax);

  numbers = benchPressData.map(Number);
  yMin = Math.min(...numbers) - 0.5;
  yMax = Math.max(...numbers) + 0.5;
  createLineChart(ctx2, 'Bench Press', benchPressData, yMin, yMax);

  numbers = lateralRaisesData.map(Number);
  yMin = Math.min(...numbers) - 0.5;
  yMax = Math.max(...numbers) + 0.5;
  createLineChart(ctx3, 'Lateral Raises', lateralRaisesData, yMin, yMax);

  numbers = bicepData.map(Number);
  yMin = Math.min(...numbers) - 0.5;
  yMax = Math.max(...numbers) + 0.5;
  createLineChart(ctx4, 'bicep Curls', bicepData, yMin, yMax);

  numbers = dumbbellRowData.map(Number);
  yMin = Math.min(...numbers) - 0.5;
  yMax = Math.max(...numbers) + 0.5;
  createLineChart(ctx5, 'dumbbell Rows', dumbbellRowData, yMin, yMax);

  numbers = pulldownTricepsData.map(Number);
  yMin = Math.min(...numbers) - 0.5;
  yMax = Math.max(...numbers) + 0.5;
  createLineChart(ctx6, 'Pulldown Triceps', pulldownTricepsData, yMin, yMax);

  numbers = StandingChestFlyData.map(Number);
  yMin = Math.min(...numbers) - 0.5;
  yMax = Math.max(...numbers) + 0.5;
  createLineChart(
    ctx7,
    'Standing Chest Flys',
    StandingChestFlyData,
    yMin,
    yMax
  );
  createLineChart(ctx8, 'Abdominals', AbdominalsData, yMin, yMax);
};
