import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from "../../shared/shared.module";
import { AboutDetailComponent } from './pages/about-detail/about-detail.component';


@NgModule({
  declarations: [AboutComponent, AboutDetailComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
  ]
})
export class AboutModule {}
