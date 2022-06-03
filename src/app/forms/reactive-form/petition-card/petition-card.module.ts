import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetitionCardComponent } from './petition-card.component';
import { PetitionCardMaterialModule } from './petition-card-material.module';



@NgModule({
  declarations: [
    PetitionCardComponent
  ],
  imports: [
    CommonModule,
    PetitionCardMaterialModule
  ],
  exports:[
    PetitionCardComponent
  ]
})
export class PetitionCardModule { }
