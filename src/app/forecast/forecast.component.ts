import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
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

  formatDate(date: string): string {
    const dateObject = new Date(date);
    const day = ('0' + dateObject.getDate()).slice(-2);
    const month = ('0' + (dateObject.getMonth() + 1)).slice(-2);
    return `${day}/${month}`;
  }

  roundNumber(num: number): number {
    num = Math.round(num * 10) / 10;
    return num;
  }

  prin(pr: any) {
    console.log(pr);
  }

  getImage(ima: any): string {
    console.log(ima);
    return 'https://openweathermap.org/img/wn/' + ima + '@2x.png';
  }

  ngOnInit(): void {
    this.openWeatherService = this.OpenWeatherService.getForecast();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
}
