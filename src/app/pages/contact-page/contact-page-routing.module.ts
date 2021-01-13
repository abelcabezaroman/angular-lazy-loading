import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';
import { ContactResultPageComponent } from './pages/contact-result-page/contact-result-page.component';

const routes: Routes = [
  {path: '', component: ContactPageComponent},
  {path: ':result', component: ContactResultPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactPageRoutingModule { }
