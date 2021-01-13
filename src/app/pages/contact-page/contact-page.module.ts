import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactPageComponent } from './contact-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactResultPageComponent } from './pages/contact-result-page/contact-result-page.component';


@NgModule({
  declarations: [ContactPageComponent, ContactResultPageComponent],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    SharedModule
  ]
})
export class ContactPageModule { }
