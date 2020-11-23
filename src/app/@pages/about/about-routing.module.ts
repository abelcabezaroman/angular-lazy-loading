import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about.component";
import { AboutDetailComponent } from './pages/about-detail/about-detail.component';


const routes: Routes = [
  {
    path: '', component: AboutComponent
  },  {
    path: ':user', component: AboutDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
