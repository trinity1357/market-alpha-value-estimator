var actual_return_rate = document.getElementById('ARR');
var expected_return_rate = document.getElementById('ERR');

function alpha_function() {
    
    alpha = actual_return_rate.value - expected_return_rate.value;
    document.getElementById('alpha_result').innerHTML = alpha;
    
}
function alpha_reset() {
    $("input[type=number]").val('');
}
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [' ARR (%)', ' ERR (%)', ' ARR (%)', ' ERR (%)'],
        datasets: [{
            data: [actual_return_rate.value, expected_return_rate.value,60,40],
            backgroundColor: [
                'rgba(48, 252, 246)',
                'rgba(252, 125, 116)',
                'rgba(20,20,20)',
            ],
            borderWidth: 5,
        }],
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});
function updatechart() {
    var total = parseInt(actual_return_rate.value) + parseInt(expected_return_rate.value)
  var updatechartvalues = [((parseInt(actual_return_rate.value) / total) * 100), (parseInt(expected_return_rate.value) / total) * 100];
  myChart.data.datasets[0].data = updatechartvalues;
  myChart.update();
}