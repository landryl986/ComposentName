import { NgModule } from '@angular/core';
import {GreenComponent} from './Components/green/green.component';
import {GreyComponent} from './Components/grey/grey.component';
import {PinkComponent} from './Components/pink/pink.component';
import {BlueComponent} from './Components/blue/blue.component';
import {OrangeComponent} from './Components/orange/orange.component';
import {RedComponent} from './Components/red/red.component';
import {TaskComponent} from './Components/task/task.component';
import {PortalComponent} from './Components/portal.component';
import {PortalRoutingModule} from './portal-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [
    GreenComponent,
    GreyComponent,
    PinkComponent,
    BlueComponent,
    OrangeComponent,
    RedComponent,
    TaskComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortalRoutingModule,
    FormsModule
  ]
})
export class PortalModule { }
