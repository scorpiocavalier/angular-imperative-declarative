import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as dayjs from 'dayjs';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { Forecast, WeatherForecast } from 'src/app/models/forecast';
import { AutocompleteLocation } from 'src/app/models/location';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-imperative-weather-forecast',
  templateUrl: './imperative-weather-forecast.component.html',
  styleUrls: ['./imperative-weather-forecast.component.css'],
})
export class ImperativeWeatherForecastComponent implements OnInit, OnDestroy {
  cityField: FormControl = new FormControl('Montreal');
  forecasts: WeatherForecast[] = [];
  location: AutocompleteLocation;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.cityField.valueChanges
      .pipe(takeUntil(this.destroy$), debounceTime(100))
      .subscribe((searchTerm: string) => {
        if (searchTerm.length > 3) {
          this.weatherService
            .autocomplete(searchTerm)
            .pipe(takeUntil(this.destroy$))
            .subscribe((locations: AutocompleteLocation[]) => {
              this.location = locations[0];
              const { lat, lon } = this.location;

              this.weatherService
                .forecast(lat, lon)
                .pipe(takeUntil(this.destroy$))
                .subscribe((forecast: Forecast) => {
                  this.forecasts = forecast.forecast.forecastday;
                });
            });
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getDayFromDate(forecast: WeatherForecast) {
    return dayjs(forecast.date).format('dddd');
  }
}
