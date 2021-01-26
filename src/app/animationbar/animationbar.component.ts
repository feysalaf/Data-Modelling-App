import { fade, stretchout } from '../../assets/animations/animations';
import { Component, OnInit } from '@angular/core';
import 'chartjs-plugin-streaming';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-animationbar',
  templateUrl: './animationbar.component.html',
  styleUrls: ['./animationbar.component.css'],

  animations: [ fade, stretchout ]

})
export class AnimationbarComponent implements OnInit {

  constructor() {}
    public lineChartData: ChartDataSets[] = [
      { data: [65, 59, 80, 81,12,12,12,12, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90,12,12,12,], label: 'Series B' },
      // { data: [180, 480, 770, 90, 1000, 270, 400,12,12,12], label: 'Series C', yAxisID: 'y-axis-1' }
    ];
    public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: (ChartOptions & { annotation: any }) = {
      responsive: true,
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        xAxes: [{
          type: 'realtime',
          realtime: {
          duration: 20000,    // data in the past 20000 ms will be displayed
          refresh: 1000,      // onRefresh callback will be called every 1000 ms
          delay: 1000,        // delay of 1000 ms, so upcoming values are known before plotting a line
          pause: false,       // chart is not paused
          ttl: undefined,      // data will be automatically deleted as it disappears off the chart
        }
        }],

        yAxes: [
          {
            id: 'y-axis-0',
            position: 'left',}
          // },
          // {
          //   id: 'y-axis-1',
          //   position: 'right',
          //   gridLines: {
          //     color: 'rgba(255,0,0,0.3)',
          //   },
          //   ticks: {
          //     fontColor: 'red',
          //   }
          // }
        ]
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              enabled: true,
              fontColor: 'orange',
              content: 'LineAnno'
            }
          },
        ],
      },
    };
    public lineChartColors: Color[] = [
      { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      },
      { // red
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];
    public lineChartLegend = false;
    public lineChartType: ChartType = 'line';






  ngOnInit(): void {


  }

}
