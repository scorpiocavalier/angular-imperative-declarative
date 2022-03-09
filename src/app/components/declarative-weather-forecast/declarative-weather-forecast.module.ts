import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclarativeWeatherForecastComponent } from './declarative-weather-forecast.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DeclarativeWeatherForecastComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [DeclarativeWeatherForecastComponent],
})
export class DeclarativeWeatherForecastModule {}
