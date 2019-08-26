import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {JobsComponent} from "./jobs/jobs.component";
import { FooterComponent } from './footer/footer.component';
import { JobComponent } from './jobs/job/job.component';
import { MatrixComponent } from './matrix/matrix.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    NavbarComponent,
    FooterComponent,
    JobComponent,
    MatrixComponent
  ],
  imports: [
    // HttpModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
