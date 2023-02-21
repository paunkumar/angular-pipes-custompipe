import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InOutputComponent } from './in-output/in-output.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path:'', component:PipesComponent, pathMatch:'full'},
  {path:'inopdecorator', component:InOutputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
