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
  output:string;
  constructor() {
  }

  updatehtml(){
    let mynum: string;
    // mynum = Math.floor(Math.random() * 100) + 1  ;
    // this.output = mynum;

  }

  fetchdatafromserver(){
    let api_url: string;
    let datas: string;
    api_url = "127.0.0.1:5000/fetchdata";
    const socket = io.connect('http://localhost:5000/');
    console.log("Connected to server");
    //Describes one event
    socket.on( 'connect',() => {
      socket.emit( 'my event', {
        'data': 'User Connected'
      } )})

    //receive response
    socket.on( 'receivefromserver', (msg) => {
      console.log("Data received from server");
      datas = msg['data'];
      console.log("The data is " + datas);
      this.output = msg['data'];
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
