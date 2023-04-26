import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerDashboardComponent } from './shared/components/passenger-dashboard/passenger-dashboard.component';
import { PassCardComponent } from './shared/components/pass-card/pass-card.component';
import { PassCountComponent } from './shared/components/pass-count/pass-count.component';
import { ConvertDataPipe } from './shared/components/pipes/convert-data.pipe';
import { CheckInPipe } from './shared/components/pipes/check-in.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PassengerDashboardComponent,
    PassCardComponent,
    PassCountComponent,
    ConvertDataPipe,
    CheckInPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
