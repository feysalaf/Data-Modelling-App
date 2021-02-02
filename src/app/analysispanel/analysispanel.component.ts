import { Component, OnInit, Input } from '@angular/core';
import { fade, stretchout  } from '../../assets/animations/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-analysispanel',
  templateUrl: './analysispanel.component.html',
  styleUrls: ['./analysispanel.component.css'],
  animations:[fade,stretchout,
  trigger('special',[

      state('void',style({"transform":"scaleX(0.2)"})),
      state('*',style({"transform":"scaleX(1)"})),
      // transition('void <=> *',[
      // style({opacity:0}),
      // animate(2200)]),

      transition('void => *',[
      style({ }),
      animate(1800)])])
 ]

})
export class AnalysispanelComponent implements OnInit {
  // width:number;
  controlvar:string;
   @Input() width:number;

  constructor() { }

  ngAfterViewInit() {


    setTimeout(()=>{this.width=187;this.controlvar='yes'},2000);
    setTimeout(()=>{this.width=287;this.controlvar='yes'},6000);

  }

  ngOnInit(): void {
  }

}
