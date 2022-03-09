import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclarativeWeatherForecastComponent } from './declarative-weather-forecast.component';

@NgModule({
  declarations: [DeclarativeWeatherForecastComponent],
  imports: [CommonModule],
  exports: [DeclarativeWeatherForecastComponent],
})
export class DeclarativeWeatherForecastModule {}
