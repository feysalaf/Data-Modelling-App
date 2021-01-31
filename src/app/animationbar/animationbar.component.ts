import { fade, stretchout } from '../../assets/animations/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import 'chartjs-plugin-streaming';
import {ChartOptions, ChartType, Chart} from 'chart.js';

@Component({
  selector: 'app-animationbar',
  templateUrl: './animationbar.component.html',
  styleUrls: ['./animationbar.component.css'],

  animations: [ fade, stretchout ]

})
export class AnimationbarComponent implements OnInit {

  constructor() {


  }


  ngAfterViewInit() {
//     for(let i=0;i<20;i++){
//     this.data.datasets.data = Math.random();
//     this.chartupdate()
// }


  }

  ngOnInit(): void {


            let getchart = document.querySelector('.mylinechart') as HTMLCanvasElement;

            var data = {
                 datasets: [
                    {//first dataset
                      data:[1,2,3,4,5,6],
                        label: "Module 1",
                        fill: false,
                        lineTension: 0.1,
                        type: undefined,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "#00ACEE",
                        borderDash: [],
                        borderDashOffset: 0.0,
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
            let loop_n = 0;



            var option = {
            	showLines: true,
              scales:{xAxes:[{type:'realtime',realtime:{
                    duration:20000,
                    refresh:2000,
                    delay:3000,
                    pause:false,
                    onRefresh:()=>{
                       data.datasets.forEach((dataset: any)=> {

                         dataset.data.push({

                           x: Date.now(),

                           y: Math.random()

                         });



                       });

                      // loop_n = loop_n + 1;
                      // console.log(loop_n);
                      // console.log(data.datasets[0].data);
                      // data.datasets[0].data.push({x:Math.random()});
                      // console.log(data.datasets[0].data);
                    }
              }}]}};


        // var plugin= {
        //     streaming: {
        //       onRefresh: ()=> {
        //         console.log("test");
        //         this.data.datasets.forEach((dataset: any)=> {
        //           dataset.data.push({
        //             x: Math.random(),
        //             y: Math.random()
        //           })}
        //         )
        //       }
        //     }
        //   };



            var create_chart = new Chart(getchart,{
              type:'line',
              data:data,
              options:option,
              // plugins: plugin
            })
            create_chart.update();
            // var create_chart = Chart.Line(getchart,{
            // 	data:data,
            //   options:option
            // });




}

}
