import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page.component';
import { MePageComponent } from './pages/me-page/me-page.component';
import { YouPageComponent } from './pages/you-page/you-page.component';

const routes: Routes = [
  {path: '', component: AboutPageComponent},
  {path: 'me', component: MePageComponent},
  {path: 'you', component: YouPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutPageRoutingModule { }
