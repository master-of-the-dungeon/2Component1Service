import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {BrowserModule} from '@angular/platform-browser';
import {importProvidersFrom} from '@angular/core';
import {Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const routes: Routes = [
  // Например, { path: '', component: HomeComponent }, etc.
];
bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, BrowserAnimationsModule)],})
  .catch((err) => console.error(err));
