import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImperativeSearchFilterComponent } from './imperative-search-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ImperativeSearchFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [ImperativeSearchFilterComponent],
})
export class ImperativeSearchFilterModule {}
