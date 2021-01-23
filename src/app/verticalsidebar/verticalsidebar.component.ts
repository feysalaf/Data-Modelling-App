import { Component, OnInit } from '@angular/core';
import { fade, stretchout  } from '../../assets/animations/animations';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-verticalsidebar',
  templateUrl: './verticalsidebar.component.html',
  styleUrls: ['./verticalsidebar.component.css'],
  animations:[fade,stretchout ]
})
export class VerticalsidebarComponent implements OnInit {
  constructor() {

  }

  mymethod(){
    let z:number;
    let x = 1;
    let y = 2;
    z = x+y;
    return z;
  }

  ngAfterViewInit() {
    let button = document.querySelector('.buttonfont');
    let buttonobserver = fromEvent(button, 'click');
    //whenever the button is pressed, the buttonobserver knows it
    //and then it executes a function upon the CLICK EVENT
    let method_returned:number;
    method_returned = this.mymethod();

    const uponeventexecute = buttonobserver.subscribe(() => {console.log(method_returned);})
    }



  ngOnInit(): void {
   }

}
