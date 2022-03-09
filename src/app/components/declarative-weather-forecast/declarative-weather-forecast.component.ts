import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  filter,
  map,
  Observable,
  startWith,
  switchMap,
} from 'rxjs';
import { Forecast, WeatherForecast } from 'src/app/models/forecast';
import { AutocompleteLocation } from 'src/app/models/location';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-declarative-weather-forecast',
  templateUrl: './declarative-weather-forecast.component.html',
  styleUrls: ['./declarative-weather-forecast.component.css'],
})
export class DeclarativeWeatherForecastComponent implements OnInit {
  cityField: FormControl = new FormControl('');
  forecasts$: Observable<WeatherForecast[]>;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    const searchTerm$ = this.cityField.valueChanges.pipe(
      startWith(this.cityField.value),
      debounceTime(100)
    );

    const location$ = searchTerm$.pipe(
      filter((searchTerm: string) => searchTerm.length > 3),
      switchMap((searchTerm: string) =>
        this.weatherService.autocomplete(searchTerm)
      ),
      map((locations: AutocompleteLocation[]) => locations[0])
    );

    this.forecasts$ = location$.pipe(
      switchMap(({ lat, lon }) => this.weatherService.forecast(lat, lon)),
      map((forecast: Forecast) => forecast.forecast.forecastday)
    );
  }
}
