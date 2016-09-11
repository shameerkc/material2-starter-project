import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app works!';
}

