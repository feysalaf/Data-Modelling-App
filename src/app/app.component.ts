import { Component } from '@angular/core';
import { fade, stretchout,colorfadeinout  } from '../assets/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fade, stretchout, colorfadeinout]
})
export class AppComponent {
  title = 'DataModellingInterface';
  strand1col:string;
  strand2col:string;
  // strand3col:string;
  strand4col:string;

  async sleep(ms: number) {
      await new Promise(resolve => setTimeout(()=>resolve(), ms)).then();
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
