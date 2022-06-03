import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports:[
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class ReactiveFormMaterialModule { }
