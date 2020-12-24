import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string;
  constructor() {
    this.name  = 'Sir';
  }

  ngOnInit(): void {

    console.log("This works");
   }




}
