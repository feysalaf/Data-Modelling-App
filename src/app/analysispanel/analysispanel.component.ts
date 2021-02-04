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
            inputwidth:'100',time:'1000ms',next:'300'
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

   //circular progress
   path:string;


  constructor() {
    this.array = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    }
  toggle(){
     return this.isOpen = !this.isOpen;
  }

  // sleep(ms: number) {
  //   return new Promise(resolve =>; setTimeout(resolve, ms))};

  async sleep(ms: number) {
      await new Promise(resolve => setTimeout(()=>resolve(), ms)).then();
  }
  animate_svg(i:number=0,f:number = 187){
    //default goes to 0
    if(i<f){
      let animate = setInterval(()=>{
        //run till the end from the input, if num is
        //>0 on start, animate once from 0 to num and
        //then animate rest
        if(i == f){
          clearInterval(animate);
        }
        else{
          i++;
          this.width = i;
        }
      },18);
    }
    if(i>f){
      let animate = setInterval(()=>{
        //run till the end from the input, if num is
        //>0 on start, animate once from 0 to num and
        //then animate rest
        if(i == f){
          clearInterval(animate);
        }
        else{
          i--;
          this.width = i;
        }
      },18);

    }

  }

  async animate_array(){
    let array=[50,30,40,90,100,150,40,23];
    for(let i = 0;i< array.length; i++){
      if(i==0){
        await this.sleep(7000);
        this.animate_svg(0,array[i]);
        // setTimeout(()=>{this.animate_svg(0,array[i])},2000);
      }
      else{
        await this.sleep(4000);
        let init:number  = array[i-1];
        let final:number = array[i];
        console.log("Attempting after 0");
        console.log("The starting is");
        console.log(init);
        console.log("The ending is");
        console.log(final);

        this.animate_svg(init,final);

        // setTimeout(()=>{this.animate_svg(array[i-1],array[i])},2000);
      }

    }

  }

  ////////        Circle Animation        ////////


  PolartoCartesian(r,theta){
    var angleInRadians = (theta-90) * Math.PI / 180.0;

  return{
    x: (r * Math.cos(angleInRadians)),
    y: (r * Math.sin(angleInRadians))};
  }

  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  let angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}


  AnimateCircle(startangle,endangle=0){
    let animatecircle = setInterval(()=>{
      //run till the end from the input, if num is
      //>0 on start, animate once from 0 to num and
      //then animate rest
      if(startangle == endangle){
        clearInterval(animatecircle);
      }
      else{
        startangle++;
        //get x and y
        let end = this.PolartoCartesian(28,startangle);
        //declare constants
        //M 12.121704,52.424849 A 28.471159,28.590176 0 0 1 6.5393829,14.279842
        let xpos      = 12.121704;
        let ypos      = 52.424849;
        let xradius   = 28;
        let yradius   = 28;
        let xrotation = 0;
        let largearc  = 0;
        let sweep     = 1;
        var d = [
        "M", xpos, ypos,
        "A", xradius, yradius, xrotation, largearc, sweep, end.x, end.y
          ].join(" ");
        //return path to html
        this.path = d;
      }
    },20);

  }

  anima(){
    this.AnimateCircle(90,180);
  }




  ngAfterViewInit() {
    let pre:number = 50;
    setTimeout(()=>{this.toggle();},2000);
    //setTimeout(()=>{this.AnimateCircle(90,180)},5000);
    // setTimeout(()=>{this.animate_svg(0,187)},2000);
    // setTimeout(()=>{this.animate_svg(187,0)},10000);
    // setTimeout(()=>{this.animate_array()},15000);


    // setTimeout(()=>{this.animate_svg(pre)},5000);

    // setTimeout(()=>{this.toggle()},4000);
    // setTimeout(()=>{this.toggle()},7000);

    // setTimeout(()=>{this.width=187;this.controlvar='yes'},2000);
    // setTimeout(()=>{this.width=187;this.controlvar='no'},2000);
    //
    // setTimeout(()=>{this.width=287;this.controlvar='yes'},6000);

  }

  ngOnInit(): void {
  }

}
