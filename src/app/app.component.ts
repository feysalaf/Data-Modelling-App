import { Component } from '@angular/core';
import { fade, stretchout,colorfadeinout, fillfadeinout  } from '../assets/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fade, stretchout, colorfadeinout, fillfadeinout]
})
export class AppComponent {
  title = 'DataModellingInterface';
  strand1col:string = `rgb(180,181,181)`;
  strand2col:string = `rgb(180,181,181 )`;
  strand3col:string = `rgb(180,181,181 )`;
  strand4col:string = `rgb(180,181,181 )`;





  async sleep(ms: number) {
      await new Promise(resolve => setTimeout(()=>resolve(), ms)).then();
  }

  findmax(x:number,y:number,z:number){
    //probably doesn't work if numbers are equal
    if(x>y && x>z){
      return x;
    }
    if(y>x && y>z){
      return y;
    }
    if(z>x && z>y){
      return z;
    }
  }

  findmin(x:number,y:number,z:number){
    //probably doesn't work if numbers are equal
    if(x<y && x<z){
      return x;
    }
    if(y<x && y<z){
      return y;
    }
    if(z<x && z<y){
      return z;
    }
  }


  //
  // getiterations(x:number,y:number,z:number,a:number,b:number,c:number){
  //   // 0 , 172 , 238 -> 181,181,181
  //   // subtract a from x, b from y and c from z
  //   alpha = a-x;
  //   beta  = b-y;
  //   gamma = c-z;
  //   max_c = findmax(alpha,beta,gamma);
  //   min_c = findmin(alpha,beta,gamma);
  //   //going that max route
  //   //here total_c are chosen max no of iterations allowed
  //
  //   i_alpha =
  // }

  animate_color_transition(r,g,b,r_,g_,b_,cp){
    let red,green,blue;


    //takes colors in rgb
    let shiftcolors = setInterval(()=>{
      if(r == r_ && g == g_ && b == b_){
        clearInterval(shiftcolors);
      }
      if(r!=r_){
        r = r+2;
        red = r;
      }
      if(g!=g_){
        g++;
        green = g;
      }
      if(b!=b_){
        b--;
        blue = b;
      }
      // window["input] = `rgb(${red},${green},${blue})`;
      // console.log(window[input]);
      //horrible code
      switch (cp) {
        case 1:
        this.strand1col = `rgb(${red},${green},${blue})`;
        break;

        case 2:
        this.strand2col = `rgb(${red},${green},${blue})`;
        break;

        case 3:
        this.strand3col = `rgb(${red},${green},${blue})`;
        break;

        case 4:
        this.strand4col = `rgb(${red},${green},${blue})`;
        break;
        }
    },20);
  }

  animate_color_transition1(r,g,b,r_,g_,b_,cp){
    let red,green,blue;


    //takes colors in rgb
    let shiftcolors = setInterval(()=>{
      if(r == r_ && g == g_ && b == b_){
        clearInterval(shiftcolors);
      }
      if(r!=r_){
        r --;
        red = r;
      }
      if(g!=g_){
        g--;
        green = g;
      }
      if(b!=b_){
        b++;
        blue = b;
      }
      // window["input] = `rgb(${red},${green},${blue})`;
      // console.log(window[input]);
      //horrible code
      switch (cp) {
        case 1:
        this.strand1col = `rgb(${red},${green},${blue})`;
        break;

        case 2:
        this.strand2col = `rgb(${red},${green},${blue})`;
        break;

        case 3:
        this.strand3col = `rgb(${red},${green},${blue})`;
        break;

        case 4:
        this.strand4col = `rgb(${red},${green},${blue})`;
        break;
        }
    },20);
  }



    ngAfterViewInit() {
      setTimeout(()=>{
        //colorless to blind and backgroundcol
        this.animate_color_transition1(180,181,181,0,172,238,1);
        this.animate_color_transition1(180,181,181,0,172,238,2);
        this.animate_color_transition1(180,181,181,0,172,238,3);
        this.animate_color_transition1(180,181,181,0,172,238,4);

      },2000);

      // setTimeout(()=>{
      //   //                    BACK                          //
      //   this.animate_color_transition(0,172,238,180,181,181,1);
      //   this.animate_color_transition(0,172,238,180,181,181,2);
      //   this.animate_color_transition(0,172,238,180,181,181,3);
      //   this.animate_color_transition(0,172,238,180,181,181,4);
      //
      // },6000);
      setTimeout(()=>{console.log("Strand 1 dict is:");
      console.log("this.strand1col is:");
      console.log(this.strand1col);},6000);
    }
  //
  // async animate_banner(){
  //   let animatebanner = setInterval(()=>{
  //
  //
  //
  //   },20);
  // }





}
