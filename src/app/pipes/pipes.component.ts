import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  tday=new Date();
  amt=220;
  content="Format Text,Date & Currency & Create Custom Pipes in TypeScript";
  per=98.45332;
}
