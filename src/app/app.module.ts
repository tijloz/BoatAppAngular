import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightsComponent } from './lights/lights.component';
import { SettingsComponent } from './settings/settings.component';
import { ProtectionComponent } from './protection/protection.component';
import { LightDetailComponent } from './light-detail/light-detail.component';
import { HomeComponent } from './home/home.component';
import React, { Component } from 'react';
import Clock from 'react-clock';
import { LightEditComponent } from './light-edit/light-edit.component';
import { ProtectionEditComponent } from './protection-edit/protection-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    LightsComponent,
    SettingsComponent,
    ProtectionComponent,
    LightDetailComponent,
    HomeComponent,
    LightEditComponent,
    ProtectionEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
