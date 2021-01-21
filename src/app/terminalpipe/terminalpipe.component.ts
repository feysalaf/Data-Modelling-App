import { Component, OnInit } from '@angular/core';
import { fade, stretchout } from '../../assets/animations/animations';

@Component({
  selector: 'app-terminalpipe',
  templateUrl: './terminalpipe.component.html',
  styleUrls: ['./terminalpipe.component.css'],
  animations:[fade,stretchout]
})
export class TerminalpipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
