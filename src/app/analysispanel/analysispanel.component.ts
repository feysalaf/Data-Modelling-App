import { Component, OnInit, Input } from '@angular/core';
import { fade, stretchout,soso  } from '../../assets/animations/animations';
import { trigger, state, style, transition, animate, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-analysispanel',
  templateUrl: './analysispanel.component.html',
  styleUrls: ['./analysispanel.component.css'],
  animations:[fade,stretchout,
  trigger('special',[

      // state('void',style({"transform":"scaleX(0.2)"})),
      // state('*',style({"transform":"scaleX(1)"})),
      // transition('void <=> *',[
      // style({opacity:0}),
      // animate(2200)]),

      transition('* => *',[
        useAnimation(soso,{
          params:{
            inputwidth:'*',time:'1000ms',next:'200'
          }
        })


    ])]),

    trigger('openClose', [
     // ...
     state('open', style({
       height: '100px',
       opacity: 1,
       backgroundColor: 'yellow'
     })),
     state('closed', style({
       height: '100px',
       opacity: 0.5,
       backgroundColor: 'green'
     })),
     transition('open => closed', [
       animate('1s')
     ]),
     transition('closed => open', [
       animate('2.5s')
     ]),
   ])

 ]

})
export class AnalysispanelComponent implements OnInit {
  //global variables
  // width:number;
   controlvar:string;
   width:number;
   var:number;
   meravar=0;
   array: string[];

   bindingvar:number = 0;
   isOpen = true;


  constructor() {
    this.array = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    }
  toggle(){
     return this.isOpen = !this.isOpen;
  }

  ngAfterViewInit() {
    setTimeout(()=>{this.toggle();this.width=50},2000);
    setTimeout(()=>{this.toggle()},4000);
    setTimeout(()=>{this.toggle()},7000);

    // setTimeout(()=>{this.width=187;this.controlvar='yes'},2000);
    // setTimeout(()=>{this.width=187;this.controlvar='no'},2000);
    //
    // setTimeout(()=>{this.width=287;this.controlvar='yes'},6000);

  }

  ngOnInit(): void {
  }

}
