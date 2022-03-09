import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclarativeSearchFilterComponent } from './declarative-search-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DeclarativeSearchFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [DeclarativeSearchFilterComponent],
})
export class DeclarativeSearchFilterModule {}
