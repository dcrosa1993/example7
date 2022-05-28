import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicFormRoutingModule } from './basic-form-routing.module';
import { BasicFormComponent } from './basic-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicFormComponent
  ],
  imports: [
    CommonModule,
    BasicFormRoutingModule,
    FormsModule
  ]
})
export class BasicFormModule { }
