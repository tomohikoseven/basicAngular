import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

// components
import { FormIntroComponent } from './form-intro/form-intro.component';
import { TopComponent } from './top/top.component';

// routing
const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'top', component: TopComponent },
  { path: 'form-intro', component: FormIntroComponent },
  { path: '**', component: FormIntroComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
