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

  const dayilyTraficLabels = [
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
  ];

  const dayilyTrafficData = {
    labels: dayilyTraficLabels,
    datasets: [{
      label: '',
      data: [70, 110, 170, 120, 220, 200, 100],
      backgroundColor: [
        'rgba(102, 102, 204)',
      ],
      borderColor: [
        'rgb(0, 0, 255)',
      ],
      borderWidth: 1
    }]
  };

  const dayilyTrafficConfig = {
    type: 'bar',
    data: dayilyTrafficData,
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    },
    };

  var dayilyChart = new Chart(
    document.getElementById('dayilyChart'),
    dayilyTrafficConfig
  );

  const mobileUsersData = {
    labels: [
      'Desktop',
      'Tablet',
      'Phones'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(102, 102, 204)',
        'rgb(153, 204, 153)',
        'rgb(102, 204, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const mobileUsersConfig = {
    type: 'doughnut',
    data: mobileUsersData,
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          
        }
      },
    };

  var mobileUsersChart = new Chart(
    document.getElementById('mobileUsersChart'),
    mobileUsersConfig
  );