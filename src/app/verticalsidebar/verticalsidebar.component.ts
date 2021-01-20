import { Component, OnInit } from '@angular/core';
import { fade, stretchout  } from '../../assets/animations/animations';

@Component({
  selector: 'app-verticalsidebar',
  templateUrl: './verticalsidebar.component.html',
  styleUrls: ['./verticalsidebar.component.css'],
  animations:[fade,stretchout ]
})
export class VerticalsidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
