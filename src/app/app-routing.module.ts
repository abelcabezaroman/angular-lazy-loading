import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'contact', loadChildren: () =>
      import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
  },
  {
    path: 'about', loadChildren: () =>
      import('./pages/about-page/about-page.module').then(m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
