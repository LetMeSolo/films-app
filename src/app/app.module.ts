import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMeterialExampleComponent } from './components/angular-meterial-example/angular-meterial-example.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FilmDescriptionComponent } from './components/film-description/film-description.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularMeterialExampleComponent,
    FilmItemComponent,
    FilmDescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
