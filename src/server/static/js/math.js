 
$(function() {
    $('#csalc').click(function() {
        $.ajax({
            url : '/api/calc?a=' + document.getElementById('a').value + '&b=' + document.getElementById('b').value,
            success: function(data) {
                $('#add').html(data['a'] + ' + ' + data['b'] + ' = ' + data['add']);
	    }

        });
    });
});


var Output_value_1  = document.getElementById('Output_value_1');
var Output_value_2  = document.getElementById('Output_value_2');
var Output_value_3  = document.getElementById('Output_value_3');

// $(function() {
//     $('#exe-btn').click(function(){
//         $.ajax({
//             url: '/display/',
//             success: function(data) {Output_value.innerHTML = data['add'];} });

//      }   
    
//     );
// });



var socket = io.connect('http://' + document.domain + ':' + location.port);
//Describes one event 
socket.on( 'connect', function() {
  socket.emit( 'my event', {
    data: 'User Connected'
  } )
  var form = $( 'form' ).on( 'submit', function( e ) {
    e.preventDefault()
    let user_name = $( 'input.username' ).val()
    let user_input = $( 'input.message' ).val()
    socket.emit( 'my event', {
      user_name : user_name,
      message : user_input
    } )
    $( 'input.message' ).val( '' ).focus()
  } )
} )

socket.on( 'my responswe', function( msg ) {
    console.log( 'Response one')
    if( typeof msg.user_name !== 'undefined' ) {
    Output_value.innerHTML = msg['message']
    console.log(msg['message'])
  }
})

//Creating the event for execution of backend iterator script
//Setting up the event to be executed when the execute button is clicked and not otherwise
$(function() {
    $('#exe-btn').click(function(){
    socket.emit('module_trigger', {
    data: 'Module event triggered'
    })
     }   
    );
});


socket.on( 'module_trigger_stream', function( msg ) {
    //console.log( 'Response 2')
    //console.log(msg['add'])
    Output_value_1.innerHTML = msg['output_1']
    Output_value_2.innerHTML = msg['output_2']
    Output_value_3.innerHTML = msg['output_3']

    
    //console.log(msg['message'])
  }
);
 
/////////////////////////////////////////////////////////////////
//                Temporary modules                            //
/////////////////////////////////////////////////////////////////

// //formatting time correctly
// var d = new Date(); // for now
// var hours = d.getHours(); // => 9
// var minutes  = d.getMinutes(); // =>  30
// var seconds = d.getSeconds(); // => 51
// function minutes_value(d){
// 	if(d.getMinutes() <10){
//   	var current_minutes = "0" + d.getMinutes();
//     return current_minutes;
//   }
//   else{
//   	return d.getMinutes();
//   }
// }

// //Plotting devices
// var ctx = document.getElementById('myChart').getContext("2d");

// var data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//       {
//         label: 'Random set',
//         fill: false,
//         borderColor: "#00ACEE",
//         backgroundColor: "#e755ba",
//         pointBackgroundColor: "#55bae7",
//         pointBorderColor: "#55bae7",
//         pointHoverBackgroundColor: "#55bae7",
//         pointHoverBorderColor: "#55bae7",
//         data: [65, 59, 80, 81, 16, 55, 40,26,32,32,56,123,75,12,65,23,75,32,54,34,23,54,32]
//       }] 
// };
 
// var myChart = new Chart(ctx, {
//   type: 'line',data,
//   options: {
//       scales: {
//         yAxes: [{
//           gridLines: {
//               zeroLineColor: '#2C2A2B'
//           }
//       }],
//       xAxes: [{
//           gridLines: {
//               zeroLineColor: '#2C2A2B2'
//           }
//       }]
//        }
//   }
// });

var canvas = document.getElementById('myChart');
var data = {
    //labels: ["January", "February", "March", "April", "May", "June", "July"],
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
var labels = data["labels"];
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

setInterval(adddata,4000);
