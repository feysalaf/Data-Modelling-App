import { Component } from '@angular/core';
import { fade, stretchout,colorfadeinout  } from '../assets/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[colorfadeinout]
})
export class AppComponent {
  title = 'DataModellingInterface';
}
