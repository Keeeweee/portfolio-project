import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobsComponent} from "./jobs/jobs.component";
import {MatrixComponent} from "./matrix/matrix.component";


const routes: Routes = [
    {
        path:"jobs",
        component: JobsComponent
    },
  {
    path: "",
    component: JobsComponent
  },
  {
    path: "matrix",
    component: MatrixComponent
  }
    // {
    //     path:"**",
    //     component: PagenotfoundComponent,
    // }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
