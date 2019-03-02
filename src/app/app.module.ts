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
import { LightEditComponent } from './light-edit/light-edit.component';
import { ProtectionEditComponent } from './protection-edit/protection-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import 'hammerjs';
import { MessagesComponent } from './messages/messages.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { UtilService } from './shared/services/util/util.service';


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
    MessagesComponent,
    DigitalClockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
