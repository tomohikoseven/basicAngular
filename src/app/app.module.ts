import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormIntroComponent } from './form-intro/form-intro.component';
import { TopComponent } from './top/top.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormValidatorComponent } from './form-validator/form-validator.component';


@NgModule({
  declarations: [
    AppComponent,
    FormIntroComponent,
    TopComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    FormTemplateComponent,
    FormValidatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
