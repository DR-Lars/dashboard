import { Component, OnInit, HostListener } from '@angular/core';
import { MeasurementService } from '../measurement.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css'],
})
export class HumidityComponent {
  latestMeasurement!: Observable<any>;
  screenHeight!: number;
  screenWidth!: number;
  humidity!: number;

  constructor(private MeasurementService: MeasurementService) {}

  roundNumber(num: number): number {
    num = Math.round(num * 10) / 10;
    return num;
  }

  ngOnInit(): void {
    this.latestMeasurement = this.MeasurementService.getLatestMeasurement();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
}
