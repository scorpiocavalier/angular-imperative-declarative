import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImperativeSearchFilterModule } from './components/imperative-search-filter/imperative-search-filter.module';
import { DeclarativeSearchFilterModule } from './components/declarative-search-filter/declarative-search-filter.module';
import { ImperativeWeatherForecastModule } from './components/imperative-weather-forecast/imperative-weather-forecast.module';
import { DeclarativeWeatherForecastModule } from './components/declarative-weather-forecast/declarative-weather-forecast.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ImperativeSearchFilterModule,
    DeclarativeSearchFilterModule,
    ImperativeWeatherForecastModule,
    DeclarativeWeatherForecastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
