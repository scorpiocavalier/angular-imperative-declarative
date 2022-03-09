import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImperativeSearchFilterModule } from './components/imperative-search-filter/imperative-search-filter.module';
import { DeclarativeSearchFilterModule } from './components/declarative-search-filter/declarative-search-filter.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ImperativeSearchFilterModule,
    DeclarativeSearchFilterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
