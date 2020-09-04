import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutChildComponent } from './components/about-child/about-child.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [AboutComponent, AboutChildComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule {}
