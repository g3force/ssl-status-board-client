import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RefereeService} from './referee.service';
import {HttpClientModule} from '@angular/common/http';
import {RefereeComponent} from './referee/referee.component';
import {SettingsComponent} from './settings/settings.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RefereeComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MaterialModule, BrowserAnimationsModule
  ],
  providers: [RefereeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
