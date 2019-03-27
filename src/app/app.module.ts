import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule, MatCardModule, MatIconModule, MatSliderModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LightsComponent} from './lights/lights.component';
import {SettingsComponent} from './settings/settings.component';
import {ProtectionComponent} from './protection/protection.component';
import {LightDetailComponent} from './light-detail/light-detail.component';
import {HomeComponent} from './home/home.component';
import {LightEditComponent} from './light-edit/light-edit.component';
import {ProtectionEditComponent} from './protection-edit/protection-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {AgmCoreModule} from '@agm/core';

import 'hammerjs';
import {MessagesComponent} from './messages/messages.component';
import {DigitalClockComponent} from './digital-clock/digital-clock.component';
import {UtilService} from './shared/services/util/util.service';
import {NgxElectronModule } from 'ngx-electron';
import { TrackingComponent } from './tracking/tracking.component';
import { WifiComponent } from './wifi/wifi.component';
import { ProtectionDetailComponent } from './protection-detail/protection-detail.component';


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
    TrackingComponent,
    WifiComponent,
    ProtectionDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    NgxElectronModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmeuRDj4XQR3MPTxaN7Wh1uaevNhKUATA'
    })
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
