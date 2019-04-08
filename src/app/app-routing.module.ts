import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

// components
import { TopComponent } from './top/top.component';
import { FormIntroComponent } from './form-intro/form-intro.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

// routing
const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'top', component: TopComponent },
  { path: 'form-intro', component: FormIntroComponent },
  { path: 'name-editor', component: NameEditorComponent },
  { path: 'profile-editor', component: ProfileEditorComponent },
  { path: '**', component: FormIntroComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
