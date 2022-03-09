import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImperativeSearchFilterComponent } from './imperative-search-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ImperativeSearchFilterComponent],
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
  exports: [ImperativeSearchFilterComponent],
})
export class ImperativeSearchFilterModule {}
