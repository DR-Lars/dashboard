import { Component, OnInit, HostListener } from '@angular/core';
import { MeasurementService } from '../measurement.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.css'],
})
export class AdditionalComponent {
  latestMeasurement!: Observable<any>;
  screenHeight!: number;
  screenWidth!: number;

  constructor(private MeasurementService: MeasurementService) {}

  ngOnInit(): void {
    this.latestMeasurement = this.MeasurementService.getLatestMeasurement();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
}

