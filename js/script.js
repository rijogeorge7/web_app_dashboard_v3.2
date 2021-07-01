const labels = [
    '16-22',
    '23-29',
    '30-5',
    '6-12',
    '13-19',
    '20-26',
    '27-3',
    '4-10',
    '11-17',
    '18-24',
    '25-31',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: '',
      backgroundColor: 'rgb(204, 204, 255, 0.5)',
      borderColor: 'rgb(204, 204, 255, 0.5)',
      data: [750, 1200, 1000, 2000, 1500, 1750, 1250,1850,2200,1500,2500],
      fill: true,
      tension: 0.4
    }]
  };
  const config = {
    type: 'line',
    data,
    options: {}
  };
  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );