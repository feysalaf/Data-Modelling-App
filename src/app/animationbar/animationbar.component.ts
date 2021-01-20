import { fade, stretchout } from '../../assets/animations/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-animationbar',
  templateUrl: './animationbar.component.html',
  styleUrls: ['./animationbar.component.css'],

  animations: [ fade, stretchout ]

})
export class AnimationbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
