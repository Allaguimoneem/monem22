import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ParantComponent } from './parant/parant.component';
import { FilsComponent } from './fils/fils.component';
import { ForComponent } from './for/for.component';

@NgModule({
  declarations: [
    AppComponent,
    ParantComponent,
    FilsComponent,
    ForComponent
  ],
  imports: [
    BrowserModule , FormsModule , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
