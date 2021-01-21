import { Component, OnInit } from '@angular/core';
import { fade } from '../../assets/animations/animations';

@Component({
  selector: 'app-infopanelvertical',
  templateUrl: './infopanelvertical.component.html',
  styleUrls: ['./infopanelvertical.component.css'],
  animations:[fade]
})
export class InfopanelverticalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
