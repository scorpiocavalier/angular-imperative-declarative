import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Forecast } from '../models/forecast';
import { AutocompleteLocation } from '../models/location';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly ENDPOINT = 'https://api.weatherapi.com/v1';
  private readonly FORECAST_DAYS = 10;

  constructor(private http: HttpClient) {}

  autocomplete(query: string): Observable<AutocompleteLocation[]> {
    const params = new HttpParams({
      fromObject: {
        key: environment.weatherAPIKey,
        q: query,
      },
    });

    return this.http.get<AutocompleteLocation[]>(
      `${this.ENDPOINT}/search.json`,
      { params }
    );
  }

  forecast(lat: number, lon: number): Observable<Forecast> {
    const params = new HttpParams({
      fromObject: {
        key: environment.weatherAPIKey,
        days: this.FORECAST_DAYS,
        q: [lat, lon].join(','),
      },
    });

    return this.http.get<Forecast>(`${this.ENDPOINT}/forecast.json`, {
      params,
    });
  }
}
