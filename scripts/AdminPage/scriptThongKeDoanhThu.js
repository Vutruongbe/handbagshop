//data 
const dataDoanhThu = {
    Cs1: [4000, 8000, 1000, 4000, 2500, 6000, 2000],
    Cs2: [0, 2600, 4700, 2800, 2900, 2000, 3100],
    Cs3: [9000, 1000, 3000, 3200, 4000, 1000, 9000]
};


const cryptoChart = document.getElementById('cryptoChart').getContext('2d');

const chart = new Chart(cryptoChart, {
    type: 'line',
    data: {
    labels: ['Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11',],
    datasets: [{
        label: 'Cơ sở 1',
        data: dataDoanhThu.Cs1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
    }, {
        label: 'Cơ sở 2',
        data: dataDoanhThu.Cs2,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
    }, {
        label: 'Cơ sở 3',
        data: dataDoanhThu.Cs3,
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
    }]
},
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
