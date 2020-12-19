import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css']
})
export class TopheaderComponent implements OnInit {
  name: string;
  constructor() {
    this.name  = 'Sir';
  }

  ngOnInit(): void {

    console.log("This works");
   }




}
