import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { AnshumanComponent } from './anshuman/anshuman.component';
import { TwoWayComponent } from './two-way/two-way.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';
import { MdfAnshumanComponent } from './mdf-anshuman/mdf-anshuman.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    PropertyBindingComponent,
    EventBindingComponent,
    AnshumanComponent,
    TwoWayComponent,
    TdfComponent,
    MdfComponent,
    MdfAnshumanComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
