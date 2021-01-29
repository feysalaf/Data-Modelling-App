import { fade, stretchout } from '../../assets/animations/animations';
import { Component, OnInit } from '@angular/core';
import 'chartjs-plugin-streaming';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType, Chart} from 'chart.js';

@Component({
  selector: 'app-animationbar',
  templateUrl: './animationbar.component.html',
  styleUrls: ['./animationbar.component.css'],

  animations: [ fade, stretchout ]

})
export class AnimationbarComponent implements OnInit {

  constructor() {}
  ngAfterViewInit() {

    var getchart = 'mylinechart';

    var data = {
         datasets: [
            {//first dataset
                label: "Module 1",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "#00ACEE",
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
    var option = {
    	showLines: true

    };
    var create_chart = new Chart(getchart,{
      type:'line',
      data:data,
      options:option
    })
    // var create_chart = Chart.Line(getchart,{
    // 	data:data,
    //   options:option
    // });



  }

  ngOnInit(): void {

  }

}
