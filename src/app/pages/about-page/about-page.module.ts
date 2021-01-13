import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MePageComponent } from './pages/me-page/me-page.component';
import { YouPageComponent } from './pages/you-page/you-page.component';


@NgModule({
  declarations: [AboutPageComponent, MePageComponent, YouPageComponent],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    SharedModule
  ]
})
export class AboutPageModule { }
