import { Component, OnInit } from '@angular/core';
import { fade, stretchout  } from '../../assets/animations/animations';
import { fromEvent } from 'rxjs';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-verticalsidebar',
  templateUrl: './verticalsidebar.component.html',
  styleUrls: ['./verticalsidebar.component.css'],
  animations:[fade,stretchout ]
})
export class VerticalsidebarComponent implements OnInit {

  //initialize html vars
  temperature:number;
  velocity:number;
  density:number;

  constructor() {

  }

  updatehtml(){
    let mynum: string;
    // mynum = Math.floor(Math.random() * 100) + 1  ;
    // this.output = mynum;
  }

  fetchdatafromserver(){
    let api_b: string;
    let api_base: string = 'http://localhost:5000/';
    console.log(api_base);
    const socket = io.connect(api_base);
    console.log("Connected to server");

    //call api point with data
    socket.emit('api endpoint',{'data':'User connection'})

    //call api points(multiple)
    // socket.on( 'connect',() => {
    //   socket.emit( 'my event', {
    //     'data': 'User Connected'
    //   } )})

    //receive response
    socket.on( 'receivefromserver', (msg) => {
      console.log("Data received from server");
      //send to html
      // this.output = msg['data'];
    })
}

  ngAfterContentChecked(){

  }

  ngAfterViewInit() {
    let button = document.querySelector('.buttonfont');
    let buttonobserver = fromEvent(button, 'click');
    //whenever the button is pressed, the buttonobserver knows it
    //and then it executes a function upon the CLICK EVENT
    const uponeventexecute = buttonobserver.subscribe(() => {
      this.fetchdatafromserver();
    })
    }



  ngOnInit(): void {
   }

}
