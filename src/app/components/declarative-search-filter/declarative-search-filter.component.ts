import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, debounceTime, map, Observable, startWith } from 'rxjs';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-declarative-search-filter',
  templateUrl: './declarative-search-filter.component.html',
  styleUrls: ['./declarative-search-filter.component.css'],
})
export class DeclarativeSearchFilterComponent implements OnInit {
  searchField: FormControl = new FormControl('');
  filteredClients$: Observable<Client[]>;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    // Get a stream of the clients
    const clients$ = this.clientService.getClients();

    // Get a stream of the search
    const searchTerm$ = this.searchField.valueChanges.pipe(
      // Start with the initial value of searchField
      // so that we can display an initial list of clients
      // then mirror all of its new emissions
      startWith(this.searchField.value),
      debounceTime(100)
    );

    // Combine into one stream the latest values from both streams
    // which consists of the list of clients filtered by the search term
    this.filteredClients$ = combineLatest([clients$, searchTerm$]).pipe(
      map(([clients, searchTerm]) =>
        searchTerm === ''
          ? clients
          : clients.filter(({ firstName, lastName }) => {
              const fullName = [firstName, lastName].join(' ');

              return [firstName, lastName, fullName].some((name) =>
                name.toLowerCase().includes(searchTerm.toLowerCase())
              );
            })
      )
    );
  }
}
