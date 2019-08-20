import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {JobsComponent} from "./jobs/jobs.component";

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    NavbarComponent
  ],
  imports: [
    // HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
