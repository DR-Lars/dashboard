import { Component, OnInit } from '@angular/core';
import { MeasurementService } from '../measurement.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
})
export class TemperatureComponent implements OnInit {
  latestMeasurement!: Observable<any>;

  constructor(private MeasurementService: MeasurementService) {}

  ngOnInit(): void {
    this.latestMeasurement = this.MeasurementService.getLatestMeasurement();
  }
}
