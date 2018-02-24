import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RefereeService} from './referee.service';
import {HttpClientModule} from '@angular/common/http';
import {RefereeComponent} from './referee/referee.component';
import {SettingsComponent} from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    RefereeComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [RefereeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
