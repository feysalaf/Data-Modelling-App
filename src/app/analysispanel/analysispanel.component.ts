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


  constructor() {
    this.array = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    }
  toggle(){
     return this.isOpen = !this.isOpen;
  }

  // sleep(ms: number) {
  //   return new Promise(resolve =>; setTimeout(resolve, ms))};

  async sleep(ms: number) {
      await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }
  animate_svg(i:number=0,f:number = 187){
    //default goes to 0
    console.log(i);
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
      },20);
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
      },20);

    }

  }

  async animate_array(){
    let array=[50,30,40,90,100,150,40,23];
    for(let i = 0;i< array.length; i++){
      if(i==0){
        await this.sleep(2000);
        this.animate_svg(0,array[i]);
        // setTimeout(()=>{this.animate_svg(0,array[i])},2000);
      }
      else{
        await this.sleep(2000);
        let init:number  = array[i-1];
        let final:number = array[i];
        console.log("Attempting after 0");
        console.log("The starting is");
        console.log(init);
        console.log("The ending is");
        console.log(final);

        this.animate_svg(init,final);
        await this.sleep(2000);

        // setTimeout(()=>{this.animate_svg(array[i-1],array[i])},2000);
      }

    }

  }



  ngAfterViewInit() {
    let pre:number = 50;
    setTimeout(()=>{this.toggle();},2000);
    setTimeout(()=>{this.animate_svg(0,187)},2000);
    setTimeout(()=>{this.animate_svg(187,0)},10000);


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
