var canvas = document.getElementById('myChart');
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 10,
            data: [65, 59, 80, 0, 56, 55, 40],
        }
    ]
};
var d = new Date(); // for now
var hours = d.getHours(); // => 9
var minutes  = d.getMinutes(); // =>  30
var seconds = d.getSeconds(); // => 51
function minutes_value(d){
	if(d.getMinutes() <10){
  	var current_minutes = "0" + d.getMinutes();
    return current_minutes;
  }
  else{
  	return d.getMinutes();
  }
}

var loop_n = 0;
function adddata(){
	myLineChart.data.datasets[0].data[loop_n] =  Math.floor(Math.random() * (51));
  myLineChart.data.labels[loop_n] = hours + ":" +  minutes_value(d) + ":"+seconds;
  myLineChart.update();
  loop_n = loop_n + 1;
}

var option = {
	showLines: true
};
var myLineChart = Chart.Line(canvas,{
	data:data,
  options:option
});

setInterval(adddata,1000);

