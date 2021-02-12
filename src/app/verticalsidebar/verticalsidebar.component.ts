import { Component, OnInit } from '@angular/core';
import { fade, stretchout, redtoblue, bluetored,onoff  } from '../../assets/animations/animations';
import { fromEvent } from 'rxjs';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-verticalsidebar',
  templateUrl: './verticalsidebar.component.html',
  styleUrls: ['./verticalsidebar.component.css'],
  animations:[fade,stretchout, redtoblue, bluetored ,onoff]
})
export class VerticalsidebarComponent implements OnInit {
  api_base: string = 'http://localhost:5000/';
  //initialize html vars
  apiendpoint:string;
  temperature:number;
  velocity:number;
  density:number;
  //create a dataobject which contains the entries to be
  //updated on the frontend
  dataobject = {
          apiendpoint:'',
          analysispanel:'',
          temperature:0,
          velocity:0,
          density:0,
  }
  constructor() {

  }

  // animation methods
  //DEFAULT is set to false, change to true
  //when the data starts coming
  //set to false when it stops or disconnects
  datacheck:boolean;
  datacheck1:boolean;

  datacheckdict = {
          datacheck : false,
          datacheck1 : false,
  }
  //TODO: Generalize for any datacheck
  //DONE
  dataon(input:string){
    this.datacheckdict[input] = true;
   }

  dataoff(input:string){
    this.datacheckdict[input] = false;
   }

  //trigger(){
  //  this.isOpen = !this.isOpen;
  //}

  //toggle() {
  //  this.isOpen = !this.isOpen;
  //}

  updatehtml(){
    let mynum: string;
    // mynum = Math.floor(Math.random() * 100) + 1  ;
    // this.output = mynum;
  }



  fetchdatafromserver(){
    const socket = io.connect(this.api_base);
    console.log("Connected to server");

    //call api point with data
    socket.emit('api endpoint',{'data':'Connected'})

    //call api points(multiple)
    // socket.on( 'connect',() => {
    //   socket.emit( 'my event', {
    //     'data': 'User Connected'
    //   } )})


}

  ngAfterContentChecked(){

  }

  ngAfterViewInit() {
    ///////        FE API ENDPOINTS       //////
    const socket = io.connect(this.api_base);
    //receive response
    socket.on( 'receivefromserver', (msg) => {
      console.log("Data received from server");
      //send to html
      // this.output = msg['data'];
      this.dataobject['apiendpoint']   = msg['data'];
      this.dataobject['analysispanel'] = msg['data'];
      //trigger animation
      this.dataon('datacheck');
      this.dataon('datacheck1');
    })


    //selects by class
    let button = document.querySelector('.buttonfont');
    let buttonobserver = fromEvent(button, 'click');
    //whenever the button is pressed, the buttonobserver knows it
    //and then it executes a function upon the CLICK EVENT
    const uponeventexecute = buttonobserver.subscribe(() => {
      this.fetchdatafromserver();
      //ask server to send graph data

    })
    }



  ngOnInit(): void {
   }

}
