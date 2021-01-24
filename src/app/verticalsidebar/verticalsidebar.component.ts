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
  output:number;
  constructor() {
  }

  updatehtml(){
    let mynum: number;
    mynum = Math.floor(Math.random() * 100) + 1  ;
    this.output = mynum;

  }

  fetchdatafromserver(){
    let api_url: string;
    api_url = "127.0.0.1:5000/fetchdata";
    const socket = io.connect('http://localhost:5000/');
    console.log("Connected to server");
    //Describes one event
    socket.on( 'connect', function() {
      socket.emit( 'my event', {
        data: 'User Connected'
      } )})

    //receive response
    socket.on( 'receivefromserver', function( msg ) {
      console.log("Data received from server")
  })}

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
