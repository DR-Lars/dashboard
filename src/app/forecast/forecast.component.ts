import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenweatherService } from '../openweather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent {
  openWeatherService!: Observable<any>;
  screenHeight!: number;
  screenWidth!: number;

  constructor(private OpenWeatherService: OpenweatherService) {}

  ngOnInit(): void {
    this.openWeatherService = this.OpenWeatherService.getForecast();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
}
