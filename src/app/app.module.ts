import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RefereeService} from './referee.service';
import {HttpClientModule} from '@angular/common/http';
import {RefereeComponent} from './referee/referee.component';
import {SettingsComponent} from './settings/settings.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'status', component: RefereeComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RefereeComponent,
    SettingsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule, HttpClientModule
  ],
  providers: [RefereeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
