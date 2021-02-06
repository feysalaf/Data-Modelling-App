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
   circularprog1:number;
   circularprog2:number;
   circularprog3:number;
   circularprog4:number;

   //latex
   paragraphs: string = `
    You can write text, that contains expressions like this: $x ^ 2 + 5$ inside them. As you probably know.
    You also can write expressions in display mode as follows: $$\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)$$.
    In first case you will need to use \\$expression\\$ and in the second one \\$\\$expression\\$\\$.
    To scape the \\$ symbol it's mandatory to write as follows: \\\\$
  `;

    mathContent:string = `When $ a \\ne 0 $, there are two solutions to $ ax^2 + bx + c = 0 $ and they are $$ x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$`;


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

  //this function centers thecircle at the given starting point
  //BUG
  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  let angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  GetCenterOfCircle(pointoncircumference){

  }


  AnimateCircle(startangle,endangle=0){
    let counter = 0;
    let animatecircle = setInterval(()=>{
      //run till the end from the input, if num is
      //>0 on start, animate once from 0 to num and
      //then animate rest
      if(startangle == endangle){
        clearInterval(animatecircle);
      }
      if(startangle<endangle){
        startangle++;
        //get x and y
        // let end = this.PolartoCartesian(28.471159,startangle);
        // var start = this.polarToCartesian(12.1217, 52.424, 28.471159, endangle);

        let end = this.polarToCartesian(35.5,68,28.471159,startangle);
        //declare constants
        //M 12.121704,52.424849 A 28.471159,28.590176 0 0 1 6.5393829,14.279842
        let xpos      = 12.121704;
        let ypos      = 52.424849;
        let xradius   = 28.471159;
        let yradius   = 28.590176;
        let xrotation = 0;
        let largearc  = 0;
        let sweep     = 1;
        // var largearc = endangle - startangle <= 180 ? "0" : "1";
        if(counter == 0){
        var d = [
        "M", xpos, ypos,
        "A", xradius, yradius, xrotation, largearc, sweep, end.x, end.y
          ].join(" ");
        //return path to html
        // console.log(d);
        this.path = d;
        console.log(this.path);

        counter++;
      }
        else{
          let b = [" ", xradius, yradius, xrotation, largearc, sweep, end.x, end.y
                  ].join(" ");

          this.path = this.path + b;
          console.log(this.path);
          counter++;

        }

      }

      if(startangle>endangle){
        startangle--;
        //get x and y
        // let end = this.PolartoCartesian(28.471159,startangle);
        // var start = this.polarToCartesian(12.1217, 52.424, 28.471159, endangle);

        let end = this.polarToCartesian(40.59,52.424,28.471159,startangle);
        //declare constants
        //M 12.121704,52.424849 A 28.471159,28.590176 0 0 1 6.5393829,14.279842
        let xpos      = 12.121704;
        let ypos      = 52.424849;
        let xradius   = 28.471159;
        let yradius   = 28.590176;
        let xrotation = 0;
        let largearc  = 0;
        let sweep     = 1;
        // var largearc = endangle - startangle <= 180 ? "0" : "1";
        if(counter == 0){
        var d = [
        "M", xpos, ypos,
        "A", xradius, yradius, xrotation, largearc, sweep, end.x, end.y
          ].join(" ");
        //return path to html
        // console.log(d);
        this.path = d;
        counter++;
      }
        else{
          let b = [" ", xradius, yradius, xrotation, largearc, sweep, end.x, end.y
                  ].join(" ");

          this.path = this.path + b;
          counter++;

        }
      }
    },20);

  }

  NormalizeToScale(input:number,max:number,scale:number){
    return (max - ((max*input)/scale) );
  };

  // TODO: implement generality in a better way
  //it has something to do with passing reference by value
  animate_circular_progress(i:number,f:number,cp:number){
    //here i is where to start the progress
    //and f is where to end it
    let start;
    let end;
    start = this.NormalizeToScale(i,146,100);
    end   = this.NormalizeToScale(f,146,100);


    let animateprogress = setInterval(()=>{

      if(start<end){

        if(start==end){
          clearInterval(animateprogress);
        }
        else{
          start++;
          //horrible code
          switch (cp) {
            case 1:
            this.circularprog1 = start;
            break;

            case 2:
            this.circularprog2 = start;
            break;

            case 3:
            this.circularprog3 = start;
            break;

            case 4:
            this.circularprog4 = start;
            break;
            }

        }
      }
      if(start>end){
        if(start==end){
          clearInterval(animateprogress);
        }
        else{
          start--;
          //horrible code
          switch (cp) {
            case 1:
            this.circularprog1 = start;
            break;

            case 2:
            this.circularprog2 = start;
            break;

            case 3:
            this.circularprog3 = start;
            break;

            case 4:
            this.circularprog4 = start;
            break;
            }

        }
      }
    },20);


  }

  anima(){
    // this.AnimateCircle(90,180);
    // await this.sleep(4000);
    // this.AnimateCircle(0,270);
    // await this.sleep(4000);
    // this.AnimateCircle(0,140);

    this.animate_circular_progress(0,100,1);
    this.animate_circular_progress(50,100,2);
    this.animate_circular_progress(0,50,3);
    this.animate_circular_progress(0,10,4);

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
