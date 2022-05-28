import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'basic', loadChildren: () => import('./forms/basic-form/basic-form.module').then(m => m.BasicFormModule) }, 
  { path: 'reactive', loadChildren: () => import('./forms/reactive-form/reactive-form.module').then(m => m.ReactiveFormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
