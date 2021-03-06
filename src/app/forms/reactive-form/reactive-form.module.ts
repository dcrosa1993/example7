import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormMaterialModule } from './reactive-form-material.module';
import { PetitionCardModule } from './petition-card/petition-card.module';


@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PetitionCardModule
  ]
})
export class ReactiveFormModule { }
