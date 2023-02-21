import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  tday=new Date();
  amt=220;
  content="Format Text,Date & Currency & Create Custom Pipes in TypeScript";
  per=98.45332;
}
