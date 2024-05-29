import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { KnobModule } from 'primeng/knob';
import { CardModule } from 'primeng/card';
import { HumidityComponent } from './humidity/humidity.component';
import { MoistureComponent } from './moisture/moisture.component';

@NgModule({
  declarations: [AppComponent, TemperatureComponent, HumidityComponent, MoistureComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    KnobModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
