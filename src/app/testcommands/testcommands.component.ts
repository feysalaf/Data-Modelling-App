import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcommands',
  templateUrl: './testcommands.component.html',
  styleUrls: ['./testcommands.component.css']
})
export class TestcommandsComponent implements OnInit {
  names: string[];
  constructor() {
    this.names = ['Sir','Faisal','Afzal II'];
  }

  ngOnInit(): void {
  }

}
