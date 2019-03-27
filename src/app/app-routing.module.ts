import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LightsComponent } from './lights/lights.component';
import { ProtectionComponent } from './protection/protection.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { LightEditComponent } from './light-edit/light-edit.component';
import { ProtectionEditComponent } from './protection-edit/protection-edit.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'lights', component: LightsComponent },
  { path: 'protections', component: ProtectionComponent },
  { path: 'settings', component: SettingsComponent },

  { path: 'light-edit', component: LightEditComponent },
  { path: 'protection-edit', component: ProtectionEditComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
