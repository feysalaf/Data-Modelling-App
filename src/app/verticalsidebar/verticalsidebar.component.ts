import { Component, OnInit } from '@angular/core';
import { fade, stretchout, redtoblue, bluetored,openclose  } from '../../assets/animations/animations';
import { fromEvent } from 'rxjs';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-verticalsidebar',
  templateUrl: './verticalsidebar.component.html',
  styleUrls: ['./verticalsidebar.component.css'],
  animations:[fade,stretchout, redtoblue, bluetored ,openclose]
})
export class VerticalsidebarComponent implements OnInit {

  //initialize html vars
  apiendpoint:string;
  temperature:number;
  velocity:number;
  density:number;
  //create a dataobject which contains the entries to be
  //updated on the frontend
  dataobject = {
    apiendpoint:'',
    temperature:0,
    velocity:0,
    density:0,
  }
  constructor() {

  }

  // animation methods
  isOpen = false;

  trigger(){
    this.isOpen = !this.isOpen;
  }

  toggle() {
    this.isOpen = !this.isOpen;
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
    socket.emit('api endpoint',{'data':'Connected'})

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
      this.dataobject['apiendpoint'] = msg['data'];
      //trigger animation
      let obj = this.trigger();
      console.log(obj);
    })
}

  ngAfterContentChecked(){

  }

  ngAfterViewInit() {

    //selects by class
    let button = document.querySelector('.buttonfont');
    let buttonobserver = fromEvent(button, 'click');
    //whenever the button is pressed, the buttonobserver knows it
    //and then it executes a function upon the CLICK EVENT
    const uponeventexecute = buttonobserver.subscribe(() => {
      this.toggle();
    })
    }



  ngOnInit(): void {
   }

}
