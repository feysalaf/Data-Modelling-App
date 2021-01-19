import { fade } from '../../assets/animations/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-animationbar',
  templateUrl: './animationbar.component.html',
  styleUrls: ['./animationbar.component.css'],

  animations: [ fade, ]

})
export class AnimationbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
