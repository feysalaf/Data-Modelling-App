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
  //initialize html vars
  output:number;
  constructor() {
  }
 
  updatehtml(){
    let mynum: number;
    mynum = Math.floor(Math.random() * 100) + 1  ;
    this.output = mynum;

  }

  ngAfterContentChecked(){

  }

  ngAfterViewInit() {
    let button = document.querySelector('.buttonfont');
    let buttonobserver = fromEvent(button, 'click');
    //whenever the button is pressed, the buttonobserver knows it
    //and then it executes a function upon the CLICK EVENT
    const uponeventexecute = buttonobserver.subscribe(() => {this.updatehtml();})
    }



  ngOnInit(): void {
   }

}
