import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';

const routes: Routes = [
      {path: 'red', component: RedComponent},
      {path: 'blue', component: BlueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
