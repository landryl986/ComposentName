import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlueComponent } from './blue/blue.component';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { RedComponent } from './red/red.component';
import { LoggedGuardGuard } from './guard/logged-guard.guard';
import { IsLoggedGuard } from './guard/is-logged.guard';

const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
    canActivate: [LoggedGuardGuard],
    children: [
      {path: '', component: RedComponent},
      {path: 'red', component: RedComponent},
      {path: 'blue', component: BlueComponent}
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
