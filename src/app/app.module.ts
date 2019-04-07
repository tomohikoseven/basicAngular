import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormIntroComponent } from './form-intro/form-intro.component';
import { TopComponent } from './top/top.component';


@NgModule({
  declarations: [
    AppComponent,
    FormIntroComponent,
    TopComponent
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
