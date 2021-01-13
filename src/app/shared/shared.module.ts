import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { HeadingComponent } from './components/heading/heading.component';



@NgModule({
  declarations: [ButtonComponent, HeadingComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, HeadingComponent]
})
export class SharedModule { }
