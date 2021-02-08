import { Component } from '@angular/core';
import { fade, stretchout,colorfadeinout, fillfadeinout  } from '../assets/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fade, stretchout, colorfadeinout, fillfadeinout]
})


//
// type props = 'strand1col' | 'strand2col';
//



export class AppComponent {
  title = 'DataModellingInterface';

  strandobject = {
    one    :`rgb(180,181,181)`,
    two    :`rgb(180,181,181)`,
    three  :`rgb(180,181,181)`,
    four   : `rgb(180,181,181)`
  }

  constructor(){


  }

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



  animate_color_transition(this,r,g,b,r_,g_,b_,strandnumber:string){
    let red,green,blue;
    //takes colors in rgb
    let shiftcolors = setInterval((array)=>{
      if(r == r_ && g == g_ && b == b_){
        clearInterval(shiftcolors);
        console.log("Function ended sir");
      }
      if(r>r_){
        r--;
        red = r;
      }
      if(r<r_){
        r++;
        red = r;
      }
      if(g>g_){
        g--;
        green = g;
      }
      if(g<g_){
        g++;
        green = g;
      }
      if(b>b_){
        b--;
        blue = b;
      }
      if(b<b_){
        b++;
        blue = b;
      }
      this.strandobject[strandnumber] = `rgb(${red},${green},${blue})`;
    },20);
  }

    ngAfterViewInit() {

      // setTimeout(()=>{this.updateProp();},2000);
      setTimeout(()=>{
        // var mystring = 'one';
        // console.log(this.dict[mystring]);
        var strandnumber = 'one';
        this.animate_color_transition(180,181,181,0,172,238,strandnumber);
      },3000);

    }


}
