import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreenComponent } from './green/green.component';
import { GreyComponent } from './grey/grey.component';
import { PinkComponent } from './pink/pink.component';
import { BlueComponent } from './blue/blue.component';
import { OrangeComponent } from './orange/orange.component';
import { RedComponent } from './red/red.component';
import { TaskComponent } from './task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';

@NgModule({
  declarations: [
    AppComponent,
    GreenComponent,
    GreyComponent,
    PinkComponent,
    BlueComponent,
    OrangeComponent,
    RedComponent,
    TaskComponent,
    LoginComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
